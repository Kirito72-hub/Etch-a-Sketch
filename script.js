// used querySelector here with .container cuz the selectClassByName get me array and that dosnt work with append appendChiled
const container = document.querySelector(".container");

//animation for hovering and pressing the button
const btn = document.getElementById("btn");
btn.addEventListener("mouseover", (event)=>{
    event.target.style.background = "grey";
});
btn.addEventListener("mouseout", (event)=>{
    event.target.style.background = "white";
});
btn.addEventListener("mousedown", (event)=>{
    event.target.style.transform = "scale(0.95)";
});
btn.addEventListener("mouseup", (event)=>{
    event.target.style.transform = "scale(1)";
});

//randomize color to use
function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
  } 


// for loop that write 16x16 box and give them class name and add them to the main container which is in html file
function makeGrid(input){
    // Clear existing boxes before creating a new grid
    container.innerHTML = ''; // Clear previous grid

    // Set the grid template based on the input size
    container.style.gridTemplateColumns = `repeat(${input}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${input}, 1fr)`;

    for(let i=0; i<input; i++){
        for(let j=0; j<input; j++){
            const box = document.createElement("div");
            box.classList.add("box");
            // Mouse over event to change color to red
            box.addEventListener("mouseover", (event) => {
            event.target.style.background = randomColor();
        });
        container.appendChild(box);
        }

    }
}

//onClick effect for the button that strt the creating boxes function
btn.onclick = function(){
    const value = prompt("enter grid number less than 100 ?");
    if(value<=100 && value>0)
        makeGrid(value);
    else
        alert("Please enter a value between 1-100 !");
};