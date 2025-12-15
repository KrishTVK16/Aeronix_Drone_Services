import { GoogleGenAI } from "@google/genai";
import { logChatInteraction, saveContactForm } from './db.js';

// Scroll Handler for Navbar
const navbar = document.getElementById('mainNavbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
}

// Active Section Tracker (Mobile Label)
const sections = document.querySelectorAll('section');
const activeLabel = document.getElementById('activeSectionLabel');

if (activeLabel && sections.length > 0) {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.25 // Trigger when 25% of section is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let label = '';
                // Map IDs to friendly names
                switch(entry.target.id) {
                    case 'hero': label = ''; break; // No label for hero
                    case 'solutions': label = 'Services'; break;
                    case 'technology': label = 'Fleet'; break;
                    case 'about': label = 'About'; break;
                    case 'contact': label = 'Contact'; break;
                }
                
                // Update text with a fade effect
                if (activeLabel.textContent !== label) {
                    activeLabel.style.opacity = '0';
                    setTimeout(() => {
                        activeLabel.textContent = label;
                        activeLabel.style.opacity = '0.75';
                    }, 200);
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
}

// Contact Form Handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('contactEmail').value;
        const btn = contactForm.querySelector('button');
        
        btn.disabled = true;
        btn.textContent = 'Sending...';
        
        // Use the DB module
        const success = await saveContactForm({ email, timestamp: new Date() });
        
        if (success) {
            btn.textContent = 'Sent!';
            btn.classList.remove('btn-light');
            btn.classList.add('btn-success');
        } else {
            btn.textContent = 'Error';
            btn.disabled = false;
        }
    });
}

// Chat Widget Logic
const chatToggle = document.getElementById('chatToggle');
const chatWindow = document.getElementById('chatWindow');
const closeChat = document.getElementById('closeChat');
const chatForm = document.getElementById('chatForm');
const chatInput = document.getElementById('chatInput');
const chatBody = document.getElementById('chatBody');

// Only run chat logic if elements exist
if (chatToggle && chatWindow && closeChat && chatForm && chatInput && chatBody) {
    const chatIcon = chatToggle.querySelector('i');
    let isChatOpen = false;

    function toggleChat() {
        isChatOpen = !isChatOpen;
        if (isChatOpen) {
            chatWindow.classList.add('open');
            if (chatIcon) {
                chatIcon.classList.remove('bi-chat-dots-fill');
                chatIcon.classList.add('bi-x-lg');
            }
            setTimeout(() => chatInput.focus(), 100);
        } else {
            chatWindow.classList.remove('open');
            if (chatIcon) {
                chatIcon.classList.remove('bi-x-lg');
                chatIcon.classList.add('bi-chat-dots-fill');
            }
        }
    }

    chatToggle.addEventListener('click', toggleChat);
    closeChat.addEventListener('click', toggleChat);

    // API Key Handling & GenAI Init
    let ai = null;
    try {
        const apiKey = (typeof process !== 'undefined' && process.env) ? process.env.API_KEY : null;
        if (apiKey) {
            ai = new GoogleGenAI({ apiKey: apiKey });
        } else {
            // Note: API Key is expected to be missing in static environments (GitHub Pages)
            console.log("GenAI Mode: UI-only (No API Key found)");
        }
    } catch (e) {
        console.error("Error initializing AI:", e);
    }

    function appendMessage(text, role) {
        const msgDiv = document.createElement('div');
        msgDiv.classList.add('message', role);
        msgDiv.textContent = text;
        chatBody.appendChild(msgDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    function showLoading() {
        const loader = document.createElement('div');
        loader.id = 'chatLoader';
        loader.classList.add('message', 'model', 'd-flex', 'align-items-center', 'gap-2');
        loader.innerHTML = '<div class="spinner-border spinner-border-sm text-info" role="status"></div> <span class="small text-muted">Analyzing...</span>';
        chatBody.appendChild(loader);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    function removeLoading() {
        const loader = document.getElementById('chatLoader');
        if (loader) loader.remove();
    }

    chatForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const text = chatInput.value.trim();
        if (!text) return;

        // Add user message
        appendMessage(text, 'user');
        chatInput.value = '';
        
        // Show loading
        showLoading();

        if (!ai) {
            removeLoading();
            appendMessage("API Key missing. Cannot connect to neural network.", 'model');
            return;
        }

        try {
            // Call Gemini
            const modelId = 'gemini-2.5-flash';
            const response = await ai.models.generateContent({
                model: modelId,
                contents: text,
                config: {
                    systemInstruction: `You are 'Nexus', the advanced AI assistant for Aeronix, a professional Drone Services provider. 
                    Your tone is knowledgeable, safety-focused, and professional.
                    Answer questions about aerial mapping, thermal inspections, drone cinematography, and FAA Part 107 regulations.
                    If asked about pricing or scheduling a flight, suggest contacting the sales team.
                    Keep answers under 80 words.`,
                },
            });

            removeLoading();
            const botText = response.text || "Communication interference. Please retry.";
            appendMessage(botText, 'model');

            // Log the interaction to the DB (Placeholder)
            logChatInteraction(text, botText);

        } catch (error) {
            console.error("Gemini Error:", error);
            removeLoading();
            appendMessage("Link lost. Satellite connection unstable.", 'model');
        }
    });
}