function createCategories(categories) {
    return `
    <h3>📚&nbsp;Category</h3>
    <div class="categories">
        ${categories.map(category => "<div class=\"category\">" + category + "</div>").reduce(merge)} 
    </div>
    `;
}

function createAuthors(authors) {
    return `
    <h3>🤷&nbsp;Author</h3>
    <div class="authors">
        ${authors.map(author => "<div class=\"author\">" + author + "</div>").reduce(merge)} 
    </div>
    `;
}

function createPeriod(periods) {
    return `
    <h3>⏲&nbsp;Period</h3>
    <div class="period">
        ${periods.map(period => "<div class=\"" + period.className + "\">" + period.value + "</div>").reduce(merge)}
    </div>`;
}

const menu = `
    <ul>
        <li>${createCategories(categories)}</li>
        <li>${createAuthors(authors)}</li>
        <li>${createPeriod(period)}</li>
    </ul>
`;