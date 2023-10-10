// Aufgabe 1
console.log("Question 1")
function closureOne() {
   console.log(a);
   console.log(foo());

   const a = 1;
   function foo() {
      return 2;
   }
}
closureOne();
// The result:  
// Cannot access 'a' before initialization 


// Aufgabe 2
console.log("Question 2")
let a = 1;
function closureTwo(number) {
  function inner(input) {
    return a;
  }
  a = 5;
  return inner;
}
const resultOfClosureTwo = closureTwo(9);
const result = resultOfClosureTwo(2);
console.log(result);
// Result:
// 5
// inner function has access to a variable a, which is definde in lexical scope



// Aufgabe 3
console.log("Question 3")
const fullname = 'John Doe';
const user = {
   fullname: 'Colin Ihrig',
   name: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};
console.log(user.name.getFullname());

const test = user.name.getFullname;
console.log(test());
// Result:
// first result: 'Aurelio De Rosa'
// second result: undefinded there is no this in the context fo the test() function


// Aufgabe 4
console.log("Question 4")
let interesting = 1; 
function doSomeStuff() { 
    interesting = 10; 
    return; 
    function interesting() {} 
} 
doSomeStuff(); 
console.log(interesting);

// result is 1, because of the global scope. Inner variable interesting is not visible outside of the doSomeStuff() function;