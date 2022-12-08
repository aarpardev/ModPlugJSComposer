document.querySelector('#compose').addEventListener('click', compose)
document.querySelector('#eights').addEventListener('click', eights)

let allNotes = []
const noteRegex = /^[A-G][-#]\d/i

function compose() {
	// Take in the notes and store them in an array
	let theNotes = document.querySelector('#theNotes').value
	theNotes.toString()
	allNotes = theNotes.split(',')
	for (let i = 0; i < allNotes.length; i++) {
		if (noteRegex.test(allNotes[i]) == false) {
			document.querySelector('#displayNotes').innerText = 'Your notes must be formatted with the note and octave like this: C-4 or C#4. There must also be commas and no spaces after each note'
			allNotes = theNotes.toString().split(',').filter(noteRegex.test)
			return
		} else {
			document.querySelector('#displayNotes').innerText = ' '
		}
	}

	allNotes.push('...', '...', '...')
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
	// Take in the notes and store them in an array
	let theNotes = document.querySelector('#theNotes').value
	theNotes.toString()
	allNotes = theNotes.split(',')
	for (let i = 0; i < allNotes.length; i++) {
		if (noteRegex.test(allNotes[i]) == false) {
			document.querySelector('#displayNotes').innerText = 'Your notes must be formatted with the note and octave like this: C-4 or C#4. There must also be commas and no spaces after each note'
			allNotes = theNotes.toString().split(',').filter(noteRegex.test)
			return
		} else {
			document.querySelector('#displayNotes').innerText = ' '
		}
	}
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