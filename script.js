function compute()
{
    // p = document.getElementById("principal").value;
    var principal = document.getElementById("principal").value;

    //Validation input for Principal
    if(principal <= 0){
        alert("Enter a positive number.");
        principal.focus();
        return false;
    }

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var amount = principal * years * rate / 100;
    //Convert year input to the actual year in the future 
    var year = new Date().getFullYear() + parseInt(years);
    //output the result to the browser
    document.getElementById("result").innerHTML="If you desposit " + principal + ",\<br\>at an interest rate of " + rate + "%\<br\>You will receive an amount of " + amount + ",\<br\> in the year " + year + ".\<br\>";

}

//fucntion that reads the value of the range slider and displays it 
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;

}
