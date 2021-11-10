var num1 = +prompt( "1 - sonni kiriting")
var num2 = +prompt( "2 - sonni kiriting")
var num3 = +prompt( "3 - sonni kiriting")

if (num1 < num2 || num1 > num2 && num1 > num3 ||num1 < num3 ){
    alert("O'rta qiymat " + num1    )
}
else if (num2 < num1 || num2 > num1 && num2< num3 || num2 > num3 ){
    alert("O'rta qiymat " + num2    )
}
else if (num3 < num2 || num3 > num2 && num3 > num1 || num3 < num1 ){
    alert("O'rta qiymat " + num3)
}
else{
    alert("yorvordiz brat yorvordiz")
}