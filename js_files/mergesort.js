const m_sort = document.getElementById("merge_sort");
// const size = 100;

m_sort.addEventListener('click',() => {
    if(m_sort.classList.contains('ative')){
        m_sort.classList.remove('active');
    }else{
        m_sort.classList.add('active');
       msort(0,size-1);
       // func1(0,func2);
       //printy();
    }
});

function waitforme(milisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec);
    })
}
 
// async function printy() {
//     for (let i = 0; i < 10; ++i) {
//         await waitforme(1000);
//         console.log(i);
//     }
//     console.log("Loop execution finished!)");
// }
 

async function msort(start,end){
  
     if(start<end){
         let mid = parseInt((start+end)/2);
            await msort(start,mid);
            await msort(mid+1,end);
            await merge(start,mid,end);
     }

}

async function merge(start,mid,end){
    var n1 = (mid-start+1);
    var n2 = (end-mid);
    var left = new Array(n1);
    var right = new Array(n2);
    var i = start;
    var j = mid+1;
    var k = 0;
    while(i<=mid){
        await waitforme(100);
        const ele = document.getElementById(`bar_${i}`);
        const height = ele.style.height;
        ele.style.background = "yellow";
        left[k] = height;
        k++;
        i++;
    }
    k = 0;
    while(j<=end){
        await waitforme(100);
        const ele = document.getElementById(`bar_${j}`);
        const height = ele.style.height;
        ele.style.background = "yellow";
        right[k] = height;
        k++;
        j++;
    }
    i = 0;
    j = 0;
    k = start;
    while(i<n1&&j<n2){
        await waitforme(500);
        const ele = document.getElementById(`bar_${k}`);
        const h1 = parseInt(left[i]);
        const h2 = parseInt(right[j]);
        if(h1<h2){
           ele.style.height = left[i];
           ele.style.background = ((n1+n2)==100)?"green":"lightgreen";
           i++;
        }else{
            ele.style.height = right[j];
            ele.style.background = ((n1+n2)==100)?"green":"lightgreen";
            j++;
        }
        k++;
    }
    while(i<n1){
        await waitforme(500);
        const ele = document.getElementById(`bar_${k}`);
        ele.style.height = left[i];
        ele.style.background = ((n1+n2)==100)?"green":"lightgreen";
        i++;
        k++;
    }
    while(j<n2){
        await waitforme(500);
        const ele = document.getElementById(`bar_${k}`);
        ele.style.height = right[j];
        ele.style.background = ((n1+n2)==100)?"green":"lightgreen";
        j++;
        k++;
    }
}



// async function merge(start,mid,end){
//    //  console.log(start+""+mid+""+end);
//     var arr1 = [];
//     var i = start;
//     var j = mid+1;
//     while(i<=mid&&j<=end){
//         const ele1 = document.getElementById(`bar_${i}`);

//         const ele2 = document.getElementById(`bar_${j}`);
//         const e1 = ele1.style.height;
//         const e2 = ele2.style.height;
//         var h1 = parseInt(e1.substring(0,e1.length-2));
//         var h2 = parseInt(e2.substring(0,e2.length-2));
//         if(h1<h2){
//             arr1.push(h1);
//             i++;
//         }else{
//             arr1.push(h2);
//             j++;
//         }

//     }
//     while(i<=mid){
//         const ele1 = document.getElementById(`bar_${i}`);
//         const e1 = ele1.style.height;
//         var h1 = parseInt(e1.substring(0,e1.length-2));
//         arr1.push(h1);
//         i++;
//     }
//     while(j<=end){
//         const ele2 = document.getElementById(`bar_${j}`);
//         const e2 = ele2.style.height;
//         var h2 = parseInt(e2.substring(0,e2.length-2));
//         arr1.push(h2);
//         j++;
//     }
      
//            i = start;
//            j = 0;
//            while(i<=end){
//                const ele = document.getElementById(`bar_${i}`);
//                ele.style.background = 'red';
//                await waitforme(10);
//                        console.log(`${arr1[j]}px`);
//                        const h = arr1[j];
//                       ele.style.height = `${h}px`;
//                       j++;
         
//                i++;
//                ele.style.background = 'green';
//            }
              
                
//  }


// const func1 = (start,func2) => {
//        if(start<5){
//         setTimeout(()=>{
       
//             console.log(`this is a fun1_${start}`);
//             func1(start+1,func2);
//             func2(start);
        
//         },5000)
//        }
 
     
      
// }
// const func2 = (i) => {
//     setTimeout(() => {
//         console.log(`this is func2_${i}`);
//     },2000)

// }
