let money = 0;
let inventory = ["Teeth"];
let add_money;
let add_inventory;

function starting(){

add_money = document.getElementById("money");
add_inventory = document.getElementById("inventory");

add_money.innerHTML = money;

add_inventory.innerHTML = inventory;

document.getElementById("buyScissors").disabled = true;
document.getElementById("buyLawnmower").disabled = true;
document.getElementById("cutWithScissors").style.display = "none"
document.getElementById("cutWithLawnmower").style.display = "none"

}

function cutWithTeeth(){
    money++
    add_money.value = money
    document.getElementById("money").innerHTML = add_money.value
    if (money >= 5){
        document.getElementById("buyScissors").disabled = false
        }
    if (money >= 25){
        document.getElementById("buyLawnmower").disabled = false
        }
}

function cutWithScissors(){
    money += 5
    add_money.value = money
    document.getElementById("money").innerHTML = add_money.value
    
    if (money >= 25){
        document.getElementById("buyLawnmower").disabled = false
        }
}
function cutWithLawnmower(){
    money += 50
    add_money.value = money
    document.getElementById("money").innerHTML = add_money.value
}

function shop(){
    if(money >= 5){
        document.getElementById("cutWithScissors").style.display = "inline"
        document.getElementById("buyScissors").disabled = true
        if (inventory[1]== "Scissors"){
            console.log("no hacer nada")
        }
        else inventory.push("Scissors")
        add_inventory = document.getElementById("inventory");
        add_inventory.innerHTML = inventory;

    }
    if(money >= 25){
        document.getElementById("cutWithLawnmower").style.display = "inline"
        document.getElementById("buyLawnmower").disabled = true
        if (inventory[2]== "Lawnmower"){
            console.log("no hacer nada")
        }
        else inventory.push("Lawnmower")
        add_inventory = document.getElementById("inventory");
        add_inventory.innerHTML = inventory;
        

    }

}
