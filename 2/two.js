const fs = require("fs")
const data = fs.readFileSync("input.txt").toString().split("\n")

// adversary A = Rock = 1 B = paper = 2 C = scissors = 3
// lost = 0 draw = 3 win = 6
// player X = lost Y = draw Z = win

// Rock defeats Scissors, Scissors defeats Paper, and Paper defeats Rock. If both players choose the same shape, the round instead ends in a draw.

let score = 0

for (let element of data) {
	let adversary = element.split(" ")[0]
	let player = element.split(" ")[1]

	if (adversary === "A") {
		if (player === "X") {
			player += 0 + 3
		} else if (player === "Y") {
			player += 3 + 1
		} else if (player === "Z") {
			player += 6 + 2
		}
		score += parseInt(player.split("")[1])
	} else if (adversary === "B") {
		if (player === "X") {
			player += 0 + 1
		} else if (player === "Y") {
			player += 3 + 2
		} else if (player === "Z") {
			player += 6 + 3
		}
		score += parseInt(player.split("")[1])
	} else if (adversary === "C") {
		if (player === "X") {
			player += 0 + 2
		} else if (player === "Y") {
			player += 3 + 3
		} else if (player === "Z") {
			player += 6 + 1
		}
		score += parseInt(player.split("")[1])
	}
}

console.log(score)
