var name = "nimshan";

alert ("hello" + "world");

var name = prompt("what is your name");

lenofname = name.length;


var tweet = prompt("Compose your tweet:");
alert("You have written " + tweet.length + " characters, you have " + (140 - tweet.length) + " characters remaining.");

//var tweet = prompt("Compose your tweet:");
//alert(`You have written ${tweet.length} characters, you have ${140 - tweet.length} characters remaining.`); 

//slicing

var tweet = prompt("Compose your tweet:");
var realtweet = tweet.slice(0,140);
alert("You have written " + realtweet.length + " characters, you have " + (140 - realtweet.length) + " characters remaining.");



//=======================

//    change casing 


//========================


word.toUpperCase();
word.toLowerCae();


var name = prompt("what is your name?");
var name = name.toLowerCase();
var firstletter = name.slice(0,1);
var cletter = firstletter.toUpperCase();

alert("hello" + cletter + name.slice(1,100));



//========================

// hello Name

//========================

var name = prompt("what is your name?");
var name = name.toLowerCase();
var name2 = name.length;
var firstletter = name.slice(0,1);
var cletter = firstletter.toUpperCase();

alert("hello " + cletter + name.slice(1,name2));

//========================

//increment and decrement

//========================

var x=5;

x=x+5;

x++;
x--;

x+=2

//========================

// creating and calling functions

//========================

function getMilk() {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}

function getMilk (bottles) {
    var cost = bottles * 1.5;
}

getMilk(2);



//========================

//excercise

//========================

function getMilk() {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveLeft");

  var nbot=math.floor(money/1.5);
  console.log("buy " + nbot + "bottles of milk");

  
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}

getMilk(nbot);


//========================

//excercise

//========================

function lifeInWeeks(age) {
    
/************Don't change the code above************/    
    
    //Write your code here.
var ageindays = (365*90)-(365*age);
var ageinweeks = (52*90)-(52*age);
var ageinyears = (12*90)-(12*age);
    
console.log("You have " +ageindays +" days, " + ageinweeks+" weeks, and " +ageinyears+ " months left.");
    
    
/*************Don't change the code below**********/
}


//========================

//excercise

//========================
//========================

//excercise

//========================




