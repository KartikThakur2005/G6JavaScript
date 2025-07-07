//   function foo() {
//            let a = 10;
//            function fun() {
//              a++;
//              console.log(a);
//            } 

//          return fun();
//        }


// let help = foo();
// let f2 = foo();

// console.log(help)
// console.log(f2)




//   function cl() {
//          let store = []
           
//          return function mult(a){
//            if(store[a]) {
//               console.log("insde");
//                  return store[a];
//            }
           
//         console.log("calc")
//            return store[a] = a * 5;

//          }

// }


// let multi = cl();

// console.log(multi(2));
// console.log(multi(2));





        //   function sum(a) {
        //     return function(b) {
        //       return function(c) {
        //           // here this will have all argument becuase of clouser
        //           return a + b + c;
        //        }

        //      }
        // }          

        //  console.log(sum(1)(2)(3));


  
  //   function delay() {
  //      console.log("This is settimeOut");
  //   }
      
  //   setTimeout(delay, 1000);
  //   console.log("Bye");
  //  console.log("Bye");





  //  function one() {
  //   console.log("Inside the setIntervale");
  //  }


  //  setInterval(one, 1000);
// let setIntervaleOutput = setInterval(()=>{console.log("Return of setinterval")}, 1000);
// let setTimeoutOutput = setTimeout(()=>{console.log("Return of settimeout")}, 1000);

// console.log(setTimeoutOutput)
// console.log(setIntervaleOutput)

// clearInterval(setIntervaleOutput)
// clearTimeout(setTimeoutOutput)



//  How to make callback squential  but this is wrong method


// function starter() {
//    setTimeout(() => {
//       console.log("Served starter");
//       drinks();
//    }, 2000);
// }

// function drinks() {
//   setTimeout(()=>{
//     console.log("Drinjs served");
//   }, 1000);
// }


//  Example of call back help;

// function starter(callback) {
//   setTimeout(() => {
//     console.log("Starter served");
//     callback();
//   }, 1000);
// }

// function drinks(callback) {
//   setTimeout(() => {
//     console.log("Drinks served");
//     callback();
//   }, 1000);
// }

// function maincourse(callback) {
//   setTimeout(() => {
//     console.log("Main course served");
//     callback();
//   }, 1000);
// }

// function snacks(callback) {
//   setTimeout(() => {
//     console.log("Snacks served");
//     callback();
//   }, 1000);
// }

// // Callback Hell: nested callbacks
// starter(() => {
//   drinks(() => {
//     maincourse(() => {
//       snacks(() => {
//         console.log("All food served!");
//       });
//     });
//   });
// });











//  What are clouser ? 
// Answer : It is the process of binding the scode of parent fucntion to child function 

// function foo1() {
//    let x = 10;
    
//   return function foo2() {
//      x++;
//      console.log(x);
//    }
// }

// let helper = foo1();
// helper(); 



// function helper() {
//    let dp = [];

//   return function mult(a) {
//        if(dp[a]) {
//           console.log("inside dp");
//           return dp[a];
//        }

//        console.log("outside");
//        return dp[a] = a * 4;
    
//    }
// } 

// let hel = helper();

// console.log(hel(1));
// console.log(hel(2));

// console.log(hel(1));
// console.log(hel(2));





// function add(a) {
//   return (b) => {
//       return (c) =>{
//         return (d) =>{
//           return a + b + c + d;
//         }
//       }
//   }
// }

// console.log(add(1)(2)(3)(4))


// function help() {
//   console.log("I am running after 2 sec");
// }

// let a = setTimeout(help, 2000);
// console.log(a);


// let a = setInterval(help, 2000);
// console.log(a);

// clearInterval(a);



// setTimeout(()=>{console.log("Hello  ")
// },1000)

// setInterval(()=>{
//   console.log("Interval")
// }, 10)




// function foo1() {
//   console.log("helper");
//   foo2();
// }


// function foo2() {
//   console.log("help");
// }

// foo1();


// console.log("code start")

// var x = 10;
// console.log(x);

// function fun1() {
//   console.log("Insid 1")
//    return function fun2 () {
//       console.log("Inside 2");
//        return function fun3() {
//          console.log("Inside 3");
//        }
//    } 

   
// }
// let ans = fun1();
// console.log();






//  clouser exaample


// for(var i = 0; i < 6; i++) {
//   setTimeout(()=>{console.log(i)}, 2000);
// }

// var a = 0237;
// console.log(a);




// function sum(a, b) {
//   return a + b;
// }

// function high(logic, a, b) {
//   return logic(a, b);
// }

// console.log(sum( 1, 2));



// function  StudentDetails(name, fees) {
//       return function () {
//           return function() {
//              return `hi my name is ${name} and emi is ${fees / 10}`;
//           }
//       }
// }

// let calcEmi = StudentDetails("kartik", 200);
// let greeting = calcEmi();
// console.log(greeting());


// console.log("Start script");

// function checkMenu(cb) {
//   console.log("I am cheking menu");
//   setTimeout(cb, 3000);
// }


// function orderFood(cb) {
//     console.log("I am oder food");
//    setTimeout(cb, 1000);
// }

// function eating (cb) {
//   console.log("I am eating");
//   setTimeout(cb, 4000);
// }

// function exit() {
//   setTimeout(()=>{
//     console.log("I am exiting");
//   }, 1000);
// }


// checkMenu(()=>{
//   orderFood(()=>{
//     eating(()=>{
//       exit();
//     })
//   })
// })

// checkMenu(orderFood(eating(exit)))

// let userData = [ {name : "Kartik", age : 20} , {name : "Thakur", age : 19}, {name : "Gagan", age : 21}
// ]

// userData.map((obj) =>  {
//   if(obj.age >= 20) console.log(obj.name)
// }
// )


// let coll = userData.filter((obj)=> {
//    if(obj.age >= 20)return obj;
// })
// console.log(coll)


let obj = {
  name : "Kartik",
  Salary : 100000,
  work : "9 : 00 AM : 5 : 00 PM",
  
}

let myPromise = new Promise((resolve, reject) => {
  setTimeout(()=>{
    reject("It is reolved");
  }, 3000)
})

myPromise.then((res)=> console.log(res))
.catch((err)=> {console.log(err)})