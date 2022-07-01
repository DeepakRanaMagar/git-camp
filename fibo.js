//Fibonacci series up to nth term 
function func1(n){
    if(n<2){
        return n;
    }else{
        return (func1(n-1)+func1(n-2));
    }
}

for(let i = 0; i<10; i++){
    console.log(func1(i));
}



