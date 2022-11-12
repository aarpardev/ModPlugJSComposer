document.querySelector('#compose').addEventListener('click', compose)
document.querySelector('#eights').addEventListener('click', eights)

function compose () {
	// Take in the notes
	let allNotes = []
	const fNote = document.querySelector('#firstNote').value
	const secNote = document.querySelector('#secondNote').value
	const thirdNote = document.querySelector('#thirdNote').value
	const frthNote = document.querySelector('#fourthNote').value
	
	allNotes[0] = fNote
	allNotes[1] = secNote
	allNotes[2] = thirdNote
	allNotes[3] = frthNote
	allNotes.toString()
	
	let noteRegex = /^[A-G][-#]\d/i

	if (noteRegex.test(allNotes) == false) { 
		alert('Your notes must be formatted with the note and octave like this: C-4 or C#4')
	} else {
	
	//Composition happens here:

	function compositionTime (numLines) {
		allNotes[4] = '...'
		allNotes[5] = '...'
		allNotes[6] = '...'
		allNotes[7] = '...'
		document.querySelector('#displayNotes').innerText = ` `
		document.querySelector('#displayNotes').innerText = `ModPlug Tracker  XM\n`
    		for(let i = 1; i <= numLines; i++){
        		document.querySelector('#displayNotes').innerText += `|${allNotes[Math.floor(Math.random() * allNotes.length)]}01......\n`
    		}
	}
	
	compositionTime (32) }
}

function eights () {
		// Take in the notes
		let allNotes = []
		const fNote = document.querySelector('#firstNote').value
		const secNote = document.querySelector('#secondNote').value
		const thirdNote = document.querySelector('#thirdNote').value
		const frthNote = document.querySelector('#fourthNote').value
		
		allNotes[0] = fNote
		allNotes[1] = secNote
		allNotes[2] = thirdNote
		allNotes[3] = frthNote
		allNotes.toString()
		
		let noteRegex = /^[A-G][-#]\d/i

	if (noteRegex.test(allNotes) == false) { 
		alert('Your notes must be formatted with the note and octave like this: C-4 or C#4')
	} else {
	
		function compEigths (numLines) {
			document.querySelector('#displayNotes').innerText = ` `
			document.querySelector('#displayNotes').innerText = `ModPlug Tracker  XM\n`
				for(let i = 1; i <= numLines; i++){
					document.querySelector('#displayNotes').innerText += `|${allNotes[Math.floor(Math.random() * allNotes.length)]}01......\n|...........\n`
				}
		}
	compEigths (16) 
	}
}