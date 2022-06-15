//Constructor for hamster object
function hamster(owner, name){
    this.owner =  owner;
    this.name = name;
    this.price = 15;
    this.wheelrun = function(){
        return console.log('squeak squeak')
    };
    this.eatfood = function(){
        return console.log('nibble nibble')
    };
    this.getPrice = function(){
        return this.price
    }
}

//Constructor for person object
function person(name, age, height, weight, mood, bankAccount){
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.mood = mood;
    this.hamsters = [];
    this.bankAccount = bankAccount;
    this.getName = function(){
        return this.name;
    };
    this.getAge = function(){
        return this.age;
    };
    this.getWeight = function(){
        return this.weight;
    };
    this.greet = function(){
        return 'Hello, my name is ' + this.name;
    };
    this.eat = function(){
        this.weight += 5;
        this.mood += 10;
        return 'Weight increased by 5Kg' + ' ' + 'Mood increased by 10';
    };
    this.excercise = function(){
        this.weight -= 1;
        return 'Weight decreased by 1kg! Good Job!'
    };
    this.ageUp = function(){
        this.age += 1;
        this.height += 10;
        this.weight += 15;
        this.mood -= 5;
        this.bankAccount += 10
        return 'Age increased by 1!' + 'Height increased by 10!' + 'Weight increased by 15!' + 'Mood decreased by 5!' + 'Bank Account increased 10!'
    }
    
}
//Creating person

//Creating Hamster


