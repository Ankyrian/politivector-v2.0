(function () {
    const logo = document.querySelector('#logo-container');
    logo.addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    const menuIcon = document.querySelector('#menu-icon');
    const menu = document.querySelector('#menu');
    const menuList = document.querySelector('#menu-list')

    menuIcon.addEventListener('click', () => {
        const isOpen = menuIcon.getAttribute('class') === 'open';
        menuIcon.setAttribute('class', isOpen ? 'closed' : 'open');
        menu.style.setProperty('height', isOpen ? '0px' : `${menuList.clientHeight}px`);
    });

    const mediaQuery = window.matchMedia('(min-width: 50em)');
    setMedia(menu, mediaQuery);

    mediaQuery.addEventListener('change', (mediaQuery) => {
        setMedia(menu, mediaQuery);

        if (menuIcon.getAttribute('class') === 'open') {
            menuIcon.setAttribute('class', 'closed');
        }
    });
})();

function setMedia(menu, mediaQuery) {
    const isDesktop = mediaQuery.matches;
    menu.style.setProperty('height', isDesktop ? 'auto' : '0px');
}