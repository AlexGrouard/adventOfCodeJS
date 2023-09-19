/* 
exactly one item type per rucksack.

Every item type is identified by a single lowercase or uppercase letter (that is, a and A refer to different types of items).

The list of items for each rucksack is given as characters all on a single line. 
A given rucksack always has the same number of items in each of its two compartments, 
so the first half of the characters represent items in the first compartment, 
while the second half of the characters represent items in the second compartment.
*/

//split the string into two halves
//store the two halves in an array
//compare the two halves
//if find duplicates, put them in a new array
//for every charcter in the new array, check if it is lowercase or uppercase
//if it is lowercase, then add  value link to it's position in the alphabet
//if it is uppercase, then add  value link to it's position in the alphabet + 26
//add the values together

const fs = require("fs")
const data = fs.readFileSync("input-small.txt").toString().split("\n")
let arrayOfCompartment = []
let duplicates = []
let temp = []
let sum = 0
const teamSize = 3
let count = 0

//part1
/* data.forEach((element) => {
	let firstHalf = element.slice(0, element.length / 2)
	let secondHalf = element.slice(element.length / 2, element.length)
	for (let i = 0; i < firstHalf.length; i++) {
		if (firstHalf.includes(secondHalf[i])) {
			duplicates.push(secondHalf[i])
			break
		}
	}
}) */

//part2
data.forEach((element) => {
	if (count < 3) {
		temp.push(element)
		count++
	} else {
		temp.forEach((element) => {
			let items = element.split("")
			console.log(items[0])
		})

		temp = []
		count = 0
	}
})
/* console.log(duplicates)

for (let letter of duplicates) {
	if (letter === letter.toLowerCase()) {
		temp.push(letter.charCodeAt(0) - 96)
	}
	if (letter === letter.toUpperCase()) {
		temp.push(letter.charCodeAt(0) - 38)
	}
}
for (let number of temp) {
	sum += number
}
//console.log(sum) */
