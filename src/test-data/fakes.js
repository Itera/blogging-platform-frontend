const categories = [
    'Technology',
    'Science',
    'Arts',
    'Music',
    'Cinema',
    'Economy'
];

const authors = [
    'Ross Geller',
    'Monica Geller Bing',
    'Phoebe Buffet',
    'Chandler Bing',
    'Rachel Green',
    'Joey Tribiani'
];

const comments = [
    {id: 1, date: "2018-03-16 07:14", author: "Pavol Test", content: "I like this very much!"},
    {id: 2, date: "2018-03-17 08:16", author: "Pavol Rest", content: "I like this super much!"},
    {id: 3, date: "2018-03-18 09:18", author: "Pavol Fest", content: "I like this totally!"},
    {id: 4, date: "2018-03-19 10:20", author: "Pavol Zest", content: "I like this in a sense."},
];

const fakePosts = [
    {
        id: 1,
        title: 'First post',
        author: authors[0],
        date: '2018-03-12 13:32',
        comments: comments,
        perex: 'Maecenas scelerisque eu sem vel pretium. Vestibulum sed vehicula urna. Donec laoreet efficitur placerat. Pellentesque eu interdum eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam erat volutpat. Phasellus vestibulum convallis nunc in lacinia. Donec mollis non felis sed luctus. Phasellus vulputate elementum purus, placerat porta risus viverra sit amet. Integer non dapibus dui.',
        content: 'Quisque sit amet dui ac magna tincidunt ultricies. Aliquam posuere finibus elit, eu accumsan tortor suscipit nec. Nullam vel placerat orci, in aliquet libero. Integer eu est at ex vestibulum finibus. Vivamus pulvinar varius nibh, non tempus odio tempus at. Curabitur pharetra pulvinar commodo. Cras eleifend suscipit magna sit amet faucibus. Etiam vitae lobortis magna.'
    },
    {
        id: 2,
        title: 'Second post',
        author: authors[1],
        date: '2018-02-13 17:48',
        comments: [],
        perex: 'Vestibulum efficitur, justo quis sollicitudin vestibulum, libero turpis pharetra odio, ut euismod risus felis nec nisl. Vestibulum eget blandit lorem. Curabitur vel turpis eget sapien interdum sagittis. Cras sed ante ac mi mattis fermentum. Integer auctor condimentum efficitur. Nam lacus nisl, vulputate et sapien quis, bibendum condimentum felis. Nunc mollis nec lorem pulvinar blandit. Quisque eget erat nec ligula convallis mollis at sed leo. Fusce at sollicitudin tellus, sed vestibulum massa. ',
        content: 'Quisque sit amet dui ac magna tincidunt ultricies. Aliquam posuere finibus elit, eu accumsan tortor suscipit nec. Nullam vel placerat orci, in aliquet libero. Integer eu est at ex vestibulum finibus. Vivamus pulvinar varius nibh, non tempus odio tempus at. Curabitur pharetra pulvinar commodo. Cras eleifend suscipit magna sit amet faucibus. Etiam vitae lobortis magna.'
    },
    {
        id: 3,
        title: 'Turd post',
        author: authors[2],
        date: '2018-01-15 07:12',
        comments: [comments[0]],
        perex: 'Cras tempus elit dictum turpis varius, sit amet molestie felis aliquet. Aliquam ut augue vitae risus venenatis consectetur eget non felis. Proin dapibus enim sed metus vulputate consequat. Duis quis dolor diam. Quisque sed nulla eu massa sollicitudin posuere.',
        content: 'Quisque sit amet dui ac magna tincidunt ultricies. Aliquam posuere finibus elit, eu accumsan tortor suscipit nec. Nullam vel placerat orci, in aliquet libero. Integer eu est at ex vestibulum finibus. Vivamus pulvinar varius nibh, non tempus odio tempus at. Curabitur pharetra pulvinar commodo. Cras eleifend suscipit magna sit amet faucibus. Etiam vitae lobortis magna.'
    },
    {
        id: 4,
        title: 'Christmas',
        author: authors[3],
        date: '2017-12-24 07:12',
        comments: [comments[1]],
        perex: 'Cras tempus ut euismod risus felis nec nisl. Vestibulum eget blandit lorem. Curabitur vel turpis eget sapien interdum sagittis. Cras sed ante ac mi mattis fermentum. Integer auctor condimentum efficitur. Nam lacus nisl, vulputate et sapien quis, bibendum condimentum felis. Nunc mollis nec lorem pulvinar blandit. Quisque eget erat nec ligula convallis mollis at sed leo. . Aliquam ut augue vitae risus venenatis consectetur eget non felis. Proin dapibus enim sed metus vulputate consequat. Duis quis dolor diam. Quisque sed nulla eu massa sollicitudin posuere.',
        content: 'Quisque sit amet dui ac magna tincidunt ultricies. Aliquam posuere finibus elit, eu accumsan tortor suscipit nec. Nullam vel placerat orci, in aliquet libero. Integer eu est at ex vestibulum finibus. Vivamus pulvinar varius nibh, non tempus odio tempus at. Curabitur pharetra pulvinar commodo. Cras eleifend suscipit magna sit amet faucibus. Etiam vitae lobortis magna.'
    }
];

const period = [
    {className: 'period-year', value: '2018'},
    {className: 'period-month', value: 'March'},
    {className: 'period-month', value: 'February'},
    {className: 'period-month', value: 'January'},
    {className: 'period-year', value: '2017'},
];

module.exports = {
    fakePosts,
    period,
    categories,
    authors,
    comments
};