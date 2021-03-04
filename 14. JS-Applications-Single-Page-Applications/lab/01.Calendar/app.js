const monthNames = {
    'Jan': 1,
    'Feb': 2,
    'Mar': 3,
    'Apr': 4,
    'May': 5,
    'Jun': 6,
    'Jul': 7,
    'Aug': 8,
    'Sep': 9,
    'Oct': 10,
    'Nov': 11,
    'Dec': 12
}

const yearSelect = document.getElementById('years');

const years = [...document.querySelectorAll('.monthCalendar')].reduce((acc, c) => {
    acc[c.id] = c;
    return acc;
}, {});

const months = [...document.querySelectorAll('.daysCalendar')].reduce((acc, c) => {
    acc[c.id] = c;
    return acc;
}, {});

displaySection(yearSelect);

yearSelect.addEventListener('click', (event) => {
    if (event.target.classList.contains('date') || event.target.classList.contains('day')) {
        event.stopImmediatePropagation();
        const yearID = `year-${event.target.textContent.trim()}`;
        displaySection(years[yearID])
    }
});


document.body.addEventListener('click', (event) => {
    if (event.target.tagName === 'CAPTION') {
        const sectionID = event.target.parentNode.parentNode.id;
        if (sectionID.includes('year-')) {
            displaySection(yearSelect);
        } else if (sectionID.includes('month-')) {
            const yearID = `year-${sectionID.split('-')[1]}`
            displaySection(years[yearID]);
        }
    } else if (event.target.tagName === 'TD' || event.target.tagName === 'DIV') {
        const monthName = event.target.textContent.trim();
        if (monthNames.hasOwnProperty(monthName)) {
            let parent = event.target.parentNode;
            while (parent.tagName !== 'TABLE') {
                parent = parent.parentNode
            }
            const year = parent.querySelector('caption').textContent.trim();
            const monthID = `month-${year}-${monthNames[monthName]}`;
            displaySection(months[monthID]);
        }

    }
});

function displaySection(section) {
    document.body.innerHTML = '';
    document.body.appendChild(section);
}