//Preferred: store initial cats externally and read them to initialCats
var initialCats = [
	{
		clickCount: 0,
		name: "Tony",
		imgSrc: "img/434164568_fea0ad4013_z.jpg",
	 	imgAttribution: "https://www.flickr.com",
	 	nicknames: ["Basketball Guy", "Genius", "Lucky Guy"]
	},
	{
		clickCount: 0,
		name: "Lucy",
		imgSrc: "img/22252709_010df3379e_z.jpg",
	 	imgAttribution: "https://www.flickr.com",
	 	nicknames: ["Violin Girl", "Beauty", "Flower"]
	},
	{
		clickCount: 0,
		name: "Patrick",
		imgSrc: "img/1413379559_412a540d29_z.jpg",
	 	imgAttribution: "https://www.flickr.com",
	 	nicknames: ["Handsome Boy", "Big Bird", "Smiling Boy"]
	},
]


var Cat = function(data){
	//Define models (functions are still seperated)
	//Bind with <div data-bind="text: clickCount"></div>
	this.clickCount = ko.observable(data.clickCount);

	//Bind with h2 in html via data-bind="text: name"
	this.name = ko.observable(data.name);

	//Bind with attr: {src: imgSrc} to set img src
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);

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

	this.nicknames = ko.observableArray();
	for (var i=0; i<data.nicknames.length; i++) {
		this.nicknames.push({nickname: data.nicknames[i]});
	}
}


//ViewModel is what is shown on the page
var ViewModel = function() {
	//Bind ViewModel to "self" in case "this" changes scope
	var self = this;

	//Put all initial cats into an array
	//Initial cats can change in external file
	self.catList = ko.observableArray([]);
	for (var i=0; i<initialCats.length; i++) {
		self.catList.push(new Cat(initialCats[i]));
	}

	//The initial page will show the first cat
	//Note: use catList()[0]. 
	//catList[0] will output nothing
	self.currentCat = ko.observable(self.catList()[0]);
	
	//Define a click listener to show clicked cat
	self.showClickedCat = function(clickedCat) {
		//Set currentCat to clickedCat
		self.currentCat(clickedCat);
	};

	//Increment the click count when image is clicked
	self.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};
}

ko.applyBindings(new ViewModel());