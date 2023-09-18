const fs = require("fs")
const data = fs.readFileSync("input.txt").toString().split("\n")
let caloryCount = []
let currentCalory = 0

for (let element of data) {
	if (element === "") {
		caloryCount.push(currentCalory)
		currentCalory = 0
		continue
	} else {
		currentCalory += +parseInt(element)
	}
}
caloryCount.push(currentCalory)

caloryCount.sort((a, b) => {
	return b - a
})
console.log(caloryCount[0])

let max3 = caloryCount[0] + caloryCount[1] + caloryCount[2]

console.log(max3)
