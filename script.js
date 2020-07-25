var colors = ColorGenerator(6);

var squares = document.querySelectorAll(".square");
var pickedColor = colors[Math.floor(Math.random()*colors.length)];
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset")
var h1 = document.querySelector("h1");
var modeBtn = document.querySelectorAll(".mode");
var scoreDisplay = document.getElementById("scoreDisplay")



for(var i=0; i<modeBtn.length; i++)
{
    modeBtn[i].addEventListener("click",function(){
        scoreDisplay.textContent="0";
        modeBtn[0].classList.remove("selected");
        modeBtn[1].classList.remove("selected");
        this.classList.add("selected");

        if(this.textContent==="Easy")
        {
            numberofSquares=3
        }
        else
        {
            numberofSquares=6;
        }
        reset();

    })

}

function reset()
{
    colors = ColorGenerator(numberofSquares);
    pickedColor = colors[Math.floor(Math.random()*colors.length)];

    colorDisplay.textContent=pickedColor;
    messageDisplay.textContent="";
    resetButton.textContent="New Colors"

    for(var i=0; i<squares.length;i++)
    {
        if(colors[i])
        {
            squares[i].style.display="block";
            squares[i].style.backgroundColor = colors[i];
        }
        else
        {
            squares[i].style.display="none"
        }

        squares[i].style.backgroundColor = colors[i];
    }

    h1.style.backgroundColor = "royalblue"
}




colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click", function(){
     reset()
})


for (var i=0; i<squares.length; i++)
{
    squares[i].style.backgroundColor = colors[i]


    //adds click listener
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;

        if(clickedColor === pickedColor)
        {
            h1.style.backgroundColor=clickedColor;
            messageDisplay.textContent="You Won!"
            resetButton.textContent="Wanna play again??"
            scoreDisplay.textContent++;
            changeColors(clickedColor)
        }
        else
        {
            this.style.backgroundColor="#303030";
            scoreDisplay.textContent--;
            messageDisplay.textContent="Try Again";
        }
    })
 }


 function changeColors(color)
 {
     for(var i=0; i<colors.length; i++)
     {
         squares[i].style.backgroundColor = color;
     }
 }


 function ColorGenerator(number)
 {
     var array = [];

     for(var i=0; i<number; i++)
     {
        array.push(randomColor())
     }

     return array;

 }

 function randomColor()
 {
     var red = Math.floor(Math.random()*256);
     var green= Math.floor(Math.random()*256);
     var blue = Math.floor(Math.random()*256);

     //rgb(255, 0, 0)

     return "rgb(" + red + ", " + green + ", " + blue + ")"

 }
