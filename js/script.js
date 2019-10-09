// function insert(value) {
//     document.getElementById("output-value").innerHTML += value;
// }
function operator(operator) {
    var getNumber = document.getElementById("enter");
    switch(operator) {
        case '-':
            getNumber.innerHTML += '-';
        break;
        case '+':
            getNumber.innerHTML += '+';
        break;
        case '*':
            getNumber.innerHTML += '*';
        break;
        case '/':
            getNumber.innerHTML += '/';
        break;
        case '%':
            getNumber.innerHTML += '%';
        break;
    }
 }
 function number(number) {
    var getNumber = document.getElementById("enter");
    switch(number) {
        case 1:
            getNumber.innerHTML += 1;
            break;
        case 2:
            getNumber.innerHTML += 2;
            break;
        case 3:
            getNumber.innerHTML += 3;
            break;
        case 4:
            getNumber.innerHTML += 4;
            break;
        case 5:
            getNumber.innerHTML += 5;
            break;
        case 6:
            getNumber.innerHTML += 6;
            break;
        case 7:
            getNumber.innerHTML += 7;
            break;
        case 8:
            getNumber.innerHTML += 8;
            break;
        case 9:
            getNumber.innerHTML += 9;
            break;
        case 0:
            getNumber.innerHTML += 0;
            break;
        
    }
}


function clean() {
    document.getElementById("enter").innerHTML = "";
}
function backspace() {
    var back = document.getElementById("enter").innerHTML;
    document.getElementById("enter").innerHTML = back.substring(0,back.length-1);
}
function culculator() {
    var culculator = document.getElementById("enter").innerHTML;
   if(culculator) {
    document.getElementById('output-value').innerHTML = "="+ eval(culculator);
    document.getElementById('history-value').innerHTML = culculator +"="+ eval(culculator);
   }
}



var userSpeak = document.getElementById("microphone");
var sound = document.getElementById("enter");
var getSound = () => {
    if('webkitSpeechRecognition' in window ) {
        let speak = new webkitSpeechRecognition();
        speak.continuous = true;
        speak.interimResults = true;
        speak.lang = "en-IN";
        speak.start();

        let finalSpeak = '';
        speak.onresult = function(even) {
            let interimTranscript = '';
            for (let i = event.resultIndex; i < event.results.length; i++) {
                let transcripts = event.results[i][0].transcript;
                    transcripts.replace("\n", "<br>");
                    if(event.results[i].isFinal) {
                        finalSpeak += transcripts;
                }else {
                    interimTranscript +=transcripts;
                }
            }
            sound.innerHTML = finalSpeak + interimTranscript;
            var culculator = () => {
               if(sound.innerHTML) {
                document.getElementById("output-value").innerHTML = "="+ eval(sound.innerHTML);
                document.getElementById("history-value").innerHTML = sound.innerHTML +"="+ eval(sound.innerHTML);
               }
            }
            setInterval(culculator, 2000);
        }
    }else {
        sound.innerHTML = "Browser not support";
    }
}
userSpeak.addEventListener('click', getSound);
