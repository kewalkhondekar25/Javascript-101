const user1 = {
  name: "will",
  score: 0,
  increment: function(){
    return user1.score++;
  }
};

console.log(user1.increment());
