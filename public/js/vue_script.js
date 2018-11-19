var myData=[];
myData = [
	{
		"name": "The Fire Burger",
		"kCal": 750,
		"lactose": true,
		"gluten": true,    
		"stock": 2,
		"img": "/img/TheFireBurger.jpg"
	},
	{
		"name": "Fried Turkey Burger",
		"kCal": 600,
		"lactose": true,
		"gluten": false,    
		"stock": 3,
		"img": "/img/friedturkeyburger.jpg"
	},
	{
		"name": "A Double w/ Cheese",
		"kCal": 1800,
		"lactose": true,
		"gluten": true,   
		"stock": 1, 
		"img": "/img/Double-Cheeseburger.jpg"
	}
];
// myData=JSON.parse(posData);

console.log(myData);
var app = new Vue({
		el: '#store',
		data: {	
			MenuItem:myData,
		}

});
