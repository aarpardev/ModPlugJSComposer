document.querySelector('#compose').addEventListener('click', compose)
document.querySelector('#eights').addEventListener('click', eights)

let allNotes = []

function compose() {
	// Take in the notes and store them in an array
	let theNotes = document.querySelector('#theNotes').value
	theNotes.toString()
	allNotes = theNotes.split(',')
	allNotes.push('...')
	console.log(allNotes)
	
	//Compose
	function compRand(numLines) {
		document.querySelector('#displayNotes').innerText = ` `
		document.querySelector('#displayNotes').innerText = `ModPlug Tracker  XM\n`
		for (i = 1; i <= numLines; i++) {
				document.querySelector('#displayNotes').innerText += `|${allNotes[Math.floor(Math.random() * allNotes.length)]}01......\n`
		}
	}
	compRand(16)
}

function eights() {
	// Take in the notes
	let theNotes = document.querySelector('#theNotes').value
	theNotes.toString()
	allNotes = theNotes.split(',')
	allNotes.push('...')
	console.log(allNotes)
	
	//Compose
	function compEigths(numLines) {
		document.querySelector('#displayNotes').innerText = ` `
		document.querySelector('#displayNotes').innerText = `ModPlug Tracker  XM\n`
		for (i = 1; i <= numLines; i++) {
				document.querySelector('#displayNotes').innerText += `|${allNotes[Math.floor(Math.random() * allNotes.length)]}01......\n|...........\n`
		}
	}
	compEigths(16)
}