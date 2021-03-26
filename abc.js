function call(){
    // alert(document.querySelector("intput").press)

    alert(document.querySelector("input").value);
    document.querySelector("input").style.color="green";

}
function fibo(){
// program to generate fibonacci series up to a certain number

// take input from the user
const number = parseInt(prompt('Enter a positive number: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');
console.log(n1); // print 0
console.log(n2); // print 1

nextTerm = n1 + n2;

while (nextTerm <= number) {

    // print the next term
    console.log(nextTerm);

    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
}
}
// function fibo(){
//     let sum =0;
//     let num1=0, num2=1;
//     let count = document.querySelector("input").value;
//     for (let i = 0; i < count; i++) {
//         sum=num1+num2;
//         num1=num2;
//         num2=sum;
        
//     }
//     document.querySelector("#output").innerHTML=sum;
// }
function addNote() {
    let note=document.querySelector("input").value;
    let numberItem=document.querySelectorAll("li").length;
    document.querySelector("ul").innerHTML+='<li><button onclick="done('+numberItem+')">Done</button>'+note +'</li>';
    
}
function done(numberItem){
    let item=document.querySelectorAll("li")[numberItem];
    item.children[0].remove();
    let text=item.innerHTML;
    item.innerHTML="<del>"+text+"</del>";
}