function sendMessage() {
    let input = document.getElementById("userInput").value;
    
    if (input == "") {
        alert("THERE IS NOT TEXT");
    }
     else 
    {
        document.getElementById("messages").innerHTML = document.getElementById("messages").innerHTML + "<p><b>You:</b> " + input + "</p>";
        
        document.getElementById("messages").innerHTML = document.getElementById("messages").innerHTML + "<p><b>Bot:</b> You said " + input + "</p>";
        
        document.getElementById("userInput").value = "";
    }
}