function handleSubmit(){
  const age = document.getElementById("age").value;
  
  document.write("you will be " + (parseInt(age) + 1) + " next year");
  // document.write("you will be " + (Number(age) + 1) + " next year");

  const a = "10ab";
  const b = "cd10ab";
  
  console.log(parseInt(a));
  console.log(parseInt(b));//Nan
};