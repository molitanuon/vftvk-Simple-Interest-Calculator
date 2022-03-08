function compute()
{
    var p = document.getElementById("principal");
    //Validation input for Principal
    if(p.value <= 0){
        alert("Enter a positive number.");
        document.getElementById("principal").focus();
        return false;
    }

    var principal = document.getElementById("principal").value;

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var amount = principal * years * rate / 100;
    //Convert year input to the actual year in the future 
    var year = new Date().getFullYear() + parseInt(years);
    //output the result to the browser
    document.getElementById("result").innerHTML="If you desposit <mark>" + 
        (principal)+ "</mark>,\<br\>at an interest rate of <mark>" + (rate)+
        "</mark>%\<br\>You will receive an amount of <mark>" + (amount)+ 
        "</mark>,\<br\> in the year <mark>" + (year) + "</mark>.\<br\>";

}

//fucntion that reads the value of the range slider and displays it 
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;

}

