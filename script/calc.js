function loopBitGroup(group, count, check){
	if(count != 0){
		if(check == true){
			group += "1";
		}
		else {
			group += "0";
		}
		for(var i = 0; i < count; i++) {
			group += "1";
			
		}
	}
	return group;
}

function leadingZeroHex(group){
	if(group.length < 2) {
		for(var i = group.length; i < 2; i++){
			group += "0";
		}
		group = group.split("").reverse().join("");
	}
	return group
}

function calculateFlag() {
	var countHR1 = document.getElementById("hr1").value;
	var countHR2 = document.getElementById("hr2").value;
	var countHR3 = document.getElementById("hr3").value;
	var countHR4 = document.getElementById("hr4").value;
	var countHR5 = document.getElementById("hr5").value;
	var countHR6 = document.getElementById("hr6").value;
	
	var urgentHR1 = document.getElementById("urgent1").checked;
	var urgentHR2 = document.getElementById("urgent2").checked;
	var urgentHR3 = document.getElementById("urgent3").checked;
	var urgentHR4 = document.getElementById("urgent4").checked;
	var urgentHR5 = document.getElementById("urgent5").checked;
	var urgentHR6 = document.getElementById("urgent6").checked;
	
	var sign = "0"
	
	var bitgroup = "";
	if(countHR1 != 0){
	bitgroup = sign + loopBitGroup(bitgroup, countHR1, urgentHR1);
	bitgroup = loopBitGroup(bitgroup, countHR2, urgentHR2);
	bitgroup = loopBitGroup(bitgroup, countHR3, urgentHR3);
	bitgroup = loopBitGroup(bitgroup, countHR4, urgentHR4);
	bitgroup = loopBitGroup(bitgroup, countHR5, urgentHR5);
	bitgroup = loopBitGroup(bitgroup, countHR6, urgentHR6);
	
	for(var i = bitgroup.length; i < 64; i++){
		bitgroup += "0";
	}
		
	bitgroup1 = leadingZeroHex(parseInt(bitgroup.substring(0,8).split("").reverse().join(""), 2).toString(16));
	bitgroup2 = leadingZeroHex(parseInt(bitgroup.substring(8,16).split("").reverse().join(""), 2).toString(16));
	bitgroup3 = leadingZeroHex(parseInt(bitgroup.substring(16,24).split("").reverse().join(""), 2).toString(16));
	bitgroup4 = leadingZeroHex(parseInt(bitgroup.substring(24,32).split("").reverse().join(""), 2).toString(16));
	bitgroup5 = leadingZeroHex(parseInt(bitgroup.substring(32,40).split("").reverse().join(""), 2).toString(16));
	bitgroup6 = leadingZeroHex(parseInt(bitgroup.substring(40,48).split("").reverse().join(""), 2).toString(16));
	bitgroup7 = leadingZeroHex(parseInt(bitgroup.substring(48,56).split("").reverse().join(""), 2).toString(16));
	bitgroup8 = leadingZeroHex(parseInt(bitgroup.substring(56,64).split("").reverse().join(""), 2).toString(16));
	
	binary_flag = bitgroup1 + bitgroup2 + bitgroup3 + bitgroup4 + bitgroup5 + bitgroup6 + bitgroup7 + bitgroup8;
		
	document.getElementById("resultContainer").innerHTML = "";
	document.getElementById("resultContainer").innerHTML = 
		'<h2>Result Flag</h2>' + '<h4>Copy text or use buttons to save in clipboard.</h4>' +
		'<p style="width:100%;">!kqf ' + binary_flag + '</p>' +
		'<p style="width:100%;">' + binary_flag + '</p>' +
		'<div class="input-container"><button style="width:100%;" class="color-btn color-btn-green" onclick="copyClipboard(this)"><i style="padding:3px;" class="fa fa-clipboard" aria-hidden="true"></i><input type="text" style="display:none" value="!kqf ' + binary_flag + '" />!kqf ' + binary_flag + '</button></div>' +
		'<div class="input-container"><button style="width:100%;" class="color-btn color-btn-green" onclick="copyClipboard(this)"><i style="padding:3px;" class="fa fa-clipboard" aria-hidden="true"></i><input type="text" style="display:none" value="' + binary_flag + '" />' + binary_flag + '</button></div>';
	}
	
}

function clearCalc(){
	document.getElementById("hr1").value = 0;
	document.getElementById("hr2").value = 0;
	document.getElementById("hr3").value = 0;
	document.getElementById("hr4").value = 0;
	document.getElementById("hr5").value = 0;
	document.getElementById("hr6").value = 0;

	document.getElementById("urgent1").checked = false;
	document.getElementById("urgent2").checked = false;
	document.getElementById("urgent3").checked = false;
	document.getElementById("urgent4").checked = false;
	document.getElementById("urgent5").checked = false;
	document.getElementById("urgent6").checked = false;

	document.getElementById("resultContainer").innerHTML = "";
}

function inputButtonAction(myElement, string){
	myInput = parseInt(myElement.parentElement.children[1].value);
	if(string === "add"){
		myInput += 1;
	}
	else {
		if(myInput >= 1){
			myInput -= 1;
		}
	}
	myElement.parentElement.children[1].value = myInput;
}
