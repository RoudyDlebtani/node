
import express from 'express'
import cors from 'cors'
import mysql from 'mysql'

const app = express()
app.use(cors())

const db={
    host:'localhost',
    user:'root',
    password:'',
    database:'roudy'//8ayera 7aasab db taba3ak
}
app.listen(3001 , () => {
 console.log("listening on port 3001")   
})