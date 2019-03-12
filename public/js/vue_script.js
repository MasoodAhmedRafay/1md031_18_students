/*var food = [
	{
		"name": "The Fire Burger",
		"kCal": 750,
		"lactose": true,
		"gluten": true,
		"stock": 2,
		"checked":false,
		"img": "/img/TheFireBurger.jpg"
	},
	{
		"name": "Fried Turkey Burger",
		"kCal": 600,
		"lactose": true,
		"gluten": false,
		"stock": 3,
		"checked":false,
		"img": "/img/friedturkeyburger.jpg"
	},
	{
		"name": "A Double w/ Cheese",
		"kCal": 1800,
		"lactose": true,
		"gluten": true,
		"stock": 1,
		"checked":false,
		"img": "/img/Double-Cheeseburger.jpg"
	}
];*/
/*
var myData=[];
myData = [
	{
		"name": "The Fire Burger",
		"kCal": 750,
		"lactose": true,
		"gluten": true,    
		"stock": 2,
		"checked":false,
		"img": "/img/TheFireBurger.jpg"
	},
	{
		"name": "Fried Turkey Burger",
		"kCal": 600,
		"lactose": true,
		"gluten": false,    
		"stock": 3,
		"checked":false,
		"img": "/img/friedturkeyburger.jpg"
	},
	{
		"name": "A Double w/ Cheese",
		"kCal": 1800,
		"lactose": true,
		"gluten": true,   
		"stock": 1, 
		"checked":false,
		"img": "/img/Double-Cheeseburger.jpg"
	}
];
 //myData=JSON.parse(posData);
*/
//console.log(myData);
console.log(food);
var app = new Vue({
		el: '#store',
		data: {
			//MenuItem:myData,
			MenuItem:food,
			orderData:[],
			userData:'',
		},
		methods: {
	        markDone: function() {
	            //Add some functionality
	        },
	        PlaceOrder () {
	        	console.log(this.$refs.f_name.value);
	        	var temp_item={
                    f_name:this.$refs.f_name.value,
                    l_name:this.$refs.l_name.value,
                    email:this.$refs.email.value,
                    street:this.$refs.street.value,
                    house:this.$refs.house.value,
                    sex:this.$refs.sex.value
                };
	        	console.log(temp_item);
                this.userData=temp_item;
		    }
	    }

});