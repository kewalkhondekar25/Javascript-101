function handleBlur(){
  
  const email = document.getElementById("txt").value;
  const msg = document.getElementById("msg");
  console.log(email.indexOf("@"));
  console.log(email.lastIndexOf("k"));  //return last occurance index

  if(email.indexOf("@") < 3){
    msg.innerHTML = "Invalid Email".fontcolor("red");
  }else{
    msg.innerHTML = "Email Verified".fontcolor("green");
  }

};