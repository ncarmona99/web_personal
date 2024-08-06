window.addEventListener('DOMContentLoaded', event => {

    // Función de reducción de navbar
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Encoger NavBar
    navbarShrink();

    // Encogimiento de navbar al realizar scroll de página
    document.addEventListener('scroll', navbarShrink);

    // Activa Scrollspy de bootstrap
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Navbar colapsa de forma responsiva
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Lightbox Plugin
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });
});

document.addEventListener("mousemove", parallax);
    function parallax(event) {
        this.querySelectorAll(".mouse").forEach((shift) => {
            const position = shift.getAttribute("value");
            const x = (window.innerWidth - event.pageX * position) / 90;
            const y = (window.innerHeight - event.pageY * position) / 90;

            shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
}