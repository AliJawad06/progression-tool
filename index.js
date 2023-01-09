


 var addBtn = document.getElementById("add");
 var meter = document.getElementsByTagName("meter")[0];
 var currentInp = document.getElementById("current");
 var totalInp = document.getElementById("total");

 var subBtn = document.getElementById("sub");
 var list = [] 
 var startBtn = document.getElementById("start");

 var time = document.getElementById("time"); 
 var seconds = 0;

var seconds2 = 0; 
var avg = document.getElementById("avg");
 

   
 


 addBtn.addEventListener("click", () =>{
  
    var curVal = currentInp.value;
    console.log(curVal);
    meter.setAttribute("min",0);
    meter.setAttribute("max",totalInp.value);
    meter.setAttribute("value",curVal);
    
    
    currentInp.value = parseInt(curVal) + 1;

    list.push(seconds2);

   var Secetc =  list.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      )*(totalInp.value-currentInp.value)/(list.length);

      var seconds = Secetc % 60; 
      var minutes = Math.floor(Secetc/60)
      avg.innerHTML = ("00" + ":" + minutes.toString() + ":" + seconds.toString())

    
})


function template(seconds){

    var minutes = 0; 
var hours = 0;
    if(seconds==60){
        minutes=minutes+1;
        seconds=0;
    }
    if(minutes==60){
        hours=hours+1;
        minutes=0;

    }
    const time =  (hours.toString() + ":" + minutes.toString() + ":" + seconds.toString())
    return(time)
}
    startBtn.addEventListener("click", ()=>{
        setInterval(()=>{
            seconds = seconds + 1;
            seconds2++;
            time.innerHTML = template(seconds);
            

        },1000)
    })





    subBtn.addEventListener("click", () =>{
  
        var curVal = currentInp.value;
        console.log(curVal);
            meter.setAttribute("min",0);
            meter.setAttribute("max",totalInp.value);
            meter.setAttribute("value",curVal);
        
            currentInp.value = parseInt(curVal) - 1;
      
        
        
        
        
        })