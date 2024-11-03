const backToTopButton = document.getElementById('backToTop');

    
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



// scroll menu 

let lastScrollTop = 0; 
const menu = document.querySelector('.menu'); 

// Initialize the menu state
menu.classList.add('menu-visible'); 

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Check if the user is scrolling up or down
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

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
});

//responsive menu

const hamburger = document.querySelector('.hamburger');
const menuItems = document.querySelector('.menu-items');

hamburger.addEventListener('click', () => {
    menuItems.classList.toggle('show'); 
});



