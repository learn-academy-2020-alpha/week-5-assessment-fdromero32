// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.
var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"

const secretCode = string => {
    newString = string.split('')
    var superTopSecret = newString.map(letter =>{
        if(letter === 'a'){
            return letter = 4
        }else if(letter === 'e'){
            return letter = 3
        }else if(letter === 'i'){
            return letter = 1
        }else if(letter === 'o'){
            return letter = 0
        } else {
            return letter = letter
        }
    })
    return superTopSecret.join('')
}

console.log(secretCode(secretCodeWord1))
console.log(secretCode(secretCodeWord2))

// --------------------2) Create a function that takes in an array and returns all the words that have the letter a in them.

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"

const whereIsAYYY = array => {
    return array.filter(word => word.toLowerCase().includes('a')).toString(" ")
}

  console.log(whereIsAYYY(arrayOfWords))
  

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is one pair and one three of a kind.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false

const fullHouse = (arr) => {
    let countObj = {}
    for(let x of arr){
      countObj[x] = (countObj[x] || 0) + 1;
    }
    let vals = Object.values(countObj);
    if((vals[0] === 2 && vals[1] === 3) || (vals[1] === 2 && vals[0] === 3)){
      return true;
    }
    return false;
  }

  console.log(fullHouse(hand1))
  console.log(fullHouse(hand2))