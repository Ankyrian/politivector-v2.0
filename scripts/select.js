function createSelect(data) {
    const select = Util.createObjectHTML('div', {'id': 'select'})

    const popup = Util.createObjectHTML('div', {'id': 'popup'});

    const cancel = Util.createObjectHTML('svg',
        {
            'id': 'popup-cancel',
            'viewBox': '0 0 100 100'
        });

    cancel.appendChild(Util.createObjectHTML('rect',
        {
            'class': 'line',
            'width': '60',
            'height': '4',
            'x': '20',
            'y': '48',
            'rx': '2',
            'fill': 'var(--clr-primary)'
        }));

    const title = Util.createObjectHTML('p', {'class': 'semi-bold', 'data-locale': 'test-select-title'});
    title.innerText = data[title.getAttribute('data-locale')];

    const completeButton = Util.createObjectHTML('button', {'class': 'button primary', 'data-locale': 'test-select-complete-button'});
    completeButton.innerText = data[completeButton.getAttribute('data-locale')];
    const completeInfo = Util.createObjectHTML('p', {'class': 'question-count', 'data-locale': 'test-select-complete-info'});
    completeInfo.innerText = data[completeInfo.getAttribute('data-locale')];

    completeButton.addEventListener('click', () => {window.location.href = 'questions.html';});

    const divider = Util.createObjectHTML('p', {'data-locale': 'test-select-divider'});
    divider.innerText = data[divider.getAttribute('data-locale')];

    const basicButton = Util.createObjectHTML('button', {'class': 'button secondary', 'data-locale': 'test-select-basic-button'});
    basicButton.innerText = data[basicButton.getAttribute('data-locale')];
    const basicInfo = Util.createObjectHTML('p', {'class': 'question-count', 'data-locale': 'test-select-basic-info'});
    basicInfo.innerText = data[basicInfo.getAttribute('data-locale')];

    basicButton.addEventListener('click', () => {window.location.href = 'questions.html';});

    popup.append(cancel, title, completeButton, completeInfo, divider, basicButton, basicInfo);

    const overlay = Util.createObjectHTML('div', {'id': 'overlay'});

    select.append(popup, overlay);

    cancel.addEventListener('click', () => {
        handleCancel(select);
    });

    overlay.addEventListener('click', () => {
        handleCancel(select);
    });

    return select;

    function handleCancel(select) {
        select.style.setProperty('display', 'none');
        document.body.style.setProperty('overflow', 'auto');
    }
}