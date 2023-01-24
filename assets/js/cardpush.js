cardTitle=document.getElementById("titlecard");
cardDescription=document.getElementById("desccard");

function getvals(){
    //get exisiting arr
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
var psh=document.getElementById("push");
psh.addEventListener("click",function(){
    if(cardTitle.value!="" && cardDescription.value!="")
        getvals();
})
