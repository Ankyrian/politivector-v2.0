function createHeader() {
    const header = document.querySelector('header');

    const homeIconContainer = createHTMLElement('div',
        {
            'id': 'home-icon-container'
        })

    const homeIcon = createHTMLElement('object',
        {
            'id': 'home-icon',
            'data': '/assets/navigation/home.svg'
        });

    homeIconContainer.appendChild(homeIcon);

    const menuIcon = createHTMLElement('svg',
        {
            'id': 'menu-icon',
            'viewBox': '0 0 100 100'
        });

    const lines = ['top', 'middle', 'bottom'];

    for (let i = 0; i < 3; i++) {
        const rect = createHTMLElement('rect',
            {
                'class': `line ${lines[i]}`,
                'width': '60',
                'height': '4',
                'x': '20',
                'y': `${23 + 25 * i}`,
                'rx': '2',
                'fill': 'var(--clr-primary)'
            });

        menuIcon.appendChild(rect);
    }

    header.append(homeIconContainer, menuIcon);

    homeIconContainer.addEventListener('click', () => {
        window.location.href = 'index.html';
    })

    return menuIcon;
}

function createMenu(menuIcon) {
    const menu = document.querySelector('#menu');

    const menuList = createHTMLElement('ul', {'id': 'menu-list'});

    function LinkObject(name, href) {
        this.name = name;
        this.href = href;
    }

    const linkList = [
        new LinkObject('Home', 'index.html'),
        new LinkObject('Future Plans', 'plans.html')
    ];

    for (const link of linkList) {
        const li = document.createElement('li');
        const p = createHTMLElement('a', {'class': 'link', 'href': link.href});
        p.innerText = link.name;

        li.appendChild(p);
        menuList.appendChild(li);
    }

    const li = document.createElement('li');
    li.appendChild(createLanguageSelector());

    menuList.appendChild(li);
    menu.appendChild(menuList);

    const menuHeight = menuList.clientHeight;

    const mediaQuery = window.matchMedia('(min-width: 50em)');

    setMedia(mediaQuery, menu);

    menuIcon.addEventListener('click', () => {
        if (menuIcon.getAttribute('class') !== 'close') {
            menuIcon.setAttribute('class', 'close');
            menu.style.setProperty('height', `${menuHeight}px`);
        }
        else {
            menuIcon.setAttribute('class', '');
            menu.style.setProperty('height', '0px');
        }
    })

    mediaQuery.addEventListener('change', (mediaQuery) => {
        setMedia(mediaQuery, menu);

        if (menuIcon.getAttribute('class') === 'close') {
            menuIcon.setAttribute('class', '');
        }
    });
}