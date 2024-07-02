let quot=document.getElementById("quot");
let auth=document.getElementById('auth');
let btn=document.getElementById("btn");

const url="http://localhost:4041";


let quotes=()=>{
    fetch(url).then((data)=>data.json())
    .then((item)=>{
        quot.innerHTML=item.quote;
        auth.innerText=item.author; 
        console.log(item);
    });
}

//window.addEventListener("load",quotes);
btn.addEventListener("click",quotes);