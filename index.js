
var Speaker = require('audio-speaker/direct')

module.exports = speaker

function speaker (options, onEnd) {
  if (typeof options === 'function') {
    onEnd = options
    options = {}
  }
  
  var speaker = Speaker(options)

  var ended
  function end (err) {
    if (ended) return
    ended = true
    speaker.end(err)
    if (onEnd) onEnd(err === true ? null : err)
  }

  // Return sink stream
  return function (read) {
    read(null, function next (err, buf) {
      if (err) return end(err)
      speaker(buf, err => {
        if (err) return end(err)   
        read(null, next)
      })
    })
  }
}

