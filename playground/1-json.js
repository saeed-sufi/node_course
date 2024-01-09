import fs from 'fs'

const book = {
  title: 'A short history of nearly everything',
  author: 'Bill Bryson'
}

const bookJSON = JSON.stringify(book)
fs.writeFileSync('1-json.json', bookJSON)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.title)