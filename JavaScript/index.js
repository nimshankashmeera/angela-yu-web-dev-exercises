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

