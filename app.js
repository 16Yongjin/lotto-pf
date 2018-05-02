const _ = require('partial-js')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const getRandom = () => _.go(_.range(1, 46), _.shuffle, _.take(6), _.sortBy(_.idtt))

const keyboard = { type: 'buttons', buttons : ['랜덤'] }

const getMessage = (content) => {
  switch (content) {
    case '랜덤':
      return { 
        message: { text: getRandom().join(', ') },
        keyboard
      }
  }
}

const PORT = 7777

const app = express()

app.use(cors())

app.use(bodyParser.json())

app.get('/keyboard', (req, res) => res.send(keyboard))

app.post('/message', ({ body: { content } }, res) => res.send(getMessage(content)))

app.listen(PORT, () => console.log(`Server on port ${PORT}`))
