document.addEventListener('DOMContentLoaded', () => {
    // Back to top button functionality
    const backToTopButton = document.getElementById('backToTop');
    if (backToTopButton) {
        window.onscroll = function() {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                backToTopButton.style.display = "block";
            } else {
                backToTopButton.style.display = "none";
            }
        };

        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Scroll menu functionality
    let lastScrollTop = 0;
    const menu = document.querySelector('.menu');
    if (menu) {
        menu.classList.add('menu-visible'); // Initialize menu state

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

            // Check if user is scrolling up or down
            if (currentScroll > lastScrollTop) {
                // Scrolling down
                menu.classList.remove('menu-visible');
                menu.classList.add('menu-hidden');
            } else {
                // Scrolling up
                menu.classList.remove('menu-hidden');
                menu.classList.add('menu-visible');
            }

            if (currentScroll > 50) {
                menu.classList.add('scrolled');
            } else {
                menu.classList.remove('scrolled');
            }

            lastScrollTop = Math.max(0, currentScroll); // Prevent negative scroll values
        });
    }

    // Responsive menu functionality
    const hamburger = document.querySelector('.hamburger');
    const menuItems = document.querySelector('.menu-items');
    if (hamburger && menuItems) {
        hamburger.addEventListener('click', () => {
            menuItems.classList.toggle('show');
        });
    }
});
