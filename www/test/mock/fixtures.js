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
				avatar: '/test/mock/img/jeffLjungquist.jpg'
			},
			{
				id: 1,
				firstName: 'Robert',
				lastName: 'Beal',
				avatar: '/test/mock/img/robertBeal.jpg'
			},
			{
				id: 2,
				firstName: 'Chris',
				lastName: 'Bell',
				avatar: '/test/mock/img/chrisBell.jpg'
			},
			{
				id: 3,
				firstName: 'Kennebelle',
				lastName: 'DeLuca',
				avatar: '/test/mock/img/kennebelleDeLuca.jpg'
			},
			{
				id: 4,
				firstName: 'Josephine',
				lastName: 'Aquino',
				avatar: '/test/mock/img/josephineAquino.jpg'
			},
			{
				id: 5,
				firstName: 'Rochelle',
				lastName: 'Seinfeld',
				avatar: '/test/mock/img/rochelleSeinfeld.jpg'
			}
		]
	},
	addedFriends: [
		{
			id: 0,
			firstName: 'Jeff',
			lastName: 'Ljungquist',
			avatar: '/test/mock/img/jeffLjungquist.jpg',
			selected: true
		},
		{
			id: 1,
			firstName: 'Robert',
			lastName: 'Beal',
			avatar: '/test/mock/img/robertBeal.jpg',
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
			thumbnail: '/test/mock/img/jeffLjungquist.jpg'
		},
		'x-access-token': 'M5Q7xvcy5luG8ldXTg2UCIsvbdaZA3HxPmD5IFsCE4SyzWdVS4261xdO8qU6JcItZpZA21aZdP4OqqD5KbTlRcIuO4OAJusfqmuIUK475USJkqPyHWstVcfAsSlPDwzs'
	},
	nearby: [
		{
			id: '1',
			name: 'Beantown Pub',
			type: 'bar',
			fullness: 0.47,
			distance: 0.6,
			rating: 0.5,
			men: 0.62,
			age: 29,
			interests: ['Dogs', 'Cats', 'Otters', 'Birds', 'Lizards'],
			img: '/test/mock/img/beantownPub.jpg'
		},
		{
			id: '2',
			name: 'The Place',
			type: 'club',
			fullness: 0.92,
			distance: 0.2,
			rating: 1.0,
			men: 0.11,
			age: 19,
			interests: ['Places', 'Cars', 'Keyboards'],
			img: '/test/mock/img/thePlace.jpg'
		},
		{
			id: '3',
			name: 'The Middle East',
			type: 'lounge',
			fullness: 0.20,
			distance: 1.5,
			rating: 1.5,
			men: 0.79,
			age: 35,
			interests: ['Samantha', 'Ugly Clothes', 'Bad Smells'],
			img: '/test/mock/img/theMiddleEast.jpg'
		}
	]

};