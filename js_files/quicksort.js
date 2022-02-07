function waitforme(milisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec);
    })
}
const delay = 10;
async function partitionLomuto(ele, l, r){
    console.log('In partitionLomuto()');
    let i = l - 1;
    // color pivot element
    ele[r].style.background = 'red';
    for(let j = l; j <= r - 1; j++){
        console.log('In partitionLomuto for j');
        // color current element
        ele[j].style.background = 'yellow';
        // pauseChamp
        await waitforme(delay);

        if(parseInt(ele[j].style.height) < parseInt(ele[r].style.height)){
          
            i++;

            await new Promise(resolve => {
                setTimeout(() => {
                    const temp = ele[i].style.height;
                    ele[i].style.height = ele[j].style.height;
                    ele[j].style.height = temp;
                  resolve();
                }, 20);
              });
            // color 
            ele[i].style.background = 'orange';
            if(i != j) ele[j].style.background = 'pink';
            // pauseChamp
            await waitforme(delay);
        }
        else{
            // color if not less than pivot
            ele[j].style.background = 'pink';
        }
    }
    i++; 

    await waitforme(delay);

    await new Promise(resolve => {
        setTimeout(() => {
            const temp = ele[i].style.height;
            ele[i].style.height = ele[r].style.height;
            ele[r].style.height = temp;
          resolve();
        }, 20);
      });
 
    ele[r].style.background = 'pink';
    ele[i].style.background = 'lightgreen';

    await waitforme(delay);
    
  
    for(let k = 0; k < ele.length; k++){
        if(ele[k].style.background != 'lightgreen')
            ele[k].style.background = 'coral';
    }

    return i;
}

async function quickSort(ele, l, r){

    if(l < r){
        let pivot_index = await partitionLomuto(ele, l, r);
        await quickSort(ele, l, pivot_index - 1);
        await quickSort(ele, pivot_index + 1, r);
    }
    else{
        if(l >= 0 && r >= 0 && l <ele.length && r <ele.length){
            ele[r].style.background = 'green';
            ele[l].style.background = 'green';
        }
    }
}


const quickSortbtn = document.getElementById("quick_sort");
quickSortbtn.addEventListener('click', async function(){
    let ele = document.querySelectorAll('.bars-ele');
    let l = 0;
    let r = ele.length - 1;
   
    await quickSort(ele, l, r);
    for(var i=0;i<=r;i++){
        ele[i].style.background = "green";
    }
});