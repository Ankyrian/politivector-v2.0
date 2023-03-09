(function () {
    const menuIcon = createHeader();
    createMenu(menuIcon);
    createTitle();
    createContents();
    createFooter();
})();

function createTitle() {
    const banner = document.querySelector('#banner');

    const title = createHTMLElement('p', {'id': 'title'});
    title.innerHTML = 'Take a look at our<br><span class="semi-bold">Future Plans</span><br>for Politivector';

    const downArrow = createHTMLElement('object',
        {
            'data': '/assets/plans/arrow.svg',
            'class': 'downward-arrow'
        });

    banner.append(title, downArrow);
}

function createContents() {
    const content = document.querySelector('#content');

    function ContentItem(id, title, text) {
        this.id = id;
        this.title = title;
        this.text = text;
    }

    const contentList = [
        new ContentItem('questions',
            'Questions',
            'Currently, the questions in the test are of our mildly informed making. These questions were formulated using the most basic topics of discussion in politics and political philosophy. Our intention, after Politivector proves itself to be a valuable project, is to rework the questions to make the evaluation algorithm more accurate and informational.<br>The ultimate goal regarding the veracity of the questions available in Politivector is to prepare a set of educated questions with experts and professors willing to participate in this project.'),
        new ContentItem('data',
            'Data',
            'Right now, Politivector obtains absolutely no data from its users whatsoever. While data collection and analysis for a small-scale project such as Politivector is a distant goal, we wish to be able to compare test takers’ results —anonymous results, of course— and present a comprehensive image regarding the distribution of ideologies across the world.<br>One thought-through feature is to add a country, and maybe city, selector. This location information provided would allow us to display ideological maps of our anonymous test takers’ countries. The information portrayed by such distribution and concentration maps could be especially useful in demographic, social, and political studies.<br>Another possibility is to apply various data science methods to the data provided to us by our test takers. One specific method is “clustering”. Clustering would allow us to group together data points, seeing if they agree on a common center.<br>This analysis could present many new perspectives regarding the status of political philosophy in the modern world, such as how fragmented certain ideologies are, which political parties best satiate their peoples’ needs, and where a newcomer into politics could align themselves as a starting point.<br>Data collection and analysis is probably the most intricate of our long-term goals, which is why it is the enhancement we wish to implement last.'),
        new ContentItem('results',
            'Results',
            'Currently, we are using a simple percentage bar format to display test results. There are much more imaginative ways of visualizing information, some of which we may choose to add into Politivector.<br>A conventional format is the political compass, which is a 2D plane containing Authoritarian/Liberal and Economic Left/Right axes. This form of visualization cannot be applied to all 12 dimensions of Politivector (humans are not good at comprehending 12D), but affiliated dimensions could be “plotted” against one another.<br>We will further discuss what visuals could be used to display information output by Politivector, and include ones we see informational and attractive.'),
        new ContentItem('much-more',
            'Much more!',
            'We will establish channels of communication to receive feedback from our test takers, and improve Politivector in ways we could not imagine.')
    ];

    for (const contentObject of contentList) {
        const item = createHTMLElement('div', {'id': contentObject.id, 'class': 'content-item'});

        const title = createHTMLElement('p', {'class': 'semi-bold content-title'});
        title.innerText = contentObject.title;

        const text = createHTMLElement('p', {'class': 'content-text'});
        text.innerHTML = contentObject.text;

        item.append(title, text);
        content.appendChild(item);
    }
}