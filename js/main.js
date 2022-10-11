document.querySelector('#compose').addEventListener('click', compose)
document.querySelector('#eights').addEventListener('click', eights)

function compose () {
	// Take in the notes
	let allNotes = [`C-4`,`D-4`,`D#4`,`G-4`,`...`]
	const fNote = document.querySelector('#firstNote').value
	const secNote = document.querySelector('#secondNote').value
	const thirdNote = document.querySelector('#thirdNote').value
	const frthNote = document.querySelector('#fourthNote').value
	
	allNotes[0] = fNote
	allNotes[1] = secNote
	allNotes[2] = thirdNote
	allNotes[3] = frthNote
	allNotes.toString()
	// alert( allNotes )
	
	//Composition happens here:

	function compositionTime (numLines) {
		document.querySelector('#displayNotes').innerText = ` `
		document.querySelector('#displayNotes').innerText = `ModPlug Tracker  XM\n`
    		for(let i = 1; i <= numLines; i++){
        		document.querySelector('#displayNotes').innerText += `|${allNotes[Math.floor(Math.random() * allNotes.length)]}01......\n`
    		}
	}

		compositionTime (32)
}

function eights () {
		// Take in the notes
		let allNotes = [`C-4`,`D-4`,`D#4`,`G-4`]
		const fNote = document.querySelector('#firstNote').value
		const secNote = document.querySelector('#secondNote').value
		const thirdNote = document.querySelector('#thirdNote').value
		const frthNote = document.querySelector('#fourthNote').value
		
		allNotes[0] = fNote
		allNotes[1] = secNote
		allNotes[2] = thirdNote
		allNotes[3] = frthNote
		allNotes.toString()
		// alert( allNotes )
		//Composition happens here:
	
		function compEigths (numLines) {
			document.querySelector('#displayNotes').innerText = ` `
			document.querySelector('#displayNotes').innerText = `ModPlug Tracker  XM\n`
				for(let i = 1; i <= numLines; i++){
					document.querySelector('#displayNotes').innerText += `|${allNotes[Math.floor(Math.random() * allNotes.length)]}01......\n|...........\n`
				}
		}
	
		compEigths (16)
	}