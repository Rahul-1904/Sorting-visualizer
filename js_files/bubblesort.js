const b_sort = document.getElementById("bubble_sort");
b_sort.addEventListener('click',() => {
    if(b_sort.classList.contains("active")){
      b_sort.classList.remove("active");
    }else{
      b_sort.classList.add("active");
      bsort();
    }
    
})
async function bsort(){
const arraysize = 100;
  for(var i=0;i<arraysize&&b_sort.classList.contains("active");i++){
    for(var j=0;j<arraysize-i-1&&b_sort.classList.contains("active");j++){

        const ele1 = document.getElementById(`bar_${j}`);
        ele1.style.background = "red";
        const height1 = ele1.style.height;
        const h1 = parseInt(height1.substring(0,height1.length-2));
        const ele2 = document.getElementById(`bar_${j+1}`);
        ele2.style.background = "red";
        const height2 = ele2.style.height;
        const h2 = parseInt(height2.substring(0,height2.length-2));

        if(h1>h2){
          
         
            await new Promise(resolve => {
              setTimeout(() => {
                ele2.style.height = `${h1}px`;
                ele1.style.height = `${h2}px`; 
                resolve();
              }, 20);
            });
            
           
        }else{
          await new Promise(resolve => {
            setTimeout(() => {
              ele2.style.height = `${h2}px`;
              ele1.style.height = `${h1}px`; 
              resolve();
            }, 20);
          });
        }
        ele2.style.background = "coral";
        ele1.style.background = "coral";
    }
   const ele = document.getElementById(`bar_${arraysize-i-1}`);
   ele.style.background = "green";
  }
}





