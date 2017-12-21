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

	this.level = ko.computed(function() {
		//Omitting "this." will raise an error.
		//Use clickCount() instead of clickCount to update the value
		if (this.clickCount() < 10) {
			return "infant";
		} else if (this.clickCount() >= 10 && this.clickCount() < 20) {
			return "teenager";
		} else if (this.clickCount() >= 20 && this.clickCount() < 30) {
			return "adult";
		} else {
			return "elderly";
		}

	}, this);
}

ko.applyBindings(new ViewModel());