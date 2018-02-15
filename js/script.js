
    $(function () {
        userSeq = [];
        simonSeq = [];
        var id;
        var color;
        var level = 0;
        var boardSound = [
            "https://www.soundjay.com/button/button-1.mp3",
            "https://www.soundjay.com/button/button-2.mp3",
            "https://www.soundjay.com/button/button-3.mp3",
            "https://www.soundjay.com/button/button-4.mp3" //blue
        ];
        $("#start").click(function () {
            level++;
            startSequence();
        });
        //simon sequence
        function startSequence() {
            $("#timer").text(level);
            getRandomNum();
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
        }
        //generate random number
        function getRandomNum() {
            var random = Math.floor(Math.random() * 4);
            simonSeq.push(random);
        }
        function addClassSound() {
            $("#" + id).addClass(color + "-click");
            playSound();
            
            setTimeOut(function () {
                $("#" + id).removeClass(color + "-click");
            }, 500);
        }
        function playSound(id) {
        }
    });

