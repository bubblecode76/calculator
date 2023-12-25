let val1="";
let last="";
let operatorValue="";
let currentOperator="";
let a=0,b=undefined;
let isOperatorPresent=false;
let lastOperation=document.getElementById('lastOperation');

function num(value){
    if(operatorValue=='='){
        last="";
        val1="";
        a=0;
        b=undefined;
        isOperatorPresent=false;
    }
    val1=val1+value;
    document.getElementById('currentVal').innerHTML=val1;
    last=last+value;
    if(isOperatorPresent==true && last!="")
       b=parseInt(val1);
    else
       a=parseInt(val1);
    console.log(a);
    console.log(b);
    lastOperation.innerHTML=last;
}

function operator(value){
    if(b!=undefined && isOperatorPresent==false){

    }
    currentOperator=value;
    last=last + " " + currentOperator + " ";
    lastOperation.innerHTML=last;
    val1="";
    isOperatorPresent=true;
    if(b!=undefined)
      solve(operatorValue,currentOperator);
    operatorValue=currentOperator;
}


function solve(value,currentValueCopy){
    let solution=0;
    if(value=='+'){
        solution=a+b;
    }
    if(value=='-'){
        solution=a-b;
    }
    if(value=='X'){
        solution=a*b;
    }
    if(value=='/'){
        solution=(a/b);
    }
    if(value=='%'){
        solution=(a % b);
    }
    if(value=='^'){
        solution=(a ** b);
    }
    a=solution;
    b=undefined;
    if(currentValueCopy!='=')
       last=solution + " " + currentValueCopy + " ";
    else 
       last=solution + " ";
    lastOperation.innerHTML=last;
    document.getElementById('currentVal').innerHTML=a;
}