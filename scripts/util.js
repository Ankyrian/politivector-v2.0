class Util {
    static getLocale() {
        let locale = window.localStorage.getItem('lang');

        if (locale == null) {
            locale = this.locales[0];
            window.localStorage.setItem('lang', locale);
        }

        return locale;
    }

    static async getLocaleJSON(locale) {
        const localeJSON = `/locales/${locale}.json`;
        return await fetch(localeJSON)
            .then(response => response.json())
            .then(responseJSON => {return responseJSON});
    }

    static setLocales(locales) {
        this.locales = locales;
    }

    static setMedia(menu, mediaQuery) {
        if (mediaQuery.matches) {
            menu.style.setProperty('height', 'auto');
        } else {
            menu.style.setProperty('height', '0px');
        }
    }

    static setAssetDirectory(dir) {
        this.assetDirectory = dir;
    }

    static getAssetDirectory() {
        return this.assetDirectory;
    }

    static createObjectHTML(type, attributes) {
        let element;

        if (['svg', 'rect'].includes(type)) {
            element = document.createElementNS('http://www.w3.org/2000/svg', type);
        } else {
            element = document.createElement(type);
        }

        if (type === 'object') {
            attributes.type = 'image/svg+xml';
        }

        if (attributes != null) {
            Object.keys(attributes).forEach(attr => {
                element.setAttribute(attr, attributes[attr]);
            });
        }

        return element;
    }

    static createIllustration(id, isResponsive) {
        const illustration = Util.createObjectHTML('div', {'id': id})

        const layouts = isResponsive ? ['mobile', 'desktop'] : ['desktop'];

        for (const layout of layouts) {
            const object = Util.createObjectHTML('object',
                {
                    'data': `${Util.getAssetDirectory()}/illustrations/${layout}/${id}.svg`,
                    'class': layout
                });
            illustration.appendChild(object);
        }

        return illustration;
    }
}