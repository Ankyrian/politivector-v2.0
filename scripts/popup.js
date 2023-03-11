function createPopup() {
    const select = document.querySelector('#select');

    const popup = createHTMLElement('div', {'id': 'popup'});

    const cancel = createHTMLElement('svg',
        {
            'id': 'popup-cancel',
            'viewBox': '0 0 100 100'
        });

    cancel.appendChild(createHTMLElement('rect',
        {
            'class': 'line',
            'width': '60',
            'height': '4',
            'x': '20',
            'y': '48',
            'rx': '2',
            'fill': 'var(--clr-primary)'
        }));

    const title = createHTMLElement('p', {'class': 'semi-bold', 'data-locale': 'test-select-title'});

    const completeButton = createHTMLElement('button', {'class': 'button primary', 'data-locale': 'test-select-complete-button'});
    const completeInfo = createHTMLElement('p', {'class': 'question-count', 'data-locale': 'test-select-complete-info'});

    completeButton.addEventListener('click', () => {window.location.href = 'questions.html';});

    const divider = createHTMLElement('p', {'data-locale': 'test-select-divider'});

    const basicButton = createHTMLElement('button', {'class': 'button secondary', 'data-locale': 'test-select-basic-button'});
    const basicInfo = createHTMLElement('p', {'class': 'question-count', 'data-locale': 'test-select-basic-info'});

    basicButton.addEventListener('click', () => {window.location.href = 'questions.html';});

    popup.append(cancel, title, completeButton, completeInfo, divider, basicButton, basicInfo);

    const overlay = createHTMLElement('div', {'id': 'overlay'});

    select.append(popup, overlay);

    cancel.addEventListener('click', () => {
        handleCancel(select);
    });

    overlay.addEventListener('click', () => {
        handleCancel(select);
    });
}

function handleCancel(select) {
    select.style.setProperty('display', 'none');
    document.body.style.setProperty('overflow', 'auto');
}