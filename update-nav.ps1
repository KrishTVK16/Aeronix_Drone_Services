# Update script for navigation
$navTemplate = @'
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto align-items-center gap-lg-4">
                    <!-- Home Dropdown -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="homeDropdown" role="button" 
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Home
                        </a>
                        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="homeDropdown">
                            <li><a class="dropdown-item" href="index.html">Home 1</a></li>
                            <li><a class="dropdown-item" href="home-2.html">Home 2</a></li>
                        </ul>
                    </li>
                    <li class="nav-item"><a class="nav-link" href="services.html">Services</a></li>
                    <li class="nav-item"><a class="nav-link" href="technology.html">Fleet & Tech</a></li>
                    <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
                    <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
                    
                    <!-- Auth Buttons -->
                    <li class="nav-item" id="authButtons">
                        <div class="d-flex gap-2 align-items-center mt-3 mt-lg-0">
                            <a href="login.html" class="btn btn-sm btn-outline-custom">Login</a>
                            <a href="signup.html" class="btn btn-sm btn-gradient">Sign Up</a>
                        </div>
                    </li>
                    
                    <!-- User Menu (hidden by default) -->
                    <li class="nav-item dropdown" id="userMenu" style="display: none;">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                            <i class="bi bi-person-circle me-1"></i>
                            <span class="user-name">User</span>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-dark dropdown-menu-end">
                            <li><a class="dropdown-item" href="#" id="logoutBtn">
                                <i class="bi bi-box-arrow-right me-2"></i>Logout
                            </a></li>
                        </ul>
                    </li>
                    
                    <!-- Theme Toggle -->
                    <li class="nav-item">
                        <button id="themeToggle" class="btn btn-sm btn-outline-custom border-0 p-2">
                            <i class="bi bi-sun-fill"></i>
                        </button>
                    </li>
                </ul>
            </div>
'@

$files = @("about.html", "contact.html", "blog.html", "careers.html", "privacy.html")

foreach ($file in $files) {
    $path = "e:\OfficeDownloads_\DecWebsites\Aeronix_Drone_Services\$file"
    
    if (Test-Path $path) {
        $content = Get-Content $path -Raw
        
        # Remove chat widget
        $content = $content -replace '(?s)\s*<button id="chatToggle".*?</div>\s*(?=\s*<script)', ''
        
        # Add scripts if missing
        if ($content -notmatch 'theme\.js') {
            $content = $content -replace '(\s*<script type="module" src="app\.js"></script>)', '$1`r`n    <script type="module" src="theme.js"></script>`r`n    <script type="module" src="auth.js"></script>'
        }
        
        Set-Content $path -Value $content -NoNewline
        Write-Host "Updated $file"
    }
}

Write-Host "All files updated successfully!"
