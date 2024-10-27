// let url = 'https://icanhazdadjoke.com';


// fetch(url, {
//     headers: {
//       "Accept": "application/json"  // Tells the API to return JSON
//     }
//   })
// .then((response) => {
//         return response.json();
// })
// .then((data) => {

//     console.log(data.joke);
//     return fatch(url); 
// })
// .then((response) => {
//     return response.json(); 
// })
// .then((data2) => {
//     console.log("data 2 :",data2);
// })
// .catch((err) =>{
//     console.log(err);
// })

// console.log("i am happy");

// async function getfacts() {
//     let res = await fetch(url,{  //asynchronous call complete thay aetle await aagal che 
//         headers :{
//             "Accept": "application/json"
//         }
//     })
//     let data = await res.json();
//     console.log(data.fact);
// }

//for cat api 

// let btn = document.querySelector("button");
// let config = {headers :{"Accept":"application/json"}}

// btn.addEventListener("click",async function(){
//     let res = await getfact();
//     console.log(res);
//     let p = document.querySelector("p");
//     p.innerText = res;
// });


// async function getfact(){
//     try{
//     let res = await axios.get(url,config)
//         return res.data.joke;
//     }
//     catch(e){
//         console.log("error - ",e);
//        return "NO FACT FOUND"
//     }
// }


// for dog api

// let url2 = "https://dog.ceo/api/breeds/image/random";

// let btn = document.querySelector("button");

// let img = document.querySelector("img");

// btn.addEventListener("click",async function(){
//     let link = await getimg();
//     console.log(link);
//     img.setAttribute("src",link);
// });

//     async function getimg(){
//         try{
//             let config = {headers :{"Accept":"application/json"}}
//             let res = await axios.get(url2,config)
//                     return res.data.message ;
//                 }
//                     catch(e){
//                         console.log("error - ",e);
//                         return "NO IMAGE FOUND"
//                         }
//                         }

let uniurl = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("#btn");

function show(colarr){
    let list = document.querySelector("#list");
    list.innerHTML = "";
    for(col of colarr){
        console.log(col.name);

        let li = document.createElement("li");
        li.textContent = col.name;
        list.appendChild(li);


    }
    }

    
btn.addEventListener("click", async () => {
    let name = document.querySelector("input").value;
    console.log(name);

    let colarr = await getuni(name); // Pass the name to the getuni function
    console.log(colarr);
    show(colarr);
});



async function getuni(name) {
   try {
       let res = await axios.get(uniurl + name);
       return res.data; // Return the actual data
   } 
   catch (e) { 
       console.log("Error:", e);
       return [];
   }
}
