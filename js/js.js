let input =document.querySelector("input");
let btnadd =document.getElementById("btnadd");
let alert1 =document.querySelector("#alert1");
let alert2 =document.querySelector("#alert2");
let alert3 =document.querySelector("#alert3");
let divalert =document.querySelector("#divalert");
let ss =document.querySelector(".ss");
let clos2=document.querySelector(".clos2");
let zz=document.querySelector(".zz");
let ff=document.querySelector(".ff");
let btntask=document.querySelector(".btntask");
let  modal=document.querySelector(".modal");
 let xx =document.querySelector(".xx");
 let yy =document.querySelector(".yy");
 let qq=document.querySelector(".qq");
 let btnlight =document.querySelector(".btn-light");
 let all =document.querySelector(".alll");
//  btnlight.onclick=function(){
//      all.classList.toggle("light");
//  }
// let li =()=>{
//     if(all.classList[0==("")])
//     // all.classList.toggle('light');
// // if(btnlight.)
//     // btnlight.innerHTML=`<button type="button" class="btn btn-dark">Dark</button>`
//     // btnlight.style.background="black";
//     // btnlight.classList.toggle=" btn-dark";
// }
 

 let oo=()=>{
    alert2.classList.toggle("none");
}
yy.addEventListener("click", oo);

let pp=()=>{
    alert3.classList.toggle("none");
}
qq.addEventListener("click", pp);

 let xz=()=>{
    alert1.classList.toggle("none");
}
xx.addEventListener("click", xz);




let show=()=>{
    modal.classList.toggle("block");
}
btntask.addEventListener("click", show);




let add =()=>{
    if(input.value.length==0){
        alert1.classList.remove("none"); 
        alert3.classList.add("none"); 
        alert2.classList.add("none"); 
         
    }
    else if(input.value.length<3){
        alert2.classList.remove("none");
        alert1.classList.add("none"); 
        alert3.classList.add("none"); 
        input.value="";
         
     }
     else if(input.value.length>20){
        alert3.classList.remove("none"); 
        alert2.classList.add("none"); 
        alert1.classList.add("none");
        input.value="";  
     }

else{
    divalert.classList.add("none"); 
    alert3.classList.add("none"); 
    alert2.classList.add("none"); 
    alert1.classList.add("none");
    
     let x=input.value;
     ss.innerHTML+= `<div class="alert alert-info dee " role="alert"> 
  ${x} 
  <button type="button" class="btn btn-danger delete "><i class="fas fa-trash-alt"></i></button>
   </div>`
  
  
   input.value="";
   show();
  
}
}


// let nodata = () => {
//     if(ss.children.length==1){
//         divalert.classList.remove("none"); 
//     }
// }
let nodata = () => {
    if(ss.childElementCount==1){
        document.querySelector("#divalert").style.display="block";
    }
}

document.addEventListener('click',function(e) {
    if(e.target.classList.contains('delete'))
    {
        e.target.parentElement.remove();
        nodata();
        
        
    }
});

document.addEventListener('click',function(t) {
    if(t.target.classList.contains('dee'))
    {
        t.target.classList.toggle("touch");
        bghcgcfgbvghbn

        nodata();
        
        
    }
});







btnadd.addEventListener('click', add)
// console.dir(document.querySelector(".ss"));