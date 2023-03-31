(function () {
    const select = document.querySelector('#select');
    const popupCancel = document.querySelector('#popup-cancel');
    const overlay = document.querySelector('#overlay');

    const button = document.querySelector('#get-started');

    button.addEventListener('click', () => {handlePopup(select)});

    popupCancel.addEventListener('click', () => {handleCancel(select)});

    overlay.addEventListener('click', () => {handleCancel(select)});

    function handlePopup(select) {
        select.style.setProperty('display', 'flex');
        document.body.style.setProperty('overflow', 'none');
    }

    function handleCancel(select) {
        select.style.setProperty('display', 'none');
        document.body.style.setProperty('overflow', 'auto');
    }
})();