(function () {
    const accordionItems = document.querySelectorAll('.accordion-item');
    let textHeight = 0;
    accordionItems.forEach(item => {
        const title = item.children[0];
        const text = item.children[1].children[0];

        textHeight = textHeight < text.clientHeight ? text.clientHeight : textHeight;

        title.addEventListener('click', () => {handleDrop(item)});
    });

    accordionItems[0].children[0].click();

    function handleDrop(clicked) {
        for (const item of clicked.parentElement.children) {
            const isClicked = clicked === item;
            const arrow = item.children[0].children[1];
            const text = item.children[1];

            arrow.setAttribute('class', `arrow ${isClicked ? 'down' : 'right'}`);
            text.style.setProperty('height', `${isClicked ? textHeight : 0}px`);
        }
    }
})();