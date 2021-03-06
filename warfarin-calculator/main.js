//Daily dose calculator for Warfarinum drugs by Valdas Stonkus.
import {
	generateMedicines,
	generatePosibleDoses,
	getDaysBetweenDates,
	getDailyDoses,
	getDosesSchedule,
	showScheduleInConsole,
} from './Functions/warfarinCalcFunctions.js'

export default function getWarfarinDosesSchedule(data) {
	//Generator --------------------------------------------------------------
	const medicines = generateMedicines(data.medArr)
	// pos doses ex. [1.5, 3, 4.5, 5, 8, 10] etc.
	const posibleDoses = generatePosibleDoses(medicines, data.maxDoseMG)

	data.nrDays = getDaysBetweenDates(data.startDate, data.endDate)

	// daily doses ex. [{mg: 1.5, drugs: [object, object], cumDiff: 0}]
	const dailyDoses = getDailyDoses(
		data.weeklyDose,
		data.nrDays,
		posibleDoses,
		data.cumulDiff
	)

	// dosesSch ex. [{date: 2020-04-27T00:00:00.000Z, mg: 1.5, cumulDiff: 0, medPart: [object, object]}]
	data.startDate = new Date(data.startDate) // convert text data to date object
	const dosesSchedule = getDosesSchedule(dailyDoses, data.startDate)
	// showScheduleInConsole(dosesSchedule, data.weeklyDose, medicines)

	return dosesSchedule
}
