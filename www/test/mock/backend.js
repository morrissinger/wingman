function createMockEndpoints($httpBackend) {
	$httpBackend.whenGET(/https:\/\/graph.facebook.com\/v2.2\/.*?\/friends/).respond(mockData.facebookFriends['1'].page1);
	$httpBackend.whenGET(/\/v2\.2\/friends2/).respond(mockData.facebookFriends['1'].page2);
	$httpBackend.whenGET(/\/v2.2\/friends3/).respond(mockData.facebookFriends['1'].page3);
	$httpBackend.whenPOST(/\/users\/byFacebookID/).respond(mockData.users.byFacebookID);
	$httpBackend.whenPOST(/\/users\/[^\/]*?\/friends/).respond(mockData.addedFriends);
	$httpBackend.whenGET(/templates.*?\.html/).respond('');
}