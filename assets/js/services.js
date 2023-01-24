let container=document.querySelector("#cardSection");
function renderCard(titl,desc)
{
    return (`
    <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
        <div class="icon-box">
            <div class="icon"><i class="bx bx-file"></i></div>
            <h4><a href="">${titl}</a></h4>
            <p>${desc}</p>
        </div>
    </div>
    `)
}
titles=JSON.parse(localStorage.getItem("title"));
desc=JSON.parse(localStorage.getItem("description"));
for(i=0;i<titles.length;i++){
    title = titles[i];
    console.log(desc[i]);
    des =desc[i];
    
    let x=renderCard(title,desc);
    console.log("HERE");
    container.innerHTML+=x;
}