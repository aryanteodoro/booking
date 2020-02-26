function book(){

 

   var fname=document.getElementById("n1").value; 
   var lname=document.getElementById("n2").value;
   var gender=document.getElementById("n3").value;
   var email=document.getElementById("n4").value; 
   var origin=document.getElementById("n5").value; 
   var destination=document.getElementById("n6").value; 
   var departure=document.getElementById("n7").value;
   var balik=document.getElementById("n8").value;
   var re = /\S+@\S+\.\S+/;
   var check = 0; 

   if (fname == "" || lname == "" || gender == "" || email == "" || origin == "" || destination == "" || departure == ""|| balik ==""){
   alert("One or more fields are empty!");}

  else{
    check += 1;
    if(!re.test(email)){
      alert("Please enter a valid Email Address");
    }
    else{
      check += 1;
    }
    if (balik < departure){
      alert("Return date must not be later than your Departure date.");
    }
    else{
      check+=1;
    }
  }
  if (check == 3) {
    alert("Booking information has been set.");
  }

}