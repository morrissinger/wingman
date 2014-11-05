var mockData = {
	facebookFriends: {
		page1: 	{
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
	}
};