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

