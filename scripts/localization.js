async function changeLanguage() {
    const locale = Util.getLocale();
    const textData = await Util.getLocaleJSON(locale);

    const elements = document.querySelectorAll('[data-locale]');
    elements.forEach(element => {
        const data = textData[element.getAttribute('data-locale')];

        if (isHTML(data)) {
            element.innerHTML = data;
        }
        else {
            element.innerText = data;
        }
    });

    const feedbackSubmit = document.querySelector('input[name=submit-feedback]');
    feedbackSubmit.value = textData['footer-submit-button'];

    function isHTML(data) {
        const re = /<.*>(<\/.*>)*/;
        return re.test(data);
    }
}