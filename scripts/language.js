class LanguageSelector {
    constructor(locale, locales) {
        this.locale = locale;
        this.locales = locales;
    }

    createLanguageElement(lang, isSelected) {
        const flag = Util.createObjectHTML('img',
            {
                'src': `/assets/navigation/flags/${lang}.png`,
                'class': `flag ${isSelected ? '' : 'option'}`,
                'alt': ''
            });

        const arrow = Util.createObjectHTML('div',
            {
                'class': `arrow ${isSelected ? '' : 'invisible'}`
            });

        return [flag, arrow];
    }

    createLanguageSelector() {
        this.self = Util.createObjectHTML('div', {'id': 'language-selector'});

        this.selected = this.createSelectedLanguage();
        this.dropdown = this.createLanguageDropdown();

        this.self.append(this.selected, this.dropdown);

        return this.self;
    }

    createSelectedLanguage() {
        const selectedLanguage = Util.createObjectHTML('div',
            {
                'class': 'language selected',
                'id': `${this.locales[0]}-selected`
            });

        for (const elem of this.createLanguageElement(this.locale, true)) {
            selectedLanguage.appendChild(elem);
        }

        selectedLanguage.addEventListener('click', () => this.handleExpand(this));

        return selectedLanguage;
    }

    createLanguageDropdown() {
        const dropdown = Util.createObjectHTML('div',
            {
                'class': 'collapsed',
                'id': 'language-dropdown'
            });

        for (let language of this.locales) {
            const option = Util.createObjectHTML('div',
                {
                    'class': `language ${language === this.locale ? 'hidden' : ''}`,
                    'id': language
                });

            for (const elem of this.createLanguageElement(language, false)) {
                option.appendChild(elem);
            }

            option.children[0].addEventListener('click', (event) => {
                this.selected.click();
                setTimeout(() => this.handleSelect(event), 200);
            })

            dropdown.appendChild(option)
        }

        return dropdown;
    }

    handleExpand(languageSelector) {
        if (languageSelector.dropdown.className === 'collapsed') {
            languageSelector.dropdown.setAttribute('class', 'expanded');
            languageSelector.dropdown.style.maxHeight = `${24 * languageSelector.locales.length}px`;
            languageSelector.selected.children[1].setAttribute('class', 'arrow down');
        }
        else {
            languageSelector.dropdown.setAttribute('class', 'collapsed');
            languageSelector.dropdown.style.maxHeight = '0';
            languageSelector.selected.children[1].setAttribute('class', 'arrow right');
        }
    }

    handleSelect(event) {
        const unselectedLanguage = document.querySelector(`#${this.locale}`);

        unselectedLanguage.setAttribute('class', 'language');
        event.target.parentElement.setAttribute('class', 'language hidden');

        this.selected.children[0].setAttribute('src', `/assets/navigation/flags/${event.target.parentElement.id}.png`);

        this.locale = event.target.parentElement.id;
        this.selected.setAttribute('id', `${this.locale}-selected`);

        window.localStorage.setItem('lang', this.locale);
    }

    handleClickOut(event, menu) {
        const languageSelector = menu.getLanguageSelector();
        if (!languageSelector.self.contains(event.target) && languageSelector.dropdown.className === 'expanded') {
            languageSelector.selected.click();
        }
    }
}