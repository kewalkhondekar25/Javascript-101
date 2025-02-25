function handleSubmit(){
  const userName = document.getElementById("txt").value;
  const msg = document.getElementById("msg");

  if(userName.length >= 3 && userName.length <= 10){
    msg.innerHTML = "user name verified".bold().fontcolor("green");
  }else{
    msg.innerHTML = "Invalid user name".bold().fontcolor("red");
  }
};

function handleBlur(){
  const userName = document.getElementById("txt").value;
  document.getElementById("txt").value = userName.toUpperCase();
}