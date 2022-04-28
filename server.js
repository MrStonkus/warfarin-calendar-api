'use strict'

import getWarfarinDosesSchedule from './warfarin-calculator/main.js'
import express from 'express'
import getDefaultData from './warfarin-calculator/data.js'


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
app.get('/node/doses/', (req, res) => {

	let defData = getDefaultData()
	res.send(getWarfarinDosesSchedule(defData))
	// defData.startDate = null
})


// insert to database
app.post('/node/doses/', (req, res) => {
	// number = req.body.number
	res.json({ message: 'ok' })
})


// run server
app.listen(port, () => {
	console.log(`App listening on port ${port}`)
})
