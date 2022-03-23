// Homework Questions
// Question 1
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(dog_string){
    for (let names of dog_names) {
        if (dog_string.includes(names)) {
            console.log('Matched dog_name')
        }
        else {
            console.log('No matched')
        }
    }
}
findWords(dog_string)
//Question 2
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let newArray = []
let myArray = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"];
for(let i = 0; i < myArray.length; i++){ 
    if (i % 2 == 0){
        console.log(myArray[i])
        newArray.push('even index')

    }
    else {
        newArray.push(myArray[i])
    }

}

console.log(newArray)




// https://www.codewars.com/kata/557cd6882bfa3c8a9f0000c1

function getAge(inputString){
    return parseInt(inputString);
  }

