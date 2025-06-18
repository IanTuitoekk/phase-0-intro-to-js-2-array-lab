// Write your solution here!
const cats=["Milo","Otis","Garfield"];
function destructivelyAppendCat(name){
    cats.push("Ralph");
}
function destructivelyPrependCat(name){
    cats.unshift("Bob");
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function appendCat(name){
    cats.slice(3,0,"Pop");
}
function appendCat(name){
    const wCats=[...cats,name];
    return wCats;
}
function prependCat(name){
    const noCats=[name,...cats];
    return noCats;
}
function removeFirstCat(){
    const nCats=cats.slice(1);
    return nCats;
}
function removeLastCat(){
    const opCats=cats.slice(0,-1);
    return opCats;
}

console.log(appendCat("Puta"))