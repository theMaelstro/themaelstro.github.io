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

	bitgroup = sign + loopBitGroup(bitgroup, countHR1, urgentHR1);
	bitgroup = loopBitGroup(bitgroup, countHR2, urgentHR2);
	bitgroup = loopBitGroup(bitgroup, countHR3, urgentHR3);
	bitgroup = loopBitGroup(bitgroup, countHR4, urgentHR4);
	bitgroup = loopBitGroup(bitgroup, countHR5, urgentHR5);
	bitgroup = loopBitGroup(bitgroup, countHR6, urgentHR6);
	
	for(var i = bitgroup.length; i < 64; i++){
		bitgroup += "0";
	}
		
	bitgroup1 = parseInt(bitgroup.substring(0,8).split("").reverse().join(""), 2).toString(16);
	if(bitgroup1.length < 2) {
		for(var i = bitgroup1.length; i < 2; i++){
			bitgroup1 += "0";
		}
		bitgroup1 = bitgroup1.split("").reverse().join("");
	}
	bitgroup2 = parseInt(bitgroup.substring(8,16).split("").reverse().join(""), 2).toString(16);
	bitgroup3 = parseInt(bitgroup.substring(16,24).split("").reverse().join(""), 2).toString(16);
	bitgroup4 = parseInt(bitgroup.substring(24,32).split("").reverse().join(""), 2).toString(16);
	bitgroup5 = parseInt(bitgroup.substring(32,40).split("").reverse().join(""), 2).toString(16);
	bitgroup6 = parseInt(bitgroup.substring(40,48).split("").reverse().join(""), 2).toString(16);
	bitgroup7 = parseInt(bitgroup.substring(48,56).split("").reverse().join(""), 2).toString(16);
	bitgroup8 = parseInt(bitgroup.substring(56,64).split("").reverse().join(""), 2).toString(16);
	binary_flag = bitgroup1 + bitgroup2 + bitgroup3 + bitgroup4 + bitgroup5 + bitgroup6 + bitgroup7 + bitgroup8;
	
	document.getElementById("printResult").innerHTML = binary_flag;
	
}