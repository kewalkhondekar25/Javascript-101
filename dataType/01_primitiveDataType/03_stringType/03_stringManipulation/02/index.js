function handleBlur(){
  
  const userName = document.getElementById("txt").value;
  const msg = document.getElementById("msg");

  const firstChar = userName.charCodeAt(0);
  if(firstChar >= 65 && firstChar <= 90){
    msg.innerHTML = "User Verified".fontcolor("green");
  }else{
    msg.innerHTML = "User Name must be capitalize".fontcolor("red");
  }
  
} ;
//A - 65 - 90