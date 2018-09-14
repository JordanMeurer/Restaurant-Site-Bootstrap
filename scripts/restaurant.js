function validate(){
    
    var name = document.forms["inputs"]["firstName"].value;
    var email = document.forms["inputs"]["email"].value;
    var phone = document.forms["inputs"]["phone"].value;
    var reason = document.forms["inputs"]["reason"].value;
    var days = document.getElementsByName('day');
    
    for(var i = 0; i < days.length; i++){
        if(days[i].checked == true)
            break;
        if(days[i].value == "F"){
            alert("Please select a day");
            return false;
        }
    }
    
    
    if(name == ""){
        alert("Please insert a name");
        return false;
    }
    
    if(email == ""){
        alert("Please insert a email");
        return false;
    }
    
        if(phone == ""){
        alert("Please insert a phone");
        return false;
    }
    
    if(document.getElementById("choice1").checked == false && document.getElementById("choice2").checked == false){
        alert("Have you visited the restaurant before?");
        return false;
    }
    
}