const express = require('express')
const path = require('path')
const app = express()
const port = 3003

const pathpub = path.join(__dirname,'public')
const pathpub1 = path.join(__dirname,'view')

console.log(pathpub)

app.set('view engine','ejs')

app.get('/', (req, res) => {
  res.sendFile(`${pathpub}/index.html`)
})

app.get('/about', (req, res) => {
  res.sendFile(`${pathpub}/about.html`)
})
app.get('/contact', (req, res) => {
  res.sendFile(`${pathpub}/contact.html`)
})

app.get('/profile', (req, res) => {
  const user = {
    name: 'Harshad Gohil',
    email: 'h1@gmail.com',
    city : 'surat',
    skils:['Java','react','node','mysql']
  }
  res.render(`${pathpub1}/profile`,{user})
})



app.get('/login', (req, res) => {
  
  res.render(`${pathpub1}/login`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})