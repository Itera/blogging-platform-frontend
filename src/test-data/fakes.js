const categories = [
    {id: 1, name: 'Technology'},
    {id: 2, name: 'Science'},
    {id: 3, name: 'Arts'},
    {id: 4, name: 'Music'},
    {id: 5, name: 'Cinema'},
    {id: 6, name: 'Economy'}
];

const authors = [
    {
        id: 1,
        username: 'Ross',
        firstName: 'Ross',
        lastName: 'Geller',
        email: 'Ross@friends.com',
        password: 'Ross',
        phone: '12345678'
    },
    {
        id: 2,
        username: 'Monica',
        firstName: 'Monica',
        lastName: 'Geller Bing',
        email: 'Monica@friends.com',
        password: 'Monica',
        phone: '12345678'
    },
    {
        id: 3,
        username: 'Phoebe',
        firstName: 'Phoebe',
        lastName: 'Buffet',
        email: 'Phoebe@friends.com',
        password: 'Phoebe',
        phone: '12345678'
    },
    {
        id: 4,
        username: 'Chandler',
        firstName: 'Chandler',
        lastName: 'Bing',
        email: 'Chandler@friends.com',
        password: 'Chandler',
        phone: '12345678'
    },
    {
        id: 5,
        username: 'Rachel',
        firstName: 'Rachel',
        lastName: 'Green',
        email: 'Rachel@friends.com',
        password: 'Rachel',
        phone: '12345678'
    },
    {
        id: 6,
        username: 'Joey',
        firstName: 'Joey',
        lastName: 'Tribiani',
        email: 'Joey@friends.com',
        password: 'Joey',
        phone: '12345678'
    }
];

const comments = [
    {
        id: 1,
        date: "2018-03-16 07:14",
        author: "Pavol Test",
        content: "I like this very much! Aliquam posuere finibus elit, eu accumsan tortor suscipit nec.",
        postId: 1
    },
    {
        id: 2,
        date: "2018-03-17 08:16",
        author: "Pavol Rest",
        content: "I like this super much! Nullam vel placerat orci, in aliquet libero. ",
        postId: 1
    },
    {
        id: 3,
        date: "2018-03-18 09:18",
        author: "Pavol Fest",
        content: "I like this totally! Vestibulum eget blandit lorem.",
        postId: 3
    },
    {
        id: 4,
        date: "2018-03-19 10:20",
        author: "Pavol Zest",
        content: "I like this in a sense. Maecenas scelerisque eu sem vel pretium.",
        postId: 4
    },
];

const fakePosts = [
    {
        id: 1,
        title: 'First post',
        categories: [categories[0], categories[1]],
        author: authors[0],
        date: '2018-03-12 13:32',
        perex: 'Maecenas scelerisque eu sem vel pretium. Vestibulum sed vehicula urna. Donec laoreet efficitur placerat. Pellentesque eu interdum eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam erat volutpat. Phasellus vestibulum convallis nunc in lacinia. Donec mollis non felis sed luctus. Phasellus vulputate elementum purus, placerat porta risus viverra sit amet. Integer non dapibus dui.',
        content: 'Quisque sit amet dui ac magna tincidunt ultricies. Aliquam posuere finibus elit, eu accumsan tortor suscipit nec. Nullam vel placerat orci, in aliquet libero. Integer eu est at ex vestibulum finibus. Vivamus pulvinar varius nibh, non tempus odio tempus at. Curabitur pharetra pulvinar commodo. Cras eleifend suscipit magna sit amet faucibus. Etiam vitae lobortis magna.'
    },
    {
        id: 2,
        title: 'Second post',
        categories: [categories[1], categories[2]],
        author: authors[1],
        date: '2018-02-13 17:48',
        perex: 'Vestibulum efficitur, justo quis sollicitudin vestibulum, libero turpis pharetra odio, ut euismod risus felis nec nisl. Vestibulum eget blandit lorem. Curabitur vel turpis eget sapien interdum sagittis. Cras sed ante ac mi mattis fermentum. Integer auctor condimentum efficitur. Nam lacus nisl, vulputate et sapien quis, bibendum condimentum felis. Nunc mollis nec lorem pulvinar blandit. Quisque eget erat nec ligula convallis mollis at sed leo. Fusce at sollicitudin tellus, sed vestibulum massa. ',
        content: 'Quisque sit amet dui ac magna tincidunt ultricies. Aliquam posuere finibus elit, eu accumsan tortor suscipit nec. Nullam vel placerat orci, in aliquet libero. Integer eu est at ex vestibulum finibus. Vivamus pulvinar varius nibh, non tempus odio tempus at. Curabitur pharetra pulvinar commodo. Cras eleifend suscipit magna sit amet faucibus. Etiam vitae lobortis magna.'
    },
    {
        id: 3,
        title: 'Turd post',
        categories: [categories[3], categories[4], categories[5]],
        author: authors[2],
        date: '2018-01-15 07:12',
        perex: 'Cras tempus elit dictum turpis varius, sit amet molestie felis aliquet. Aliquam ut augue vitae risus venenatis consectetur eget non felis. Proin dapibus enim sed metus vulputate consequat. Duis quis dolor diam. Quisque sed nulla eu massa sollicitudin posuere.',
        content: 'Quisque sit amet dui ac magna tincidunt ultricies. Aliquam posuere finibus elit, eu accumsan tortor suscipit nec. Nullam vel placerat orci, in aliquet libero. Integer eu est at ex vestibulum finibus. Vivamus pulvinar varius nibh, non tempus odio tempus at. Curabitur pharetra pulvinar commodo. Cras eleifend suscipit magna sit amet faucibus. Etiam vitae lobortis magna.'
    },
    {
        id: 4,
        title: 'Christmas',
        categories: [categories[3]],
        author: authors[3],
        date: '2017-12-24 07:12',
        perex: 'Cras tempus ut euismod risus felis nec nisl. Vestibulum eget blandit lorem. Curabitur vel turpis eget sapien interdum sagittis. Cras sed ante ac mi mattis fermentum. Integer auctor condimentum efficitur. Nam lacus nisl, vulputate et sapien quis, bibendum condimentum felis. Nunc mollis nec lorem pulvinar blandit. Quisque eget erat nec ligula convallis mollis at sed leo. . Aliquam ut augue vitae risus venenatis consectetur eget non felis. Proin dapibus enim sed metus vulputate consequat. Duis quis dolor diam. Quisque sed nulla eu massa sollicitudin posuere.',
        content: 'Quisque sit amet dui ac magna tincidunt ultricies. Aliquam posuere finibus elit, eu accumsan tortor suscipit nec. Nullam vel placerat orci, in aliquet libero. Integer eu est at ex vestibulum finibus. Vivamus pulvinar varius nibh, non tempus odio tempus at. Curabitur pharetra pulvinar commodo. Cras eleifend suscipit magna sit amet faucibus. Etiam vitae lobortis magna.'
    }
];

module.exports = {
    fakePosts,
    categories,
    authors,
    comments
};