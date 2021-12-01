const maze = document.getElementById("maze");
const newmaze = document.getElementById("new_maze");

newmaze.addEventListener('click',()=>{
    const parent = document.getElementById("maze");
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
    createMaze();
})
const size = 5;
const s_cell = "#1d5693";
const e_cell = "#ffff2e";
const b_cell = "#c53030";
const c_cell = "white";
function createMaze(){
   for(let i=0;i<size;i++){
      let rowdiv = document.createElement("DIV");
      rowdiv.classList.add("maze-row");
       for(let j=0;j<size;j++){
          
           const currcell = document.createElement("DIV");
           currcell.classList.add("cell");
           currcell.setAttribute('id',`${i}_${j}`);
           
           if(i==0&&j==0){
               currcell.style.background = s_cell;
           }else if(i==size-1&&j==size-1){
               currcell.style.background = e_cell;
           }else{
               const temp = Math.floor(Math.random()*2);
               if(temp==1){
                  currcell.style.background = b_cell;
               }else{
                  currcell.style.background = c_cell;
               }
           }


           rowdiv.append(currcell);
       }
       document.getElementById("maze").append(rowdiv);
   }
}
createMaze();