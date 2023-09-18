/* 
exactly one item type per rucksack.

Every item type is identified by a single lowercase or uppercase letter (that is, a and A refer to different types of items).

The list of items for each rucksack is given as characters all on a single line. 
A given rucksack always has the same number of items in each of its two compartments, 
so the first half of the characters represent items in the first compartment, 
while the second half of the characters represent items in the second compartment.
*/

//s
//split the string into two halves

const fs = require("fs")
const data = fs.readFileSync("input.txt").toString().split("\n")
let arrayOfCompartment = []
let temp = []
console.log(data)
data.forEach((element) => {
	let firstHalf = element.slice(0, element.length / 2)
	let secondHalf = element.slice(element.length / 2, element.length)
	temp.push(firstHalf)
	temp.push(secondHalf)
})
