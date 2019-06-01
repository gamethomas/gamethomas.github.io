var coolheidsfactor = JSON.parse(localStorage.getItem('coolheidsfactor'));

function laden(){
    if(localStorage.getItem("coolheidsfactor") == 'undefined'){
    }else{
        coolheidsfactor = JSON.parse(localStorage.getItem('coolheidsfactor'));
        document.getElementById("getal").innerHTML = coolheidsfactor;
    }

    controleren();
}

function reset(){
    var reset = confirm("Ben je zeker dat je je voortgang wilt resetten? Dit zorgt ervoor dat je coolheidsfactor volledig terug op 0 komt te staan!");
    if(reset){
        localStorage.clear();
        location.reload();
    }
}

function tellen(){
    var audio = new Audio("../sounds/coin.mp3");
    audio.play();
    coolheidsfactor = coolheidsfactor + 1;
    localStorage.setItem('coolheidsfactor', JSON.stringify(coolheidsfactor));
    document.getElementById("getal").innerHTML = localStorage.getItem("coolheidsfactor");
    controleren();
}

function groter(){
    document.getElementById("clicker").style.width = "100px";
}

function kleiner(){
    document.getElementById("clicker").style.width = "70px";
}

function jumpdown(){
    document.getElementById("clicker").style.marginTop = "2%";
    document.getElementById("clicker").style.marginBottom = "2%";
}

function jumpup(){
    document.getElementById("clicker").style.marginTop = "1%";
    document.getElementById("clicker").style.marginBottom = "3%";
}

function controleren(){
    if (coolheidsfactor >= 100){
        var controleren = confirm("Wow, Jij bent echt te cool hiervoor :-), Laten we eens iets anders proberen");
        if(controleren){
        location.replace("https://websitethomas.github.io");
        }
    }
}