const newarray = document.getElementById("new_array");

newarray.addEventListener('click',() => {
    const parent = document.getElementById("bars");
    const b_sort = document.getElementById("bubble_sort");
    const s_sort = document.getElementById("Selection_sort");
    const i_sort = document.getElementById("insertion_sort");
    const m_sort = document.getElementById("merge_sort");
    const q_sort = document.getElementById("quick_sort");

    b_sort.classList.remove("active");
    s_sort.classList.remove("active");
    i_sort.classList.remove("active");
    m_sort.classList.remove("active");
    q_sort.classList.remove("active");
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
     createBars();
})
function createBars(){
const arraysize = 100;
const maxwidth = 200;
var arr = [];
for(var i=0;i<arraysize;i++){
    var currheight = Math.floor(Math.random()*300);
    var currwidth = maxwidth/arraysize;
    var currdiv = document.createElement("DIV");
    currdiv.classList.add("bars-ele");
    currdiv.setAttribute('id',`bar_${i}`);
    currdiv.style.width = `${currwidth}px`;
    currdiv.style.height = `${currheight}px`;
    document.getElementById("bars").append(currdiv);
    console.log(arr);
    arr.push(currheight);
}
}
createBars();

