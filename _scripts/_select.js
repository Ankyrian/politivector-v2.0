(function () {
    const select = document.querySelector('#select');
    const popupCancel = document.querySelector('#popup-cancel');
    const overlay = document.querySelector('#overlay');

    const button = document.querySelector('#get-started');

    button.addEventListener('click', () => {handlePopup(select)});

    popupCancel.addEventListener('click', () => {handleCancel(select)});

    overlay.addEventListener('click', () => {handleCancel(select)});

    const startCompleteButton = document.querySelector('#start-complete-button');
    const startBasicButton = document.querySelector('#start-basic-button');

    startCompleteButton.addEventListener('click', () => {window.location.href = '/start?test=complete'});
    startBasicButton.addEventListener('click', () => {window.location.href = '/start?test=basic'});

    function handlePopup(select) {
        select.style.setProperty('display', 'flex');
        document.body.style.setProperty('overflow', 'hidden');
    }

    function handleCancel(select) {
        select.style.setProperty('display', 'none');
        document.body.style.setProperty('overflow', 'auto');
    }
})();