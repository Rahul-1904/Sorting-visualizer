const i_sort = document.getElementById("insertion_sort");
// const size = 100;


i_sort.addEventListener('click',() => {
     if(i_sort.classList.contains('active')){
         
         i_sort.classList.remove('active');
     }else{
         i_sort.classList.add('active');
         isort();
     }
});



async function isort(){
   
    document.getElementById(`bar_${0}`).style.background = "green";
   for(let i=1;i<size&&i_sort.classList.contains('active');i++){
      let j = i-1;
      const ele1 = document.getElementById(`bar_${i}`);
      const h1 = parseInt(ele1.style.height);
      
      const ele2 = document.getElementById(`bar_${j}`);
      let h2 = parseInt(ele2.style.height);
      while(j>=0&&h2>h1&&i_sort.classList.contains('active')){
        const ele = document.getElementById(`bar_${j+1}`);
      
        ele.style.background = "red";
         await new Promise(resolve => {
             setTimeout(() => {
                // const ele = document.getElementById(`bar_${j+1}`);
                ele.style.height = `${h2}px`;
                
                resolve();
             }, 2000);
         });
        
         ele.style.background = "green";
         j--;
         if(j>=0){
         h2 = parseInt(document.getElementById(`bar_${j}`).style.height);
         }
          
      }
      const ele = document.getElementById(`bar_${j+1}`);
      
      ele.style.background = "red";
       await new Promise(resolve => {
           setTimeout(() => {
              // const ele = document.getElementById(`bar_${j+1}`);
              ele.style.height = `${h1}px`;
              
              resolve();
           }, 2000);
       });
      
       ele.style.background = "green";
    
   }
}