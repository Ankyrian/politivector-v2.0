class Menu {
    constructor(locale, locales, data) {
        this.locale = locale;
        this.locales = locales;
        this.data = data;

        this.header = this.createHeader();
        this.menu = this.createMenu()
    }

    createHeader() {
        const header = Util.createObjectHTML('header', {'id': 'nav'});

        const homeIcon = createHomeIcon();
        this.menuIcon = createMenuIcon();

        header.append(homeIcon, this.menuIcon);

        return header;

        function createHomeIcon() {
            const container = Util.createObjectHTML('div', {'id': 'home-icon-container'});
            const icon = Util.createObjectHTML('object', {'id': 'home-icon', 'data': '/assets/navigation/home.svg'});

            container.appendChild(icon);

            container.addEventListener('click', () => {
                window.location.href = 'index.html';
            });

            return container;
        }

        function createMenuIcon() {
            const icon = Util.createObjectHTML('svg', {'id': 'menu-icon', 'viewBox': '0 0 100 100'});

            const lineClasses = ['top', 'middle', 'bottom'];

            for (let i = 0; i < 3; i++) {
                const rect = Util.createObjectHTML('rect',
                    {
                        'class': `line ${lineClasses[i]}`,
                        'width': '60',
                        'height': '4',
                        'x': '20',
                        'y': `${23 + 25 * i}`,
                        'rx': '2',
                        'fill': 'var(--clr-primary)'
                    });

                icon.appendChild(rect);
            }

            return icon;
        }
    }

    createMenu() {
        const menu = Util.createObjectHTML('div', {'id': 'menu'});
        this.list = Util.createObjectHTML('ul', {'id': 'menu-list'});

        function Link(name, href) {
            this.name = name;
            this.href = href;
            this.locale = `${name.toLowerCase().split(' ').join('-')}`;
        }

        const links = [
            new Link('Home', 'index.html'),
            new Link('Future Plans', 'plans.html')
        ];

        for (const link of links) {
            const li = Util.createObjectHTML('li');
            const a = Util.createObjectHTML('a', {'class': 'link', 'href': link.href, 'data-locale': `menu-${link.locale}`});
            a.innerText = this.data[a.getAttribute('data-locale')];

            li.appendChild(a);
            this.list.appendChild(li);
        }

        const li = Util.createObjectHTML('li');
        this.languageSelector = new LanguageSelector(this.locale, this.locales);
        li.appendChild(this.languageSelector.createLanguageSelector());

        this.list.appendChild(li);
        menu.appendChild(this.list);

        const mediaQuery = window.matchMedia('(min-width: 50em)');

        Util.setMedia(menu, mediaQuery);

        mediaQuery.addEventListener('change', (mediaQuery) => {
            Util.setMedia(menu, mediaQuery);

            if (this.menuIcon.getAttribute('class') === 'close') {
                this.menuIcon.setAttribute('class', '');
            }
        });

        return menu;
    }

    getHeader() {return this.header}

    getMenu() {return this.menu}

    getLanguageSelector() {return this.languageSelector}

    handleClick(menu) {
        if (menu.menuIcon.getAttribute('class') !== 'close') {
            menu.menuIcon.setAttribute('class', 'close');
            menu.menu.style.setProperty('height', `${menu.list.clientHeight}px`);
        }
        else {
            menu.menuIcon.setAttribute('class', '');
            menu.menu.style.setProperty('height', '0px');
        }
    }
}