function handleBlur(){

  const userName = document.getElementById("txt").value;

  const firstChar = userName.charAt(0);
  const restChar = userName.substring(1);
  const sentence = firstChar.toUpperCase() + restChar.toLowerCase();
  
  document.getElementById("txt").value = sentence;
};