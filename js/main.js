const navbar = document.querySelector(".navbar__collection")

function toggleShow (){
    navbar.classList.toggle("show")
}
const block__wrapper = document.querySelector("block__wrapper"),
persent = document.querySelector("#persent");



let perVal = 0;


let  increament = setInterval(()=> {
    perVal++
    persent.textContent = `${perVal} %`;
   if(perVal == 100){
    clearInterval(increament);
    block__wrapper.classList.remove("activ");
   }
}, 100);


const formOpenBtn = document.querySelector("#form-open"),
home = document.querySelector("#home"),
formBtr = document.querySelector("#form"),
closeBtn = document.querySelector("#close"),
signupBtn = document.querySelector("#signup"),
loginpBtn = document.querySelector("#signup"),
pwSHowHideBtn = document.querySelector("#pw_hide");
formOpenBtn.addEventListener("click", () => home.classList.add("show"))
closeBtn.addEventListener("click", () => home.classList.remove("show"))





// {
//     // 1. "janob " va "xonim" manosini qoshib qaytaring
//     const mrMs = [
//         {
//             name: "akmal",
//             gender: "male",
//         },
//         {
//             name: "Laylo",
//             gender: "female",
//         },
//         {
//             name: "Ozod",
//             gender: "male",
//         },
//         {
//             name: "aisha",
//             gender: "female",
//         }
//     ]
//     for(let value of mrMs){
//         if(value.gender === "male"){
//             console.log(`janob ${value.name}`);
//         }else{
//             console.log(`xonim ${value.name}`);
//         }
//     }
// }
// {     
//     // 2 masalani  1ishlanishi

//     function card(num, bool){
//     if (bool === false) {
//         num = num.slice(0, 4) + "*******" ;
//       }
//       console.log(num);
//     }
    
//     console.log( card("29381209809123", false));
// }

// {
//     // 2 Agar 2 argument false bolsa carta raqami yashirilsin aks holda aksi
//  const mrMs = [
//     {
//         karta: "9860 6974 6574 3534",
//         yopiq: true
//     },
//     {
//         karta: "9860 **** **** **34",
//         yopiq: false
//     },
//     {
//         karta: "9860 6974 6574 3534",
//         yopiq: true
//     },
//     {
//         karta: "9860 **** **** **34",
//         yopiq: false
//     },
//  ]
//  for(let value of mrMs){
//     if(value.yopiq === false){
//         console.log(value.karta);
//     }
//  }
// }
// {
//     // 3. premetirini qaytaradigan funciya tuzing
//     function foo(a, b){
//         let = sum = 0
//         for(let i = 0, len = foo.length; i <= len; i++){
//           if(sum= 2 * (a + b)){
//             console.log(`2 * (${a} + ${b}) = ${sum}`);
//           }
//         }
//     }
//     console.log(foo(6, 6));
// }
// {
//     // 4 1 birinchi korinishi
//     const returnTrueFalse = (str) => str==="Ha" ? console.log(true) : console.log(false);
//     returnTrueFalse()

//   console.log(returnTrueFalse("Ha"));
//   console.log(returnTrueFalse("Yo'q"));
//   console.log(returnTrueFalse("Salom"));
// }

// {
//     // 4."ha" ga true, "yoq" ga false qaytaring
//     const yesNo = [
//         {
//             name:"ha",
//             no: true
//         },
//         {
//             name:"yoq",
//             no: false
//         },
//     ]
//     for(let value of yesNo){
//         if(value.no === true){
//             console.log(value.name);
//         }else{
//             console.log(value.name);
//         }
//     }
// }
// {
//     // 5 masla
//    function foo(n){
//     console.log(n.replace(n, `+${n}`));
//    }
//    console.log(foo("998990091621", ));
// }
// {
//     // 6 masla
//     {
//         const greeting = () =>  "Hello world";
    
//     console.log(greeting())
//     }
    
// }
{
    // 7 masala
    const foo = (str) =>
      str === "light" ? console.log("dark") : console.log("light");
    foo();
  
    console.log(foo("light"));
    // console.log(haYoq("dark"));
  }