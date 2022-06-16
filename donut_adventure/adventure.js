//Creating Hero Class
class hero{
    constructor(name){
        this.name = name;
    }
    health = 100;
    weapons = {
        sprinkleSpray: 5,
        sugarShock: 10
    }
    catchPhrases = ['i\'m fresher than day old pizza', 'you can\'t count my calories']
    
    talkSass(){
        //Generate a random number beetwen 1 and 2
        let rndNum_hero = 0;
        rndNum_hero = Math.floor(Math.random() * 2);
        //prints the message from the array using the random number
        console.log(this.catchPhrases[rndNum_hero]);
    }
    announceHealth(){
        return 'Health: ' + this.health;
    }
    fight(){
        return 'I\'m Ready to rumbe';
    }
}

//Creating Enemy Class
class enemy{
    constructor(name){
        this.name = name;
    }
    health = 100;
    weapons = {
        pepperoniStars: 5,
        cheeseGrease: 10
    }
    catchPhrases = ['i\'m youtube famous', 'i\'m more dangerous than an uncovered sewer']
    talkSmack(){
        //Generate a random number beetwen 0 and 1
        let rndNum_enemy = 0;
        rndNum_enemy = Math.floor(Math.random() * 2);
        //prints the message from the array using the random number
        console.log(this.catchPhrases[rndNum_enemy]);
    }
    announceHealth(){
        return 'Health: ' + this.health; 
    }
    fight(){
        return 'I\'m gonna flatten you like a slice of pepperoni!'
    }
}
//Creating Dougie the Donut
const dougie = new hero('Dougie');
console.log(dougie.name);