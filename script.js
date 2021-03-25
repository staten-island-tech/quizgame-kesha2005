var questions = [

    { 
    prompt: "What color are oranges? \n(a) Red/Green\n\
    (b) Purple\n(c) Orange",
    
    answer: "a"

    },

    {
     prompt: "What Polical Party do you support?\n(a) Democratic/n/(b) Republican/n",

     answer: "c"
    }
]
var score = 0;

for(var i=0; i < questions.length; i++){ 
    var response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer){ 
        score++; 
        alert("CORRECT!");
    } else { 
       alert("WRONG!");


    }
}
    alert("you got " + score + "/" + questions.length)





