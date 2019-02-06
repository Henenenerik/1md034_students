var miIndex = 1;
function MenuItem(name, kCal, imgSource, desc = "One tasty burger", gluten = true, lactose = false) {
    this.name = name;
    this.kCal = kCal;
    this.src = imgSource;
    this.desc = desc;
    this.gluten = gluten;
    this.lactose = lactose;
    this.id = miIndex++;
    this.info = function() {
        var result = [this.desc, "Contains " + String(this.kCal) + " kCals."];
        if (this.gluten == true && this.lactose == true) {
            result.push("Contains lactose and gluten.");
        } else {
            if (this.gluten == true) {
                result.push("Contains gluten.");
            }
            if (this.lactose == true) {
                result.push("Contains lactose.");
            }
        }
        return result;
    }
    this.staticInfo = this.info();
    this.boxBurgerString = function() {
        var result = "box burger";
        switch(this.id){
        case 1:
            return result + " d";
        case 2:
            return result + " e";
        case 3:
            return result + " f";
        default:
            return result;
        }
    }
}



var cheeseburger = new MenuItem("Safety Option",
                                1300,
                                "https://images-gmi-pmc.edge-generalmills.com/d657497e-4c20-4f87-bd12-4cde1502ccae.jpg",
                                "The safe choice for a novice adventurer.",
                                true,
                                true);
var jalapenoJourney = new MenuItem("Jalapeño Journey",
                                   1000,
                                   "https://3.bp.blogspot.com/-2Q1EUuvCtGw/V0cfp0I9SsI/AAAAAAAAvTQ/xoazc3L7jL4E6b2JBMndvGPJ9b_At73iQCLcB/s1600/Carls-Jr-California-Classic-Burger.jpg",
                                   "The only choice for any adventurer seeking a true challenge.",
                                   true,
                                   false);
var theVeganWay = new MenuItem("The Vegan Way",
                               750,
                               "https://www.contentednesscooking.com/wp-content/uploads/2015/10/Vegan-Lentil-Burger_7-1.jpg",
                               "This adventure is deceptively easy, so be on your watch.",
                               false,
                               false);

//Jag vet att jag inte använder "json"-filen vi skapade men jag använder min av metoder i MenuItem så "json" duger inte.
var menuArray = [cheeseburger, jalapenoJourney, theVeganWay];

var myElement = document.getElementById("testID");

/*
//Av okänd anledning är 'i' ett tal här.
for (var i in menuArray) {
    var listItem = document.createElement("li");
    var listValue = document.createTextNode(menuArray[i].burger);
    listItem.appendChild(listValue);
    if (menuArray[i].gluten == true && menuArray[i].lactose == true) {
        listItem.appendChild(document.createTextNode(", contains lactose and gluten."));
    } else {
        if (menuArray[i].gluten == true) {
            listItem.appendChild(document.createTextNode(", contains gluten."));
        }
        if (menuArray[i].lactose == true) {
            listItem.appendChild(document.createTextNode(", contains lactose."));
        }
    }
    myElement.appendChild(listItem);
}
// */

var boxes = document.getElementsByClassName("box");
for (var i = 0 ; i < boxes.length ; i += 1) {
    var header = document.createElement("h3");
    var image = document.createElement("img");
    var list = document.createElement("ul");
    header.appendChild(document.createTextNode(menuArray[i].name));
    image.src = menuArray[i].src;
    var listItems = menuArray[i].info();
    for (var j in listItems) {
        var listItem = document.createElement("li");
        var itemValue = document.createTextNode(listItems[j]);
        listItem.appendChild(itemValue);
        list.appendChild(listItem);
    }
    
    boxes[i].appendChild(header);
    boxes[i].appendChild(image);
    boxes[i].appendChild(list);
    
}

/*
function logWrapper() {
    console.log("Button clicked!");
}

var button = document.getElementById("myButtonID");
button.addEventListener("click", logWrapper());
*/
function isBurgerSelected() {
    var x = document.getElementsByName("burgerselect");
    for (var i = 0; i < x.length; i++) {
        if (x[i].checked == true) {
            return true;
        }
    }
    return false;
}

function selectedBurger() {
    var x = document.getElementsByName("burgerselect");
    for (var i = 0; i < x.length; i++) {
        if (x[i].checked == true) {
            return x[i].value;
        }
    }
    return '';
}

function getOrderInfo(){
    var x = document.getElementById("orderinfo");
    var result = [];

    for (var i = 0; i < x.length; i++) {
        if (x.elements[i].type === "radio") {
            if (x.elements[i].checked == true) {
                result.push(x.elements[i].value);
            }
        } else {
            result.push(x.elements[i].value);
        }
    }
    return result;
}
