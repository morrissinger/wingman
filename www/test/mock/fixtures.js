var mockData = {
	facebookFriends: {
		"0": {
			page1: {
				"data": [
					{
						"id": "0"
					},
					{
						"id": "1"
					},
					{
						"id": "2"
					},
					{
						"id": "3"
					},
					{
						"id": "4"
					},
					{
						"id": "5"
					},
					{
						"id": "6"
					}
				],
				"paging": {
					"next": "http://example.com/v2.2/friends2"
				},
				"summary": {
					"total_count": 1000
				}
			},
			page2: {
				"data": [
				],
				"paging": {
					"previous": "http://example.com/v2.2/friends3"
				},
				"summary": {
					"total_count": 1000
				}
			}
		},
		"1": {
			page1: {
				"data": [
					{
						"id": "0"
					},
					{
						"id": "1"
					},
					{
						"id": "2"
					},
					{
						"id": "3"
					},
					{
						"id": "4"
					},
					{
						"id": "5"
					},
					{
						"id": "6"
					},
					{
						"id": "7"
					},
					{
						"id": "8"
					},
					{
						"id": "9"
					}
				],
				"paging": {
					"next": "http://example.com/v2.2/friends2"
				},
				"summary": {
					"total_count": 1000
				}
			},
			page2: {
				"data": [
					{
						"id": "10"
					},
					{
						"id": "11"
					},
					{
						"id": "12"
					},
					{
						"id": "13"
					},
					{
						"id": "14"
					}
				],
				"paging": {
					"previous": "http://example.com/v2.2/friends1",
					"next": "http://example.com/v2.2/friends3"
				},
				"summary": {
					"total_count": 1000
				}
			},
			page3: {
				"data": [],
				"paging": {
					"previous": "http://example.com/v2.2/friends2",
					"next": "http://example.com/v2.2/friends4"
				}
			}
		}
	},
	users: {
		byFacebookID: 	[
			{
				id: 0,
				firstName: 'Jeff',
				lastName: 'Ljungquist',
				avatar: 'http://localhost:8100/test/mock/img/jeffLjungquist.jpg'
			},
			{
				id: 1,
				firstName: 'Robert',
				lastName: 'Beal',
				avatar: 'http://localhost:8100/test/mock/img/robertBeal.jpg'
			},
			{
				id: 2,
				firstName: 'Chris',
				lastName: 'Bell',
				avatar: 'http://localhost:8100/test/mock/img/chrisBell.jpg'
			},
			{
				id: 3,
				firstName: 'Kennebelle',
				lastName: 'DeLuca',
				avatar: 'http://localhost:8100/test/mock/img/kennebelleDeLuca.jpg'
			},
			{
				id: 4,
				firstName: 'Josephine',
				lastName: 'Aquino',
				avatar: 'http://localhost:8100/test/mock/img/josephineAquino.jpg'
			},
			{
				id: 5,
				firstName: 'Rochelle',
				lastName: 'Seinfeld',
				avatar: 'http://localhost:8100/test/mock/img/rochelleSeinfeld.jpg'
			}
		]
	},
	addedFriends: [
		{
			id: 0,
			firstName: 'Jeff',
			lastName: 'Ljungquist',
			avatar: 'http://localhost:8100/test/mock/img/jeffLjungquist.jpg',
			selected: true
		},
		{
			id: 1,
			firstName: 'Robert',
			lastName: 'Beal',
			avatar: 'http://localhost:8100/test/mock/img/robertBeal.jpg',
			selected: true
		}
	],
	signin: {
		user: {
			id: '123',
			email: 'user@example.com',
			firstName: 'Jeff',
			lastName: 'Ljungquist',
			displayName: 'Jeff Ljungquist',
			thumbnail: 'http://localhost:8100/test/mock/img/jeffLjungquist.jpg'
		},
		'x-access-token': 'M5Q7xvcy5luG8ldXTg2UCIsvbdaZA3HxPmD5IFsCE4SyzWdVS4261xdO8qU6JcItZpZA21aZdP4OqqD5KbTlRcIuO4OAJusfqmuIUK475USJkqPyHWstVcfAsSlPDwzs'
	}
};