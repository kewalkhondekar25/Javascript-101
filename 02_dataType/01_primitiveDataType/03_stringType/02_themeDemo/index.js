function handleToggle(){

  const container = document.getElementById("theme-container");
  const themeBtn = document.getElementById("toggle");
  
  if(themeBtn.checked){
    container.className = "dark";
  }else{
    container.className = "light"
  };

};