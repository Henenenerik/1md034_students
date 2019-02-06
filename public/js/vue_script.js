/*
var vm = new Vue ({
    el: '#vueID',
    data: {
        menuArray: menuArray
    },
    methods: {
        dispItem(item) {
            let result = item.burger;
            if (item.gluten == true && item.lactose == true) {
                result = result + ", contains lactose and gluten.";
            } else {
                if (item.gluten == true) {
                    result = result + ", contains gluten.";
                }
                if (item.lactose == true) {
                    result = result + ", contains lactose.";
                }
            }
            return result;
        }
    }
})
*/

Vue.component('burgerinfo', {
    props: ['burger'],
    template: `
<div>
    <ul>
        <li v-for="info in burger.staticInfo"
            v-bind:info="info">{{info}}</li>
    </ul>
</div>
`
})

Vue.component('burgerbox', {
    props: ['burger'],
    template: `
<div :class="burger.boxBurgerString()">
    <h3>{{burger.name}}</h3>
    <img :src="burger.src">
    <burgerinfo v-bind:burger="burger"></burgerinfo>
    <input type="radio" name="burgerselect" :value="burger.name">Select for order
</div>
`
})

var vm = new Vue ({
    el: '.wrapper',
    data: {
        burgers: menuArray,
        console: console
    }
})

Vue.component('orderconf', {
    template: `
<div class="orderconf">

</div>
`
})

var vm2 = new Vue ({
    el: '#placeorder',
    data: {
        ok: "false",
        info: '',
        cred: '',
        orderconf: "Your order has been placed!"
    },
    methods: {
        markDone: function() {
            this.info = '';
            if (isBurgerSelected() == false) {
                this.info = "Please select a burger!";
                this.ok = "sortof";
                return;
            }
            console.log("Button clicked!");
            var y = getOrderInfo();
            this.ok = "true";
            this.info += selectedBurger() + " has been ordered with the following credentials: \n"
            for (var i = 0 ; i < y.length; i++) {
                this.info += i == 0 ? y[i] : ", " + y[i];
            }
            return;
        }
    }
})
