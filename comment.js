//Create web server
const express = require('express')
const app = express()
const port = 3000
//Create a connection to mongodb
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/express-demo', { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
    //we're connected!
    console.log('MongoDB connected...')
})
//Create a schema - this is like a blueprint
const kittySchema = new mongoose.Schema({
    name: String,
    age: Number
})
//Create a model based on the schema
const Kitten = mongoose.model('Kitten', kittySchema)
//Create a new document
const silence = new Kitten({ name: 'Silence', age: 2 })
//Insert the document into the database
silence.save((err, silence) => {
    if (err) return console.error(err)
    console.log(silence.name + ' saved to kittens collection.')
})
//Create a new document
const fluffy = new Kitten({ name: 'fluffy', age: 2 })
//Insert the document into the database
fluffy.save((err, fluffy) => {
    if (err) return console.error(err)
    console.log(fluffy.name + ' saved to kittens collection.')
})
//Create a new document
const bob = new Kitten({ name: 'bob', age: 2 })
//Insert the document into the database
bob.save((err, bob) => {
    if (err) return console.error(err)
    console.log(bob.name + ' saved to kittens collection.')
})
//Create a new document
const joe = new Kitten({ name: 'joe', age: 2 })
//Insert the document into the database
joe.save((err, joe) => {
    if (err) return console.error(err)
    console.log(joe.name + ' saved to kittens collection.')
})
//Create a new document
const tom = new Kitten({ name: 'tom', age: 2 })
//Insert the document into the database
tom.save((err, tom) => {
    if (err) return console.error(err)
    console.log(tom.name + ' saved to kittens collection.')
})
//Create a new document
const jerry = new Kitten({ name: 'jerry', age: 2})

//gonna commit this now