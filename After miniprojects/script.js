// function savetodb(data,success,failure){
//     let internetspeed = Math.floor(Math.random() *10) +1;
//     if(internetspeed>4){
//         success();
//     }
//     else{
//         failure();
//     }
// }

// savetodb("i am meet", () => {
//     console.log("data saved successfully");
//     savetodb("success 2:ok",() => {
//         console.log("data2 saved successfully");
//     },
//     ()=>{
//         console.log("weak connection");
//     })
// },() => {
//     console.log("data not fetched");
// });

// function savetodb(data){

//     return new Promise((resolve,reject) => {
//     let internetspeed = Math.floor(Math.random() *10) +1;
//     if(internetspeed>4){
//         resolve("DATA WAS SAVED");
//         }
//         else{
//             reject("WEAK CONNECTION");
//             }
//     });   
// }


//wastage code 
// savetodb("meet paladiya") // req = promise object
//  .then(() => {
//     console.log("data 1");
//     savetodb("ok1").then(() => {
// console.log("data 2 saved");
//     }); 
// })

// .catch(() =>{
//     console.log("rejected");
// }) 



//new code 

// savetodb("meet paladiya") // req = promise object
//  .then((result) => {

//     console.log("data 1 saved");
//     console.log(result);
//     return savetodb("ok1");
//  })
//  .then((result) => {
// console.log("data 2 saved");
// console.log(result);
// return savetodb("just chill");
//     })
// .then((result) => {
//     console.log("data 3 saved");
//     console.log(result);

// }) 
// .catch((error) =>{
//     console.log("rejected");
//     console.log(error);
// });


// changing color with the use of promise 

// h1 = document.querySelector("h1");

// function changecolor(color,delay){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//            h1.style.color= color; 
//            resolve("color changed !");
//         }, delay);
//     });
// }


// changecolor("red",1000)
// .then(() => {
//     console.log("red is done");
//     return changecolor("blue",1000);
// })
// .then(() => {
//     console.log("blue is done");
//     return changecolor("green",1000);
// })
// .then(() => {
//     console.log("green is done");
//     })
// .catch(() => {
//     console.log("error is detected");
// })


//async and throw  

// async function greet() {
//     throw "404 Page not found";
//     return "hello!";
// }
// greet().then((result) => {
//     console.log("result was :",result);
//     console.log("promise was resolved");    
// })
// .catch((error) => {
//     console.log("error was :",error);
//     })  ;  // 404 Page not found


// let demo = async() => {
//     return 10;
// }

 h1 = document.querySelector("h1");

function changecolor(color,delay){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
        let num = Math.floor(Math.random()*6) +1;
        if(num>4){
            reject("num is not valid.");
        }  
           h1.style.color= color; 
           resolve("color changed !");
        }, delay)
    });
}
async function demo() {
    try{
    await changecolor("red",1000);
    await changecolor("green",1000);
    await changecolor("blue",1000);
    await changecolor("red",1000);
    } catch (err){
    let a = 8;
    console.log(a);
    console.log("new number :",a+4);
    }
}

