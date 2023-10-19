function decodeMessage(cipherLetterOne, cipherLetterTwo, encodedMessage) {
	let decodedMessage = "";
	// Your code goes here
	let alphabet = "abcdefghijklmnopqrstuvwxyz";
	let backwards_alphabet = "zyxwvutsrqponmlkjihgfedcba";
	let alphabet_caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let backwards_alphabet_caps = "ZYXWVUTSRQPONMLKJIHGFEDCBA";
	let shift = alphabet_caps.indexOf(cipherLetterOne) - backwards_alphabet_caps.indexOf(cipherLetterTwo);
	if (shift < 0) {
		shift = 26 - Math.abs(shift);
	}
	for (i = 0; i < encodedMessage.length; i++) {
		if (alphabet.indexOf(encodedMessage.charAt(i)) > -1){
			if ((alphabet.indexOf(encodedMessage.charAt(i)) - shift) < 0){
				decodedMessage += backwards_alphabet.charAt(26 - Math.abs(shift) + alphabet.indexOf(encodedMessage.charAt(i)));
			} else {
				decodedMessage += backwards_alphabet.charAt(alphabet.indexOf(encodedMessage.charAt(i))-shift);
			}
		} else if (alphabet_caps.indexOf(encodedMessage.charAt(i)) > -1) {
			if ((alphabet_caps.indexOf(encodedMessage.charAt(i)) - shift) < 0){
				decodedMessage += backwards_alphabet_caps.charAt(26 - Math.abs(shift) + alphabet_caps.indexOf(encodedMessage.charAt(i)));
			} else {
				decodedMessage += backwards_alphabet_caps.charAt(alphabet_caps.indexOf(encodedMessage.charAt(i))-shift);
			}
		} else {
			decodedMessage += encodedMessage.charAt(i);
		}
	}
	return decodedMessage;
}
let t0 = performance.now();

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

let t1 = performance.now();
console.log(`Function took ${t1 - t0} milliseconds.`);
