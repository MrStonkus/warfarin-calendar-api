'use strict'

import express from 'express'
import getWarfarinDosesSchedule from './warfarin-calculator/main.js'
import {getPostHelp} from './warfarin-calculator/data.js'


// const cors = require('cors')
// const express = require('express')
const app = express()
const port = 5000

// app.use(cors())
app.use(express.json())
app.use(
	express.urlencoded({
		extended: true,
	})
)

//-----------------   ROUTERS    ----------------------
app.get('/node/warfarin-calendar/', (req, res) => {
	res.send(getPostHelp())
	// defData.startDate = null
})

// insert to database
app.post('/node/warfarin-calendar/', (req, res) => {
	const data = req.body
	data.startDate = new Date(data.startDate) // convert text data to date object
	res.send(getWarfarinDosesSchedule(data))
})

// run server
app.listen(port, () => {
	console.log(`App listening on port ${port}`)
})
