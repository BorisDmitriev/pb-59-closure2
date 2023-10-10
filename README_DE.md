# JS Closures / Scoping Übungen

Experimentiere mit den Codebeispielen; versuche zu verstehen, _warum_ sie so funktionieren, wie sie funktionieren.

## 1. Was ist das Ergebnis, wenn du diesen Code ausführst und warum?

  ```js
  console.log("Frage 1")
  function closureOne() {
     console.log(a);
     console.log(foo());

     const a = 1;
     function foo() {
        return 2;
     }
  }

  closureOne();
  ```

## 2. Was ist das Ergebnis?

  ```js
  console.log("Frage 2")
  let a = 1; 

  function closureTwo(number) {
    function inner(input) {
      return a;
    }

    a = 5;

    return inner;
  }

  let resultOfClosureTwo = closureTwo(9);
  let result = resultOfClosureTwo(2);
  ```

## 3. Was ist das Ergebnis des folgenden Codes? Erkläre deine Antwort.

  ```js
  console.log("Frage 3")
  const fullname = 'John Doe';
  let user = {
     fullname: 'Colin Ihrig',
     name: {
        fullname: 'Aurelio De Rosa',
        getFullname: function() {
           return this.fullname;
        }
     }
  };
  console.log(user.name.getFullname());

  let test = user.name.getFullname;
  console.log(test());
  ```

## 4. Was siehst du in der Konsole für das folgende Beispiel?

  ```js
  console.log("Frage 4")
  let interesting = 1; 
  function doSomeStuff() { 
      interesting = 10; 
      return; 
      function interesting() {} 
  } 
  doSomeStuff(); 
  console.log(interesting);
  ```
