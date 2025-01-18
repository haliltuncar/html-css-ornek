
const bar = document.getElementById("bar");
const pick = document.querySelector(".contieners");
const picks = document.getElementById("all-contiener");
const body = document.getElementsByTagName("body");
  
bar.addEventListener("click" , () => {
    pick.style.display="none";
    picks.classList.add("tested");
    document.querySelector(".tested").innerHTML = "<ul><li><a href='denemes.html'>AnaSayfa</a></li><li><a>Yapılcak</a></li><li><a>Yapılcak</a></li><li><a>Yapılcak</a></li></ul>";
});