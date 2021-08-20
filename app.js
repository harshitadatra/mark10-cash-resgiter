const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const showMessage = document.querySelector("#message");
const notesArray = [2000, 500, 100, 20, 10, 5, 1];
const noOfNotes = document.querySelectorAll(".noteCounter");
 checkButton.addEventListener("click",function clickHandler()
 {
    //  console.log("clicked");
     
     if(billAmount.value> 0)
    {  
        // console.log(billAmount.value);
        
        hideMessage();

        // console.log(cashGiven.value);
        if(parseInt(cashGiven.value) >= parseInt(billAmount.value))
        {
            // first i  gave class and it does not have value
        const cashRemaining = parseInt(cashGiven.value)-parseInt(billAmount.value);
        amountToBeReturned(cashRemaining);
        //  console.log(cashRemaining);
        // showMessage.innerText ="do you wanna wash plates"
        // displayMessage("do you wanna wash plates");

 
        }
        
        else{
            // console.log("else part");
            // showMessage.style.display="block";
            displayMessage("do you wanna wash plates");
        }
 
}
    else{
        displayMessage(`enter the amount value greater than zero`)
    }
});
function hideMessage()
{
    showMessage.style.display= "none";
}
    
     function displayMessage(msg)
    {
        console.log("here");
        showMessage.style.display = "block";
        showMessage.innerText = msg;

    }
    function amountToBeReturned(money)
    {
   for(let i=0;i<notesArray.length;i++)
   {
    const numberOfNotes = Math.trunc(money/notesArray[i]);

    money = money % notesArray[i];
    noOfNotes[i].innerText = numberOfNotes;
    }
    }  

