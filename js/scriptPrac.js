
const RED = "RED";
const BLUE = "BLUE";
const YELLOW = "YELLOW";
const GREEN = "GREEN";

var simon = {
    sendColor: function(color){
        if(!simon.sequence.length){
            // start a new game
            simon.nextSequence();
        }
        else{
            if(color === simon.sequence[simon.step]){
                // go to next step
                if(simon.step === simon.sequence.length - 1){
                    console.log("sequence completed");
                    simon.step = 0;
                    simon.nextSequence();
                }else{
                    simon.step++;
                }
            }else{
                // lose condition
                alert("Wrong");
                simon.sequence = [];
                simon.step = 0;
            }
        }
        console.log("NEW COLOR: " + color);
    },
    sequence: [],
    colors: [RED, BLUE, YELLOW, GREEN],   
    step: 0,    
    nextSequence: function(){
        var nextColor = simon.colors[Math.floor(Math.random() * simon.colors.length)];
        //console.log("the random color is ", nextColor);
        simon.sequence.push(nextColor);
        console.log("the sequence ", simon.sequence);
    }
};

$(function(){
    $("#red").click(function(){
        simon.sendColor(RED);
    });
    $("#blue").click(function(){
        simon.sendColor(BLUE);
    });
    $("#yellow").click(function(){
        simon.sendColor(YELLOW);
    });
    $("#green").click(function(){
        simon.sendColor(GREEN);
    });
});