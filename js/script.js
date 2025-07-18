// Mobile menu toggle functionality
    document.addEventListener('DOMContentLoaded', function() {
        // Select the mobile menu button
        const mobileMenuButton = document.querySelector('.md\\:hidden');
        // Create mobile menu container
        const mobileMenu = document.createElement('div');
        mobileMenu.className = 'hidden fixed inset-0 bg-white z-50 flex flex-col items-center justify-center';
        mobileMenu.innerHTML = `
            <button class="absolute top-6 right-6 text-2xl">
                <i class="fas fa-times"></i>
            </button>
            <div class="flex flex-col items-center space-y-8">
                <a href="#" class="text-2xl font-medium">About</a>
                <a href="#" class="text-2xl font-medium">Products</a>
                <a href="#" class="text-2xl font-medium">Pricing</a>
                <a href="#" class="text-2xl font-medium">Resources</a>
                <div class="flex space-x-4 mt-8">
                    <div class="text-left">
                        <a href="#">
                            <img src="/images/App-store.png" alt="App Store" class="h-10">
                        </a>
                    </div>
                    <div class="text-left">
                       <a href="#">
                            <img src="/images/Store badge.png" alt="Google Play" class="h-10">
                        </a>
                    </div>
                  
                </div>
            </div>
        `;
        document.body.appendChild(mobileMenu);

        // Toggle mobile menu visibility
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        });

        // Close mobile menu
        mobileMenu.querySelector('button').addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
            document.body.style.overflow = '';
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;

                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });

                    // Close mobile menu if open
                    if (!mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                        document.body.style.overflow = '';
                    }
                }
            });
        });

        // Animation for features on scroll
        const featureItems = document.querySelectorAll('.bg-white.p-6.rounded-lg');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fadeIn');
                }
            });
        }, {
            threshold: 0.1
        });

        featureItems.forEach(item => {
            observer.observe(item);
        });

        // Add hover effect for buttons
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            button.addEventListener('mouseenter', function() {
                this.classList.add('scale-105');
                this.classList.add('transition-transform');
                this.classList.add('duration-200');
            });
            button.addEventListener('mouseleave', function() {
                this.classList.remove('scale-105');
            });
        });

        // Add click effect for Get Started button
        const getStartedButton = document.querySelector('.bg-purple-600');
        if (getStartedButton) {
            getStartedButton.addEventListener('click', function() {
                this.classList.add('animate-pulse');
                setTimeout(() => {
                    this.classList.remove('animate-pulse');
                }, 300);
            });
        }

        // Watch Video button interaction
        const watchVideoButton = document.querySelector('button svg');
        if (watchVideoButton) {
            watchVideoButton.parentElement.addEventListener('click', function() {
                console.log('Video play requested');
                // Placeholder for video playback logic
                // Could open a modal or redirect to a video page
            });
        }
    });