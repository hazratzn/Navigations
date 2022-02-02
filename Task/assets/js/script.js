let closeBtn =document.getElementById("close-btn");
let openBtn =document.getElementById("open-btn");
let sidebar = document.querySelector(".sidebar");

closeBtn.addEventListener("click",function(){
    sidebar.classList.add("close")
})
openBtn.addEventListener("click", function(){
    sidebar.classList.remove("close")
})