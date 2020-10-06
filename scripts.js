function submit() {
    let submitButton = document.getElementById("submitButton").innerHTML;

    let Atotal = document.getElementById("Atotal").innerHTML;
  
    let Quizes = document.getElementById("Quizes").value;
    let Midterm = document.getElementById("Midterm").value;
    let FinalTest = document.getElementById("FinalTest").value;
    let Oral = document.getElementById("Oral").value;
  
  
  
    let ttl =  Quizes + Midterm + FinalTest + Oral;
  
    if (ttl >= 90) {

      document.getElementById("Atotal").innerHTML = "A";
      
    }
     else if (ttl >= 80) {

      document.getElementById("Atotal").innerHTML = "B";
   
    } 
    else if (ttl>= 70) {

      document.getElementById("Atotal").innerHTML = "C";
    } 
    else if (ttl >= 60) {

      document.getElementById("Atotal").innerHTML = "D";
    
    } 
    else document.getElementById("Atotal").innerHTML = "F";
  }