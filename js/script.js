
    userSeq = [];
    simonSeq = [0, 2, 1];
    const NUM_OF_LEVELS = 3;
    var id;
    var color;
    var level = 0;
    var boardSound = [
        "https://www.soundjay.com/button/button-1.mp3",
        "https://www.soundjay.com/button/button-2.mp3",
        "https://www.soundjay.com/button/button-3.mp3",
        "https://www.soundjay.com/button/button-4.mp3" 
    ];
    
    $(function () {
       
        $("#start").click(function () {
            level++;
            simonSequence();
        });

        $(".pad").click(function(){
            id = $(this).attr("id");
            color = $(this).attr("class").split(" ")[1];
            userSeq.push(i);
            addClassSound(id, color);
            if(!checkUserSeq()){
                displayErr();
                userSeq = [];
            }
            if(userSeq.length == simonSeq.length && userSeq < NUM_OF_LEVELS){
                level++;
                userSeq = [];
                simonSequence();
            }
            if(userSeq.length == NUM_OF_LEVELS){
                $(".timer").text("Win");
            }
        });

        
    });

    function checkUserSeq(){
        for(var i = 0; i < userSeq.legnth; i++){
            if(userSeq[i] != simonSeq[i]){
                return false;
            }
        }
        return true;
    };

    function displayErr(){
        var counter = 0;
        var myError = setInterval(function(){
            $(".timer").text("Err");
            counter++;
            if(counter == 3){
                $(".timer").text(level);
                clearInterval(myError);
                userSeq = [];
                counter = 0;
            }
        }, 500);
    };
    //simon sequence
    function simonSequence() {
        $("#timer").text(level);
        //getRandomNum();
        var i = 0;
        var myInterval = setInterval(function () {
            id = simonSeq[i];
            color = $("#" + id).attr("class").split(" ")[1];
            addClassSound(id, color);
            i++;
            if (i == simonSeq.length) {
                clearInterval(myInterval);
            }
        }, 1000);
    };
    //generate random number
    function getRandomNum() {
        var random = Math.floor(Math.random() * 4);
        simonSeq.push(random);
    };
    function addClassSound() {
        $("#" + id).addClass(color + "-click");
        playSound();
        setTimeOut(function () {
            $("#" + id).removeClass(color + "-click");
        }, 500);
    };
    function playSound(id) {
        var sound = new Audio(boardSound[id]);
        sound.play();
    };
