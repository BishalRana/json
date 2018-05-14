/* ----------------------------------------------------------------------------------------
	THIS IS MY JAVASCRIPT FILE FOR THE LUXURY CAR JSON AND AJAX PRACTICE

---------------------------------------------------------------------------------------- */


var manufacturer = document.getElementById("manufacturer");
manufacturer.addEventListener("change",loadData);
function loadData(){
    console.log();
    var req = new XMLHttpRequest();//browser build-in object
    req.open("GET","https://raw.githubusercontent.com/BishalRana/json/master/expensiveLuxuryCars.json",true);
    req.onload = function(){
        
        if(req.readyState == 4 && req.status == 200){
            //parsing our data once the page is ready
            var myData = JSON.parse(req.responseText);
            var hideText = document.getElementsByClassName("data");                   
            var manufacturerType = manufacturer.options[manufacturer.selectedIndex].value;
            var textNumber;
            if(manufacturerType === ""){
                for(textNumber = 0;textNumber<hideText.length;textNumber++){
                    hideText[textNumber].innerHTML = "";
                }
            }else{
            
                    document.getElementById("manufacturerC").innerHTML = 
                    myData.data[manufacturerType].manufacturer;

                    document.getElementById("modelC").innerHTML = 
                    myData.data[manufacturerType].model;

                    document.getElementById("priceC").innerHTML = 
                    myData.data[manufacturerType].price;

                    document.getElementById("descriptionC").innerHTML = 
                    myData.data[manufacturerType].description;

                    document.getElementById("videoC").innerHTML = '<iframe width="auto" height="auto" src='+myData.data[manufacturerType].video+' frameborder="0" allowfullscreen></iframe>';


                    document.getElementById("imgC").innerHTML = '<image src='+myData.data[manufacturerType].img+' alt="carImage"/>';
                                  
            }
           
        }else{
            document.getElementById("messageAlert").innerHTML = "We successfully connected to the server however, there is an ERROR";            
        }
    }
     
    req.send();    
}









