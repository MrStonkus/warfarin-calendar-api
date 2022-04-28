let optionsData = {
	weeklyDose: 40.74,
	startDate: new Date('2022-04-27'),
	nrDays: 3,
	maxDoseMG: 10,
  cumulDiff: 0, //cumulativeDifference, default 0 to generate new or set previous day cumu.diff number to generate from existing chedule
	medArr: [
		{
			name: 'Warfarinum',
			mg: 5,
			quantity: 100,
			splitParts: [1, 0.5],
			color: 'red',
		},
		{
			name: 'Warfarinum',
			mg: 3,
			quantity: 100,
			splitParts: [1],
			color: 'blue',
		},
	],
}

export default function getDefaultData() {
  return optionsData
}