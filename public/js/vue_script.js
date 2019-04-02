var socket = io();

var orders = new Vue({
    el: '#store',
    data: {
        MenuItem: food,
        details: {x: 0, y: 0},
        lastOrder: 0,
        orderItems: [],
        userData: [],
    },
    created: function () {
        socket.on('initialize', function (data) {
            this.orders = data.orders;
        }.bind(this));
    },
    methods: {
        getNext: function () {
            var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
                return Math.max(last, next);
            }, 0);
            return lastOrder + 1;
        },


        displayOrder: function(event) {
            var offset = {x: event.currentTarget.getBoundingClientRect().left,
                y: event.currentTarget.getBoundingClientRect().top};

            this.details= { x: event.clientX - 10 - offset.x,
                y: event.clientY - 10 - offset.y };


        },
        addOrder: function () {
            if (this.orderItems.length!== 0) {
                socket.emit("addOrder", { orderId: this.getNext(),
                    details: this.details,
                    orderItems: this.orderItems,
                    userItems: this.userData,
                });
            }
        },

    },
});
