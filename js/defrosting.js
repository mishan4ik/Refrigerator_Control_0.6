let btnDefrost = document.getElementById("btn_defrost");
let setTime = document.getElementById("inp_setTime");
let timeText = document.getElementById("time_defrost");
let infodefrost = document.getElementById("info_defrost");
let block_setTime = document.querySelector(".block_set_time")
let titleDoIt = document.querySelector(".title_doit");
let back = document.getElementById("btn_back")





let time;

let timer = () => {

    


    if(time== 0){

        infodefrost.innerHTML = "Розмаражування закінчено."
        timeText.innerHTML = ""

    }
    else{

        time--;
        timeText.innerHTML = time        


    }


}


btnDefrost.onclick = function(){

    setTime = document.getElementById("inp_setTime");

    time = setTime.value;
    block_setTime.style.display = "none";
    titleDoIt.style.display = "none"

    setInterval(timer,1000)
    

}

back.onclick = function(){

    window.location = "./index.html"

}