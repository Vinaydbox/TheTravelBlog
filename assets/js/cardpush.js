cardTitle=document.getElementById("titlecard");
cardDescription=document.getElementById("desccard");

function getvals(){
    //get exisiting arr
    console.log("ADDDING")
    let titlearr=[]
    let descarr=[]
    if(localStorage.getItem('title')!=null){
        titlearr=JSON.parse(localStorage.getItem("title"));
        descarr=JSON.parse(localStorage.getItem("description"));
    }
    titlearr.push(cardTitle.value);
    descarr.push(cardDescription.value);
    localStorage.setItem("title",JSON.stringify(titlearr));
    localStorage.setItem("description",JSON.stringify(descarr));
}
var psh=document.getElementById("pushCard");
psh.addEventListener("click",function(){
    console.log("HERE");
    if(cardTitle.value!="" && cardDescription.value!="")
        getvals();
        alert("Service has been added successfully!!!")
})
