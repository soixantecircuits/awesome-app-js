'use strict'

const fs = require('fs')
const lineReader = require('readline')

var file = 'README.md'

var reader = lineReader.createInterface({
  input: fs.createReadStream(file)
})

var libCount = 0
reader.on('line', function (line) {
  if (line.slice(0, 9) === '<a href="') {
    libCount++
  }
})

reader.on('close', function () {
  console.log(libCount + ' libs found!')

  fs.readFile(file, 'utf-8', function (err, data) {
    if (err) throw err

    var newValue = data.replace(/([*]{2})+([0-9]{1,3})+([*]{2})/g, '**' + libCount + '**')

    fs.writeFile(file, newValue, 'utf-8', function (err) {
      if (err) throw err
      console.log(file + ' has been updated')
    })
  })
})
