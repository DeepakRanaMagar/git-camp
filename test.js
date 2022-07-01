"use strict";

(function helloworld(){
    const name = "HI";
    let sum = 0;
    const b = 5;
    const a = 10;
    console.log(`Type of name ${typeof name}`);
    if( a % 2 === 0){
        console.log("EVEN");
    }else{
        console.log("ODD");
    }

    for (let i = 0; i< b; i++){
        console.log(`\n B itteration ${i}`);
    }   
}
)();
