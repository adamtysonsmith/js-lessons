const util = require('util')

const log = stuff => {
  console.log(util.inspect(stuff, { depth: Infinity }))
}

// Imagine you have 3 tables in a database
// Authors, Posts, and Comments
// We use ids to define relationships between records

const authors = [
  { id: 1, name: 'Linda' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Tina' },
  { id: 4, name: 'Gene' },
  { id: 5, name: 'Louise' }
]

const posts = [
  {
    id: 1,
    author_id: 1,
    content: 'Happy new yeaaaaaaaaaa',
    created: '2020-01-01'
  },
  {
    id: 2,
    author_id: 3,
    content: 'Wow the beach is littered with tourists, and litter',
    created: '2020-04-01'
  },
  {
    id: 3,
    author_id: 4,
    content:
      'I think I have the best legs in the family, and the smoothest bottom.',
    created: '2020-02-27'
  },
  {
    id: 4,
    author_id: 5,
    content: "Our gang is called the Broken Glass Kids. We'll cut you.",
    created: '2019-03-05'
  },
  {
    id: 5,
    author_id: 2,
    content:
      "You're my family and I love you, but you're terrible. You're all terrible.",
    created: '2020-03-11'
  }
]

const comments = [
  {
    id: 1,
    post_id: 1,
    author_id: 2,
    content: 'Happy new year, Linda',
    created: '2020-01-01'
  },
  {
    id: 2,
    post_id: 3,
    author_id: 2,
    content: 'Stop it, Gene',
    created: '2020-02-28'
  },
  {
    id: 3,
    post_id: 4,
    author_id: 4,
    content: 'Wowww',
    created: '2019-03-06'
  },
  {
    id: 4,
    post_id: 5,
    author_id: 4,
    content: 'Lets sell some burgers!',
    created: '2020-03-12'
  },
  {
    id: 5,
    post_id: 5,
    author_id: 1,
    content: 'Bob..',
    created: '2020-03-11'
  },
  {
    id: 6,
    post_id: 2,
    author_id: 4,
    content: 'Yeah give your couch another try',
    created: '2020-04-02'
  },
  {
    id: 7,
    post_id: 2,
    author_id: 5,
    content: 'Who just lays on a blanket all day',
    created: '2020-04-01'
  }
]
