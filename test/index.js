
var test = require('tape')
var { pull } = require('pull-stream')
var generator = require('pull-audio-generator')
var speaker = require('../')

test('plays 5 second static', t => {
  t.plan(1)

  pull(
    generator(time => Math.sin(Math.PI * 2 * time * 500), { duration: 5 }),
    speaker(err => {
      t.false(err, 'finished without error')
    })
  )
})

