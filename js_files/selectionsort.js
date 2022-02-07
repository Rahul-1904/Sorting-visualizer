const s_sort = document.getElementById("Selection_sort");
const size = 100;
//console.log(s_sort);

s_sort.addEventListener('click',() => {
    if(s_sort.classList.contains('active')){
        s_sort.classList.remove('active');
    }else{
        s_sort.classList.add('active');
        ssort();
    }
});

async function ssort(){
    
   for(let i=0;i<size&&s_sort.classList.contains("active");i++){
       let min = i;
       const curr_ele = document.getElementById(`bar_${i}`);
       let min_height = parseInt(curr_ele.style.height);
       curr_ele.style.background = "red";
       for(let j=i+1;j<size&&s_sort.classList.contains("active");j++){
           const temp_ele = document.getElementById(`bar_${j}`);
           let c_height = parseInt(temp_ele.style.height);
           if(c_height<min_height){
              
               min_height = c_height;
               min = j;
           }
       }
       if(min!=i){
           const min_ele = document.getElementById(`bar_${min}`);
           const curr_height = parseInt(curr_ele.style.height);
           min_ele.style.background = "blue";
           await new Promise(resolve => {
                    setTimeout(() => {
                        curr_ele.style.height = `${min_height}px`;
                        min_ele.style.height = `${curr_height}px`;
                        resolve();
                    }, 2000);
           });
           min_ele.style.background = "coral";
       }
       curr_ele.style.background = "green";
   }

}
