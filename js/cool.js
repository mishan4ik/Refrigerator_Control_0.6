
let timeText = document.getElementById("time_cool");
let info_cooling = document.getElementById("info_cool");
let btn_cooling = document.getElementById("btn_cooling");
let dynamic = document.getElementById("temperature_dynamic");
let back = document.getElementById("btn_back");

let time = 20;
let degree = "o";
let temp = 4;

timeText.innerHTML = time
dynamic.innerHTML = temp + degree.sup()


function temperature(){

    if(temp == 2){
  
        dynamic.innerHTML = temp + degree.sup();
    
    }
    else{
    
        temp--;
        dynamic.innerHTML = temp + degree.sup();
        
        
    
    
    }


}


function timer () {

    if(time == 0){
  
        info_cooling.innerHTML = "Режим вимкнено. Температура знижена на 2 градуси"    
    
    }
    else{
    
        time--;
        timeText.innerHTML = time
        
        
    
    
    }



}

btn_cooling.onclick = function(){

   
    setInterval(timer,1000)
    setInterval(temperature,10000)

}

back.onclick = function(){

    window.location = "./index.html"

}
