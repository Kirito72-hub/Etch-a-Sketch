// used querySelector here with .container cuz the selectClassByName get me array and that dosnt work with append appendChiled
const container = document.querySelector(".container");

//adding button to the top of the page
const btn = document.querySelector(".btn");
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


// for loop that write 16x16 box and give them class name and add them to the main container which is in html file
for(let i=0; i<256; i++){
    const box = document.createElement("div");
    box.classList.add("box");
      // Mouse over event to change color to red
      box.addEventListener("mouseover", (event) => {
        event.target.style.background = "red";
    });

    // Mouse out event to change color back to aqua
    box.addEventListener("mouseout", (event) => {
        event.target.style.background = "aqua"; // Reset to original color
    });
    container.appendChild(box);
}
//add button using DOM
//buton on press function
//pop up that gets integer smaller than 100
//recreate the grid to suit the new grid inputted by the user 

