var ViewModel = function() {
	//Define models (functions are still seperated)
	//Bind with <div data-bind="text: clickCount"></div>
	this.clickCount = ko.observable(0);
	//Bind with h2 in html via data-bind="text: name"
	this.name = ko.observable('Tony');
	//Bind with attr: {src: imgSrc} to set img src
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.imgAttribution = ko.observable('https://www.flickr.com');

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};
}

ko.applyBindings(new ViewModel());