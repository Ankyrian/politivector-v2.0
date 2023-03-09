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

    const title = createHTMLElement('p', {'class': 'semi-bold'});
    title.innerText = 'Pick your test';

    const completeButton = createHTMLElement('button', {'class': 'button primary'});
    completeButton.innerText = 'Complete Test';
    const completeInfo = createHTMLElement('p', {'class': 'question-count'});
    completeInfo.innerText = '(120 questions)';

    completeButton.addEventListener('click', () => {window.location.href = 'questions.html';});

    const divider = document.createElement('p');
    divider.innerText = 'or';

    const basicButton = createHTMLElement('button', {'class': 'button secondary'});
    basicButton.innerText = 'Basic Test'
    const basicInfo = createHTMLElement('p', {'class': 'question-count'});
    basicInfo.innerText = '(60 questions)';

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