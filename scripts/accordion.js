function createAccordion() {
    const info = document.querySelector('#info');

    info.innerHTML = '<p class="section-title">Explore your <span class="semi-bold">views</span><br>with <span class="semi-bold">Politivector</span>.</p>';

    const accordion = createHTMLElement('div', {'class': 'dropdown'});

    function AccordionItem(title, text) {
        this.title = title;
        this.text = text;
    }

    const accordionItemList = [
        new AccordionItem(
            'What is Politivector?',
            '<p>Politivector is a test composed of general questions tailored to provide a relativistic summary of one’s political leanings. <br><br>The main intention behind Politivector is to create a more international alternative to preexisting political tests without country-specific language and concepts. We acknowledge that the political spectra for each country varies, and our goal is to visualize political tendencies in the most generic yet informative format possible.</p>'
        ),
        new AccordionItem(
            'How does it work?',
            '<p>Politivector is a test with 120 multiple choice questions. In each question, you will be given a prompt or a statement related to politics, and will be asked your opinion on the matter ranging from Strongly Agree to Strongly Disagree. <br><br>Each answer will then affect your final score in their respective dimensions. Once the test is complete, you will be provided a visual summary of your political tendencies determined through your answers.</p>'
        ),
        new AccordionItem(
            'Why is there no "Closest Match"?',
            '<p>Politivector aims to present globally applicable results to every individual who takes this test, regardless of cultural and national background. It is our observation that the nomenclature used to categorize political alignment is location-dependent. In other words, the origin point of the political compass shifts for each country. <br><br>Henceforth, we have made the decision to exclude a "Closest Match" or ideological classification feature.</p>'
        )
    ];

    for (const itemObject of accordionItemList) {
        const item = createHTMLElement('div', {'class': 'accordion-item'});

        const titleDiv = createHTMLElement('div', {'class': 'accordion-title'});

        const pTitle = document.createElement('p');
        pTitle.innerHTML = itemObject.title;

        const arrow = createHTMLElement('div', {'class': 'arrow'});

        titleDiv.append(pTitle, arrow);

        const textDiv = createHTMLElement('div', {'class': 'accordion-text'});

        const pText = document.createElement('p');
        pText.innerHTML = itemObject.text;
        textDiv.appendChild(pText);

        item.append(titleDiv, textDiv);

        accordion.appendChild(item);

        titleDiv.addEventListener('click', () => {
            handleDrop(item, accordion.children);
        });
    }

    info.appendChild(accordion);

    handleDrop(accordion.children[0], accordion.children);

    function handleDrop(item, items) {
        const arrow = item.children[0].children[1];
        const text = item.children[1];
        const textHeight = text.children[0].clientHeight;

        for (const sibling of items) {
            if (sibling === item) {
                continue;
            }

            const siblingArrow = sibling.children[0].children[1];
            const siblingText = sibling.children[1];

            if (siblingArrow.getAttribute('class') === 'arrow down') {
                siblingArrow.setAttribute('class', 'arrow right');
                siblingText.style.setProperty('height', '0');
            }
        }

        if (arrow.getAttribute('class') !== 'arrow down') {
            arrow.setAttribute('class', 'arrow down');
            text.style.setProperty('height', `${textHeight}px`);
        }
    }
}