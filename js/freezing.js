let timeText = document.getElementById("time_freezing");
let info_freezing = document.getElementById("info_freezing");
let btn_freezing = document.getElementById("btn_freezing");
let back = document.getElementById("btn_back");
let dynamic = document.getElementById("temperature_dynamic");

let time = 30;
let degree = "o";
let temp = -18 

dynamic.innerHTML = temp + degree.sup();

timeText.innerHTML = time

function temperature(){

    if(temp == -24){
  
        dynamic.innerHTML = temp + degree.sup();
    
    }
    else{
    
        temp--;
        dynamic.innerHTML = temp + degree.sup();
        
        
    
    
    }


}


function timer () {

    if(time == 0){
  
        info_freezing.innerHTML = "Режим вимкнено. Температура -24 градуси"
    
    }
    else{
    
        time--;
        timeText.innerHTML = time
        
        
    
    
    }



}

btn_freezing.onclick = function(){

   
    setInterval(timer,1000)
    setInterval(temperature,5000)

}



back.onclick = function(){

    window.location = "./index.html"

}
