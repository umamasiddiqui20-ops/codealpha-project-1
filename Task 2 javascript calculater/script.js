let inputResult=document.getElementById("inputResult")
let save=document.getElementById("save")
const prec=["+","-","*","/","%","+-"]
const isOp= (t) => "+-*/%".includes(t);
function setnumber(num){
  inputResult.value += num;
}
function clc(){
  inputResult.value="";
  save.value="";
}
function del(){
  inputResult.value=inputResult.value.slice(0,-1);
}
function getResult(){
  var expression=inputResult.value;
  save.value=expression;
  try {
    inputResult.value = eval(expression);
  }
  catch {
    inputResult.value = "Error";
  }
  console.log("Save value:", save.value);
  console.log("Result:", inputResult.value);
}

