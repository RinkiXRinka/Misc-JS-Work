const hamster = {
    owner: '',
    name: '',
    price: 15,
    wheelrun: function(){
        return console.log('squeak squeak')
    },
    eatfood: function(){
        return console.log('nibble nibble')
    },
    getPrice: function(){
        return this.price
    }
}
