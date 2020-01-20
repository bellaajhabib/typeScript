function  callBack (n1: number, n2 : number,cb:(num:number,n2:number)=>void) {
    const result= n1+n2;
    const result2= n1-n2;

    cb(result,result2);

}

let myRes = 0;
let myRes2= 0;
callBack(20,12,(result,result2)=>{
    myRes=(result)*100;
    myRes2=(result2)*100;
});
console.log(myRes);
console.log(myRes2);