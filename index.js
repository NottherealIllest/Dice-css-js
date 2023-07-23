var num1  = Math.floor(Math.random()* 6 + 1)
var num2  = Math.floor(Math.random()* 6 + 1)
var num3  = Math.floor(Math.random()* 6 + 1)
var num4  = Math.floor(Math.random()* 6 + 1)


// function num () {
//    return Math.floor(Math.random()* 6 + 1)
//    console.log(num())
//     }
    
//     num();
    


document.querySelector("img.img1").setAttribute("src","images/dice"+num1+".png");
document.querySelector("img.img2").setAttribute("src","images/dice"+num2+".png");
document.querySelector("img.img3").setAttribute("src","images/dice"+num3+".png");
document.querySelector("img.img4").setAttribute("src","images/dice"+num4+".png");


function getWinner() {

    if (num1+ num2 > num3 + num4){
        document.querySelector("h1").innerHTML =  "Player 1 is the Winner !"
    } else if (num1+ num2 < num3 + num4) {
        document.querySelector("h1").innerHTML = "Player 2 is the Winner !"
    } else {
        document.querySelector("h1").innerHTML =  "Draw !"
    }


}

getWinner()