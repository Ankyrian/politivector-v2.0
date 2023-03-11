function changeLanguage() {
    const lang = window.localStorage.getItem('lang');

    const localeJSON = `/locales/${lang}.json`;

    fetch(localeJSON)
        .then(response => response.json())
        .then(data => {
            const elements = document.querySelectorAll('[data-locale]');
            elements.forEach(elem => {
                elem.innerHTML = String(data[elem.getAttribute('data-locale')]);
            });
        });
}