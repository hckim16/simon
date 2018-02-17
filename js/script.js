
   userSeq = [];
   simonSeq = [];
   const NUM_OF_LEVELS = 2;
   var id;
   var color;
   var level = 0;
   var boardSound = [
     "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3",
     "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3",
     "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3",
     "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"
   ];
   
   $(function() {
     $(".switchContainer2").hide();
     $(".inside-switch").click(function() {
       $(".switchContainer").hide();
       $(".switchContainer2").show();
       
       $(".outside-switch2").click(function(){
         $(".switchContainer2").hide();
         $(".switchContainer").show();
         location.reload(true);
       })
   
       $("#start").click(function() {
         level++;
         simonSequence();
       });
   
       $(".pad").click(function() {
         id = $(this).attr("id");
         color = $(this).attr("class").split(" ")[1];
         userSeq.push(id);
         console.log(id + " " + color);
         addClassSound(id, color);
         if (!checkUserSeq()) {
           displayError();
           userSeq = [];
         }
         if (userSeq.length == simonSeq.length && userSeq.length < NUM_OF_LEVELS) {
           level++;
           userSeq = [];
           simonSequence();
         }
         if (userSeq.length == NUM_OF_LEVELS) {
           displayWinner();
         }
       });
     });
   });
   
   function checkUserSeq() {
     for (var i = 0; i < userSeq.length; i++) {
       if (userSeq[i] != simonSeq[i]) {
         return false;
       }
     }
     return true;
   }
   
   function displayError() {
     console.log("error");
     var counter = 0;
     var myError = setInterval(function() {
       $("#timer").text("Err");
       counter++;
       if (counter == 3) {
         $("#timer").text(level);
         clearInterval(myError);
         userSeq = [];
         counter = 0;
       }
     }, 500);
   }
   
   function simonSequence() {
     console.log(level);
     $("#timer").text(level);
     getRandomNum();
     var i = 0;
     var myInterval = setInterval(function() {
       id = simonSeq[i];
       color = $("#" + id).attr("class").split(" ")[1];
       console.log(id + " " + color);
       addClassSound(id, color);
       i++;
       if (i == simonSeq.length) {
         clearInterval(myInterval);
       }
     }, 1000);
   }
   
   function getRandomNum() {
     var random = Math.floor(Math.random() * 4);
     simonSeq.push(random);
   }
   
   function addClassSound(id, color) {
     $("#" + id).addClass(color + "-click");
     playSound(id);
     setTimeout(function() {
       $("#" + id).removeClass(color + "-click");
     }, 500);
   }
   
   function playSound(id) {
     var sound = new Audio(boardSound[id]);
     sound.play();
   }
   
   function displayWinner() {
     var count = 0;
     var winInterval = setInterval(function() { 
       count++;
       $("#timer").text("Win");
       if(count == 5) {
         clearInterval(winInterval);
         $("#timer").text("--");
         count = 0;
       }
     }, 500);
     userSeq = [];
     simonSeq = [];
     level = 0;
   }
   
   