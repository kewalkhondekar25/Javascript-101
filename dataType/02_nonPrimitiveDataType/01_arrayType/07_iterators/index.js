const arr = [100, 200, 300, 400, 500];

//for - in
for(const prop in arr){
  console.log(prop);  // 0, 1, 2, 3, 4
}

//for - of
for(const val of arr){
  console.log(val); // 100, 200, 300, 400, 500
}

//combine
for(const prop in arr){
  console.log(`prop: ${prop}, val: ${arr[prop]}`);  
  //prop: 0, val: 100, prop: 1, val: 200, prop: 2, val: 300, prop: 3, val: 400, prop: 4, val: 500
};
