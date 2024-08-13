// used querySelector here with .container cuz the selectClassByName get me array and that dosnt work with append appendChiled
const container = document.querySelector(".container");
// for loop that write 16x16 box and give them class name and add them to the main container which is in html file
for(let i=0; i<256; i++){
    const box = document.createElement("div");
    box.className = "box";
    container.appendChild(box);
}