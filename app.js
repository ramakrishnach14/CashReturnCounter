//alert("hello");

const billAmtTb = document.querySelector("#billAmount");
const nxtBtn = document.querySelector("#nextBtn");
const errorDiv = document.querySelector(".error");
const cashGiven = document.querySelector(".total_content_cashGiven");
const chkBtn = document.querySelector("#checkBtn");
const cashGivenTb = document.querySelector("#cashGiven");
const notesTD = document.querySelectorAll(".notes");
let output = document.querySelector(".total_content_output");
let notesRow = document.querySelector("#notesRow");


let billAmt;
let cash;
let notes = [2000,500,100,20,10,5,1];
let giveBackMoney;
let notesReturn=[];



nxtBtn.addEventListener("click",()=>{
	//alert("hello");
	hideError();
	//check first user entered correct anount or not
	//console.log(Number(billAmtTb.value));
	if(!Number(billAmtTb.value)){
		showError("Please enter proper value");
	} else{
		showCashGiven();
	}
});

chkBtn.addEventListener("click",()=>{
	billAmt = Number(billAmtTb.value);
	cash = Number(cashGivenTb.value);
	console.log("bill is "+billAmt+" cash is "+cash);
	hideError();
	//console.log("billAmt is "+billAmt+" cash given is "+cash);
	if(Number(billAmt)){
		if(billAmt>0){
			if(Number(cash)){
				if(cash > billAmt){
					//need to check notes here
					giveBackMoney = cash - billAmt;
					//console.log(giveBackMoney);
					for(i=0;i<notes.length;i++){
						checkNotes(notes[i],giveBackMoney,i);
					}
				}else if(cash == billAmt ) {
					hideOutput();
					showError("Cash given is equal to  bill amount  , no need to return");
				}else{
					hideOutput();
					showError("Cash given is less than bill amount , please check ");
				}
			}else{
				hideOutput();
				showError("Please enter proper value in Cash given");
			}
		} else{
			hideOutput();
			showError("Bill Amount is less than 1");
		}

	} else{
		hideOutput();
		showError("Please enter proper value in Bill Amount");
	}

});

function checkNotes(note,money,index){
	notesTD[index].innerText = "";
	showOutput();
	//notesRow.innerText="";
	let moneyRemain = money;
	let noteCount=0;

	console.log("note is "+note +" money is "+money+" index is "+index);

	if(moneyRemain >= note){

		while(moneyRemain>=note){
			moneyRemain = moneyRemain-note;
			noteCount = noteCount + 1 ;
		}
		notesTD[i].innerText = noteCount;
		giveBackMoney = moneyRemain;

		


	} else{
		return;
	}
}

function showCashGiven(){
	cashGiven.style.display="block";
}

// function hideCashGiven(){
// 	cashGiven.style.display="none";
// }

function showOutput(){
	output.style.display="block";
}

function hideOutput(){
	output.style.display="none";
}





function showError(text){
	errorDiv.style.display = "block";
	errorDiv.innerText = text;
}


function hideError(){
	errorDiv.style.display = "none";
}