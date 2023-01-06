


 var addBtn = document.getElementById("add");
 var meter = document.getElementsByTagName("meter")[0];
 var currentInp = document.getElementById("current");
 var totalInp = document.getElementById("total");
 var subBtn = document.getElementById("sub");
   
 


 addBtn.addEventListener("click", () =>{
  
var curVal = currentInp.value;
console.log(curVal);
    meter.setAttribute("min",0);
    meter.setAttribute("max",totalInp.value);
    meter.setAttribute("value",curVal);

    currentInp.value =parseInt(curVal) + 1;


})




    subBtn.addEventListener("click", () =>{
  
        var curVal = currentInp.value;
        console.log(curVal);
            meter.setAttribute("min",0);
            meter.setAttribute("max",totalInp.value);
            meter.setAttribute("value",curVal);
        
            currentInp.value = parseInt(curVal) - 1;
        
        
        })