
(function () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    
    
    var byeSpeaker ={
        
        speak : function(bye){
            console.log("Good Bye" + ' '+ bye);
        }
        
    };
    
var helloSpeaker = {
    speak : function(hello){
        
        console.log("Hello" + ' ' + hello );
    }
};

for (var i = 0; i < names.length; i++) {
 var firstLetter = names[i].charAt(0).toLowerCase();
  if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}

})();