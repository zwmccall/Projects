/**
 * Decodes an entire message
 *
 * @param {number} shift The amount to shift each character, if null then shift needs to be calculcated.
 * @param {string} encodedLetterOne The encoded letter that needs shifted.
 * @param {string} encodedLetterTwo The second encoded letter, only passed in when shift needs calculated.
 * @return {string} Decoded message.
 */
function decodeMessage(cipherLetterOne, cipherLetterTwo, encodedMessage) {
	let decodedMessage = "";
	// Your code goes here
	let shift = "";
	if(((isAlphaUpper(cipherLetterOne)) || (isAlphaLower(cipherLetterOne)) && ((isAlphaUpper(cipherLetterTwo)) || (isAlphaLower(cipherLetterTwo))))){
		shift = getShift(cipherLetterOne, cipherLetterTwo);
	} else {
		return "One of the two ciphers is not an alphabetical character.";
	}
	for (i = 0; i < encodedMessage.length; i++) {
		let encodedChar = encodedMessage.charAt(i);
		if (isAlphaLower(encodedChar) || isAlphaUpper(encodedChar)){
			decodedMessage += getDecodedLetter(shift, encodedChar);
		} else {
			decodedMessage += encodedChar;
		}
	}
	return decodedMessage;
}

/**
 * Calculates the amount to shift each character
 *
 * @param {string} cipherLetterOne The first letter of the cipher.
 * @param {string} cipherLetterTwo The second letter of the cipher.
 * @return {number} Amount to shift each character.
 */
function getShift(cipherLetterOne, cipherLetterTwo){
	let alphabet = "abcdefghijklmnopqrstuvwxyz";
	cipherLetterOne = cipherLetterOne.toLowerCase();
	cipherLetterTwo = cipherLetterTwo.toLowerCase();
	let shift = alphabet.indexOf(cipherLetterOne) - (25 - alphabet.indexOf(cipherLetterTwo));
	if (shift < 0) {
		shift = 26 - Math.abs(shift);
	}
	return shift;
}

/**
 * Decodes single letter
 *
 * @param {number} shift The amount to shift each character.
 * @param {string} encodedLetterOne The encoded letter that needs shifted.
 * @return {string} Decoded letter.
 */
function getDecodedLetter(shift, encodedLetterOne){
	let alphabet = "abcdefghijklmnopqrstuvwxyz";
	let decodedLetter = "";
	let uppercase = false;
	if(isAlphaUpper(encodedLetterOne)){
		uppercase = true;
	}
	encodedLetterOne = encodedLetterOne.toLowerCase();
	let charIndex = alphabet.indexOf(encodedLetterOne);
	if ((charIndex - shift) < 0){
		decodedLetter = alphabet.charAt(25 - (26 - shift + charIndex));
	} else {
		decodedLetter = alphabet.charAt(25 - (charIndex - shift));
	}
	if(uppercase){
		return decodedLetter.toUpperCase();
	} else {
		return decodedLetter;
	}
}

/**
 * Checks if char is an uppercase alphabetical character
 *
 * @param {character} char The character to check.
 * @return {boolean} if char is an uppercase alphabetical character.
 */
function isAlphaUpper(char){
	let charCode = char.charCodeAt(0);
	if (charCode > 64 && charCode < 91) {
		return true;
	}
}

/**
 * Checks if char is an lowercase alphabetical character
 *
 * @param {character} char The character to check.
 * @return {boolean} if char is an lowercase alphabetical character.
 */
function isAlphaLower(char){
	let charCode = char.charCodeAt(0);
	if (charCode > 96 && charCode < 123) {
		return true;
	}
}

//Test
console.log("Test:");
console.log(decodeMessage("E", "X", "ZNYX."));

//Message 1
console.log("Message 1:");
console.log(decodeMessage("F", "E", "Lvp hjw gfhvgf qcf rfhvwg xfrrjdf il xjqhcbwd pu qcf yfqqfsr J jwg Q evs qcf hbucfs."));

//Message 2
console.log("Message 2:");
console.log(decodeMessage("A", "T", "Nf af amp kfs ilbalgn vfz tcp teeivlgn ofc fg fzc xpsblap (maaeb://ilgwbvbaphb.rfh/rtcppcb/5). Fgrp vfz tcp fg amp kfs ilbalgn etnp, rilrj tgvxmpcp fg amp etnp tgq avep lg \"lxtgatkfs\"."));

//Final message
console.log("Final message:");
console.log(decodeMessage("L", "S", "Xppa upc! Hz wpoz fpj wda yjq hvkw kwvl bwdsszqxz. Kp ljcrvk fpjm lpsjkvpq, oszdlz lzqa dq zrdvs kp bdmzzml@svqglflkzrl.bpr hvkw kwz ljcuzbk svqz \"SvqgLflkzrlRpcvszUpc\". Vk vl izmf vropmkdqk kwdk kwvl vl kwz zgdbk ljcuzbk svqz kwdk fpj zqkzm, lp hz mzbprrzqa bpofvqx dqa odlkvqx kp dipva dqf kfopl. Oszdlz bmzdkz d lzbmzk xvlk (wkkol://xvlk.xvkwjc.bpr) hvkw fpjm bpaz lpsjkvpq dqa vqbsjaz d jms kp fpjm xvlk vq kwz zrdvs. Vy fpj ap kwvl dss bpmmzbksf, fpj lwpjsa mzbzvziz dq zrdvs ympr jl hvkw d yzh njzlkvpql kwdk hz hpjsa svtz fpj kp dqlhzm. Oszdlz szk jl tqph vy fpj ap qpk mzbzviz kwz njzlkvpqqdvmz."));