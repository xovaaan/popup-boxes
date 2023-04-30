//  confirm
// function del(){
//   let value = confirm("Do you want to delete?");
//   if(value){
    // console.log("deleted");
//   }else{
    // console.log("Not Deleted");
//   }
// }
// del();

// prompt

function welmsg(){
    let header =document.createElement("h1");
    let text;
    let name = prompt("Write your name");
    if(name ==null || name == ""){
        text = "No name found";
    }else{
        text = "Welcome " + name;
    }
    let textNode = document.createTextNode(text);
    header.appendChild(textNode);
    document.body.appendChild(header);
}
welmsg();