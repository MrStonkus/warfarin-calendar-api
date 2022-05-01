let optionsData = {
	weeklyDose: 40.74,
	startDate: new Date('2022-04-27'),
	endDate: new Date('2022-04-30'),
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

export function getDefaultData() {
	return optionsData
}

export function getPostHelp() {
	return `
	<div>------ Post Help ------</div>
	<div>below is example of post request to API</div>
	<div>
		{<br>
		&emsp;"weeklyDose": 40.74,<br>
		&emsp;"startDate": "2022-04-27T00:00:00.000Z",<br>
		&emsp;"nrDays": 3,<br>
		&emsp;"maxDoseMG": 10,<br>
		&emsp;"cumulDiff": 0,<br> 
		&emsp;"medArr": [<br>
			&emsp;&emsp;{<br>
				&emsp;&emsp;&emsp;"name": "Warfarinum",<br>
				&emsp;&emsp;&emsp;"mg": 5,<br>
				&emsp;&emsp;&emsp;"quantity": 100,<br>
				&emsp;&emsp;&emsp;"splitParts": [1, 0.5],<br>
				&emsp;&emsp;&emsp;"color": "red"<br>
			&emsp;&emsp;},<br>
			&emsp;&emsp;{<br>
				&emsp;&emsp;&emsp;"name": "Warfarinum",<br>
				&emsp;&emsp;&emsp;"mg": 3,<br>
				&emsp;&emsp;&emsp;"quantity": 100,<br>
				&emsp;&emsp;&emsp;"splitParts": [1],<br>
				&emsp;&emsp;&emsp;"color": "blue"<br>
			&emsp;&emsp;}<br>
		&emsp;]<br>
	}
	</div>
	`
}
