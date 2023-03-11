function createLanguageSelector() {
    const languageList = ['en','tr'];
    let activeLanguage = window.localStorage.getItem('lang');

    if (activeLanguage == null) {
        activeLanguage = languageList[0];
        window.localStorage.setItem('lang', activeLanguage);
    }

    const languageSelector = createHTMLElement('div', {'id': 'language-selector'});

    const selected = createSelectedLanguage();
    const dropdown = createLanguageDropdown();

    languageSelector.append(selected, dropdown);

    window.addEventListener('click', function (event) {
        if (!languageSelector.contains(event.target) && dropdown.className === 'expanded') {
            selected.click();
        }
    });

    return languageSelector;

    function createSelectedLanguage() {
        const selectedLanguage = createHTMLElement('div',
            {
                'class': 'language selected',
                'id': `${languageList[0]}-selected`
            });

        for (const elem of createLangElement(activeLanguage, true)) {
            selectedLanguage.appendChild(elem);
        }

        selectedLanguage.addEventListener('click', handleExpand);

        return selectedLanguage;
    }

    function createLanguageDropdown() {
        const dropdown = createHTMLElement('div',
            {
                'class': 'collapsed',
                'id': 'language-dropdown'
            });

        for (let language of languageList) {
            const option = createHTMLElement('div',
                {
                    'class': `language ${language === activeLanguage ? 'hidden' : ''}`,
                    'id': language
                });

            for (const elem of createLangElement(language, false)) {
                option.appendChild(elem);
            }

            option.children[0].addEventListener('click', (event) => {
                selected.click();
                setTimeout(() => {handleSelect(event);}, 200);
            })

            dropdown.appendChild(option)
        }

        return dropdown;
    }

    function handleExpand() {
        if (dropdown.className === 'collapsed') {
            dropdown.setAttribute('class', 'expanded');
            dropdown.style.maxHeight = `${24 * languageList.length}px`;
            selected.children[1].setAttribute('class', 'arrow down');
        }
        else {
            dropdown.setAttribute('class', 'collapsed');
            dropdown.style.maxHeight = '0';
            selected.children[1].setAttribute('class', 'arrow right');
        }
    }

    function handleSelect(event) {
        const unselectedLanguage = document.querySelector(`#${activeLanguage}`);

        unselectedLanguage.setAttribute('class', 'language');
        event.target.parentElement.setAttribute('class', 'language hidden');

        selected.children[0].setAttribute('src', `/assets/navigation/flags/${event.target.parentElement.id}.png`);

        activeLanguage = event.target.parentElement.id;
        selected.setAttribute('id', `${activeLanguage}-selected`);

        window.localStorage.setItem('lang', activeLanguage);

        changeLanguage();
    }
}

function createLangElement(lang, isSelected) {
    const flag = createHTMLElement('img',
        {
            'src': `/assets/navigation/flags/${lang}.png`,
            'class': `flag ${isSelected ? '' : 'option'}`,
            'alt': ''
        });

    const arrow = createHTMLElement('div',
        {
            'class': `arrow ${isSelected ? '' : 'invisible'}`
        });

    return [flag, arrow];
}