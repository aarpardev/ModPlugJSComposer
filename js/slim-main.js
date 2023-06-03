document.querySelector('#compose').addEventListener('click', compose)

let allNotes = []
const noteRegex = /^[A-G][-#]\d/i


function compose () {

	let maxNotes = document.querySelector('#maxnotes').value
	const numLines = document.querySelector('#rows').value

	// Split the notes and filter bad input
    const theNotes = document.querySelector('#theNotes').value
	theNotes.toString()
	allNotes = theNotes.split(`,`)

	// If max notes is greater than rows, set max notes to rows - 1
	if (maxNotes > numLines) {
		maxNotes = numLines - 1
	}

    for (let i = 0; i < allNotes.length; i++) {
		if (noteRegex.test(allNotes[i]) == false) {
			document.querySelector('#displayNotes').innerText = 'Your notes must be formatted with the note and octave like this: C-4 or C#4. There must also be commas and no spaces after each note'
			theNotes.toString().split(',').filter(noteRegex.test)
			return
		} else {
			document.querySelector('#displayNotes').innerText = ' '
		}
	}

	allNotes.push(`...`)

	// Add the filtered notes
	function compRand(numLines) {
		let shuff = []
		document.querySelector('#displayNotes').innerText = ` `
		document.querySelector('#displayNotes').innerText = `ModPlug Tracker  XM\n`
		for (i = 1; i <= numLines; i++) {
		if (i > maxNotes) {
			shuff[i] = `|...........\n`
		} else {	
				shuff[i] = `|${allNotes[Math.floor(Math.random() * allNotes.length)]}01......\n`
			}
		}

		shuff.shift()

		//Shuffle notes
		function shuffleNotes(shuff) {
			for (var i = shuff.length - 1; i > 0; i--) {
				var j = Math.floor(Math.random() * (i + 1));
				var t = shuff[i];
				shuff[i] = shuff[j];
				shuff[j] = t;
			}
		}

		shuffleNotes(shuff)
		
		// Write the composition to the DOM
		for (i = 1; i <= numLines -1; i++) {
				document.querySelector('#displayNotes').innerText += `${shuff[i]}`
		}
		console.log(`Composition complete!`)
	}
	compRand(numLines)
}