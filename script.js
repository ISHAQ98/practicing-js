// Shopping Linst with an array 
let myList = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 2], ["eggs", 12]]
myRow = myList[3][0]
console.log(myRow);

//Create A reusable function
function reusableFunction() {
    console.log("Hi");
}
reusableFunction();
reusableFunction()

// Return undefined
var sum = 0;
function addThree() {
    sum += 3;
}

// Switch statements
function chainToSwitch(val){
    var answer = "";

    switch(val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break; 
    }
}  
console.log(chainToSwitch(1));

 // Setup record object
 var collection = {
     "2548": {
         "album": "Slippery when wet",
         "artist": "bon Jovi",
         "tracks": [
             "let It Rock",
             "Yu Give Love a Bad Name"
         ]
     },
     "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
     },
     "1245": {
         "artist": "Robert Palmer",
         "tracks": [ ]
     },
     "5439": {
         "album": "ABBA Gold"
     }
 };
 // Keep a copy of the collection for tests
 var collectionCopy = JSON.parse(JSON.stringify(collection));

 // Only change code below this line
 function updateRecords(id, prop, value) {
     if(value === "") {
         delete collection[id][prop];
     } else if (prop === "tracks"){
         collection[id][prop] = collection[id][prop] || [];
         collection[id][prop].push(value);
     } else {
         collection[id][prop] = value;
     }

    return collection;
 }

 // Alter values below to test your code
updateRecords(2468, "tracks", "test");
 console.log(updateRecords(5439, "artist", "ABBA"));

 // While Loop 
 var myArray = [];

 var i = 3;
 while(i < 10) {
     myArray.push(i);
     i++;
 }
 console.log(myArray);
 // for loop 
 var ourArray = [];
 for(var i = 60; i >= 0; i -= 6) {
     ourArray.push(i);
 
 }
 console.log(ourArray);

 // setup
 var myArr = [ 2, 3, 4, 5, 6];
 var total = 0;
   
 for (var i = 0; i < myArr.length; i++) {
     total += myArr[i];
 }
 console.log(total);