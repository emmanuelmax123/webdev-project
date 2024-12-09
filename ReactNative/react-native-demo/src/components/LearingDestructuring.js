// destructing =
// extract values form arrays and objects, then assigns them to variables in a convient way
// [] = to perform array destucturing
// {} = to perform objcet destucturing

/* Example 1(Swapping the values of two variables)

let a = 1
let b = 2
[a,b]=[b,a]
console.log(a)
console.log(b)
this should result in a = 2 and b = 1

*/

/* Example 2 (Swapping 2 elements in a aray)

const colors =["red","green","blue","black","white"]
[colors[0],colors[4]] = [colors[4],colors[0]]
console.log(colors)

*/

/* Example 3 (Assign aray elements to variable)

we turn array elemet into element, the array elements are the stuff in the array, 
we create a variable name (fisrtColor) and place it into an array, 
which is how deconstruction works const [firstColor]

const colors = ["red", "green", "blue", "black", "white"];
const [fisrtColor, secoundColor, thirdColor, ...othercolor] = colors;
console.log(fisrtColor);  // result would be red
console.log(secoundColor); // result would be green 
console.log(thirdColor);  // result would be blue
console.log(othercolor); // result would be black and white

NOTE: the ."..." is a rest paraemeter lets us create a new array called othercolor and we are able to assign all the other colors to it.

*/

/* Example 4 (Extract values form object)

const person1 ={
firstName:"spongebob"
lastName:"squarepants"
age:"30"
job:"Fry cook"
}

const person2 ={
fistName:"patrick"
lastName:"star"
age:"34"
}

const {firstName,lastName,age,job}=person1
console.log(firstName)
console.log(lastName)
console.log(age)
console.log(job)

*/

/*
KEY POINTS FOR DESTRUCTURING OBJECTS

# Matching Property Names: The property names in the destructuring statement must match the property names in the object.
# Undefined for Missing Properties: If a property doesn’t exist in the object, the variable will be undefined.
# Renaming Variables: You can rename variables during destructuring using the syntax "exixtingName: newVariableName".
# Default Values: Assign default values for missing properties,by assigning it a value like "0 or a text".
# Object Structure: Ensure the structure being destructured matches the syntax (use {} for objects and [] for arrays).
*/

/* Example 5 (Destructure in funtion parameter)

fuction displayPerson({firstName, lastName, age, job="unemployed"}){
console.log(`name:${firstName} ${lastName}`)
console.log(`age:${age}`)
console.log(`job:${job}`)
}

const person1 ={
firstName:"spongebob"
lastName:"squarepants"
age:"30"
job:"Fry cook"
}

displayPerson(person1)

*/
