let count=0;


const value=document.querySelector("#value");
const btns= document.querySelectorAll(".btn");
  
btns.forEach(function (btn){
btn.addEventListener("click",function(e){

     const styles=e.currentTarget.classList;
    //  console.log(styles)
    
    // console.log("helli wihf ")

    if (styles.contains("decrease")){
        count--;
    }
    else if(styles.contains("increase")){
        count++;

    }
    else{
        count=0;
    }
    value.textContent=count;
    if(count>0){
        value.style.color="#88FF33";
    }
    if (count<0){
        value.style.color="#581845";
    }
    if(count==0){
        value.style.color="#FFC300";
    }


})
    
});