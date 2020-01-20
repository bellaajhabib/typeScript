button = document.querySelector('button')!;

function clickHandler(message :string){
    console.log(message);
    return message;
}

let logged:string="habib";
if(button){
    button.addEventListener('click',clickHandler.bind(this,logged));
}
// console.log(button);
// button.addEventListener('click',()=>{
// console.log("this");
// })

// let logged;
//
// function sendAnalytics (data: string) {
//
//     console.log(data);
//     logged = true;
// }
// sendAnalytics('The data');