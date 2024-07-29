var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { 
	return document.getElementById(id);
 };
 

var addScore = function(){
	let name = $("name").value;
	let score = $("score").value;
	let text = $("nameAlert");
	let scoreval = $("scoreAlert");

	if(name.trim() === ""){
		
		text.textContent = "*Name field cannot be empty";
		text.style.display = "inline";
		
	}
	else if(!isNaN(name)){
		text.textContent = "*Please enter a valid name";
		text.style.display = "inline";
	}
	else {
	text.style.display = "none";
    if(score == ""){
      scoreval.textContent = "*Score field cannot be empty";
	  scoreval.style.display = "inline";
	}
	else if(isNaN(score)){
	  scoreval.textContent = "Score should be a number";
	  scoreval.style.display = "inline";
	}
	else{
		scoreval.style.display = "none";
	}
	if (name.trim() !== "" && !isNaN(parseFloat(score))) {
	names.push(name);
	scores.push(parseFloat(score));
	}
	$("name").value ="";
	$("score").value = "";
	
}
}
var displayResults = function() {   
	 var resultsDiv = $("results");
     while (resultsDiv.firstChild) {
	resultsDiv.removeChild(resultsDiv.firstChild);
    }    
	let sum = 0;
	let i = 0;
      for(i = 0;i<scores.length;i++) {
        sum = sum + parseFloat(scores[i]);
	  }
	  let average = parseFloat(sum/i);
	  
	  let newElement = document.createElement("p");
	  let highElement = document.createElement("p");
	  
	  let resElement = document.createElement("h2");
	  let max_val = Math.max(...scores);
	  let maxIndex = scores.indexOf(max_val);
	  
	  resElement.textContent = "Results";
	  newElement.textContent = `The average of scores is ${average}`;
	  highElement.textContent = `High Score = ${names[maxIndex]} with a score of ${max_val}`;
	  
	  $("results").appendChild(resElement);
	  $("results").appendChild(newElement);
	  $("results").appendChild(highElement);
	 
}

var displayScores = function(){

	let headVal = document.createElement("h2");
	headVal.textContent = "Scores";
	
	
	
	let scoresTable = $("scores_table");


	let table = document.createElement("table");
	let headerRow = table.insertRow(0);

	let nameHeader = headerRow.insertCell(0);
	nameHeader.textContent = "Name";
	nameHeader.id = "names1";

	let nameHeader2 = headerRow.insertCell(1);
	nameHeader2.textContent = "Score";
	nameHeader2.id = "scores1";

	for(let i = 0; i < names.length; i++){
		let row = table.insertRow(i+1);

		let nameCell = row.insertCell(0);
		nameCell.textContent = names [i];

		let scoreCell = row.insertCell(1);
		scoreCell.textContent = scores[i];
		
	}
	
	scoresTable.innerHTML = "";
	scoresTable.appendChild(headVal);
	scoresTable.appendChild(table);
}



window.onload = function () {
	$("add").onclick = addScore;
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
};


