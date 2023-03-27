const  bar=document.getElementById('bar');
const nav=document.getElementById('navbar')
// add tthe button click
if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active')
    })
}

const  close=document.getElementById('close');
//remove the button
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active')
    })
}
