const friends = [
    {
      'repeat(20)': {
        _id: '{{objectId()}}',
        photo: '',
        name: {
          first: '{{firstName()}}',
          last: '{{surname()}}'
        },
        scores: []
      }
    }
]

module.exports = friends;
