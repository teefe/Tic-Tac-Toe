// const calculator = (function(){
//     const add = (a, b) => a + b;
//     const sub = (a, b) => a - b;
//     const mul = (a, b) => a * b;
//     const div = (a, b) => a / b;
//     return {
//       add,
//       sub,
//       mul,
//       div,
//     };
//   })();
  
//   calculator.add(3,5); 
//   calculator.sub(6,2);
//   calculator.mul(14,5534);

const player_x = (function(){
    const selection = document.querySelector('.Player-x')
    let playSymbol = "X"
})();

const player_o = (function(){
  const selection = document.querySelector('.Player-o')
  let playSymbol = "O"
})();

const Game = (function(){
  return{

  }
})();
var playSelection = function(choice){
  return document.querySelector(`.${choice}`)
} 
  


playSelection("one").addEventListener("click",()=>{
  playSelection('one').textContent = "X"

})