type Combine = number| string;

function combine(input1: Combine , input2: Combine,resultConverstion: 'as-number'|'as-text'){
    let result;
    if(typeof input1 === 'number' && typeof input2 ==="number" || resultConverstion==="as-number"){
        result=+input1+ +input2;
    }else {
        result = input1.toString() + input2.toString();
    }
    return  result;
}
console.log(combine("A","A6",'as-text'));