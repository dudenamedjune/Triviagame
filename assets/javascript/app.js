//object for trivia game data
var trivia = {

	"qnum": 0,
	"time": 30,
	//key questions and list of object inside questions fot question  answer and choices to display
	"questions": [{"q": "What is Krieger's first name?", "a": 2, "choices": [ "Doctor Nuvogn", "Kevin", "Doctor Algernop", "Nuroburgen"]}, 
					{"q": "What is Sterling Archer's codename?", "a": 3, "choices": ["Shamus", "Roger", "007", "Duchess"]}, 
					{"q": "What is Babou?", "a": 1, "choices": ["THe martini Archer drank on his hiatus to mexico", "Cheryl's pet ocelot", "Pam's pet snake", "Lana's homeland"] }, 
					{"q": "Patrick Warburton provides the voice of which former ISIS agent in Season 3?", "a": 0, "choices": ["Rip Riley", "Jonah Hill", "John Ham", "TJ Miller"]}, 
					{"q": "In which state was Ray Gillette born and raised?", "a": 0, "choices": ["West Virginia", "Kansas", "North Dakota", "Arkansas"]},
					{"q": "Who is the head of ODIN and possibly Archer's father?", "a": 2, "choices": ["Ron Cadillac", "Barry", "Len Trexler", "Woodhouse"]},
					{"q": "Who is the biological father of Archer's son Seamus?", "a": 1, "choices" : ["Ray Gillette", "Cyril Figgis", "Woodhouse", "Kenny Loggins"]}],

};

$(document).ready(function(){

 $("#startbtn").on("click", startgame);

	//$("#target").html("<h2>" + trivia.questions[0].q + "</h2>");
	var wins = 0;
	var losses = 0;




	//object passed in t
	function startgame(){
		$("#time").html(trivia.time);
		starttime = setInterval(time, 1000);
		time();
		var question = $("#target").html("<h2>" + trivia.questions[trivia.qnum].q + "</h2>");
		showquestion = setInterval(nextquestion, 34000);
		choices();

	};

	//displays next quesiton 
	function nextquestion(){
		  
  if (trivia.qnum < trivia.questions.length - 1) {
  			trivia.qnum ++;
			clearInterval(showquestion);
			reset();
			$("#target").html("<h2>" + trivia.questions[trivia.qnum].q + "</h2>");
			choices();
		}else{ 

			$("#target").html("<h2> You answered " + wins + " correct and " + losses + " incorrect. </h2>");
			trivia.time = 30;
			trivia.qnum = 0;
			losses = 0;
			wins = 0;
			clearInterval(showquestion);
			clearInterval(starttime);

			restart();
			

	}
  };
  
	//displays choices by itteratting threw i in list 
	function choices(){
		for(i in trivia.questions[trivia.qnum].choices){
			var ansbtn = $("<button>").addClass("btn").attr('data-choice', i).text(trivia.questions[trivia.qnum].choices[i]);
			$("#target").append(ansbtn);
			$("#target").append("<br><br>");
	
			};
			compare();
		};	
	function time(){
		trivia.time--;
		$("#time").html(trivia.time);
		if (trivia.time === 0){
			$("#target").html("<h1>" + "Do you want ants, because that's how you get ants!" + "</h1>");
			clearInterval(showquestion);
			setTimeout(nextquestion, 3000);
			losses ++;

		}
	};

	function compare(){
		$(".btn").on("click", function(){
			if($(this).data("choice") === trivia.questions[trivia.qnum].a){ 
				$("#target").html("<h1>" + "You got the right answer!" + "</h1>");
				setTimeout(nextquestion, 3000);
				wins ++;
				

			 }else{
			 	$("#target").html("<h1>" + "Are you related to Figgis?" + "</h1>");
			 	setTimeout(nextquestion, 3000);
			 	losses ++;

			 };



			

		});
	};

	function reset(){
		trivia.time = 30;
	};

	function restart(){
		$("#target").append("<button id= 'restart'>" + "Restart" + "</button>");
		$("#restart").on("click", function(){
			startgame();


		});
	};

	

});


