'use strict'

import express from 'express'
import getWarfarinDosesSchedule from './warfarin-calculator/main.js'
import {getPostHelp} from './warfarin-calculator/data.js'

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
app.get('/api/inr/', (req, res) => {
	res.send(getPostHelp())
})

// insert to database
app.post('/api/inr/', (req, res) => {
	res.send(getWarfarinDosesSchedule(req.body))
})

// run server
app.listen(port, () => {
	console.log(`App listening on port ${port}`)
})
