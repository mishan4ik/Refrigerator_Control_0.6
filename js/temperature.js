let degreesInfo = document.getElementById("degrees");
let addTemp = document.querySelector(".block_plus")
let minTemp = document.querySelector(".block_minus")
let back = document.getElementById("btn_back");
let degree = 4;
let degree1 = "o";
degreesInfo.innerHTML = degree + degree1.sup(); 
degreesInfo.style.color = "#f2c249"


addTemp.onclick = function(){

    degree++;
    degreesInfo.innerHTML = degree + degree1.sup();
    localStorage.setItem("degree",degree)
    if(degree >= 1){

        degreesInfo.style.color = "#f2c249"

    }
    if(degree >= 10){

        degreesInfo.style.color = "#d99c1a"

    }



}

minTemp.onclick = function(){

    if(degree <= 10){

        degreesInfo.style.color = "#f2c249"

    }
    if(degree <= 1){

        degreesInfo.style.color = "#2575e6"

    }



    degree--
    degreesInfo.innerHTML = degree + degree1.sup();
    localStorage.setItem("degree",degree)

}
back.onclick = function(){

    window.location = "./index.html"

}


