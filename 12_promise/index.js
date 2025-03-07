console.log("start");

const like = (channel, cb) => {
  setTimeout(() => {
    cb(`like ${channel}`);
  });
};

like("mr beast", (msg) => console.log(msg))

console.log("end");

//promises
console.log("promise start");

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if(true){
      resolve("fullfilled");
    }else{
      reject("rejected");
    }
  }, 1000)
});

promise
.then((res) => console.log(res))
.catch((err) => console.log(err));

console.log("promise end");

//promise chaining
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 3000)
})
.then(res => {
  console.log(res);
  return res * 2;
})
.then(res => {
  console.log(res);
  return res * 2;
})
.then(res => {
  console.log(res);
  return res * 2;
});

//promise all
const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    if(true){
      resolve("one resolved");
    }else{
      reject("one rejected")
    }
  }, 1000)
});
const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    if(true){
      resolve("second resolved");
    }else{
      reject("second rejected")
    }
  }, 1000)
});
const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    if(true){
      resolve("three resolved");
    }else{
      reject("three rejected")
    }
  }, 1000)
});

Promise.all([promiseOne, promiseTwo, promiseThree])
.then(res => console.log("all resolved", res))
.catch(err => console.log("all rejected", err))

//async await
const result = async () => {
  try {
    console.log("async await");
    await promiseOne;
    await promiseTwo;
    await promiseThree;
  } catch (error) {
    console.log(error);
  }
};
result();
