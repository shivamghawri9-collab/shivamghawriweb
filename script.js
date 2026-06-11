const topBtn = document.getElementById("topBtn");

window.onscroll = function() {
  
  if (document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200) {
    
    topBtn.style.display = "block";
    
  } else {
    
    topBtn.style.display = "none";
    
  }
  
};

topBtn.onclick = function() {
  
  window.scrollTo({
    
    top: 0,
    
    behavior: "smooth"
    
  });
  
};
const currentPage =
  window.location.pathname.split("/").pop();

const links =
  document.querySelectorAll(".nav-links a");

links.forEach(link => {
  
  if (link.getAttribute("href") === currentPage) {
    
    link.classList.add("active");
    
  }
  
});
const cards =
  document.querySelectorAll(".card");

const observer =
  new IntersectionObserver(entries => {
    
    entries.forEach(entry => {
      
      if (entry.isIntersecting) {
        
        entry.target.classList.add("show");
        
      }
      
    });
    
  });

cards.forEach(card => {
  
  observer.observe(card);
  
});
const themeToggle =
  document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  
  document.body.classList.toggle("light-mode");
  
  if (document.body.classList.contains("light-mode")) {
    
    themeToggle.innerHTML = "☀️";
    
  } else {
    
    themeToggle.innerHTML = "🌙";
    
  }
  
});
function toggleMenu(){

const menu =
document.querySelector(".nav-links");

menu.classList.toggle("show");

}
const galleryImages =
document.querySelectorAll(".gallery-item img");

if(galleryImages.length > 0){

const lightbox =
document.getElementById("lightbox");

const lightboxImg =
document.getElementById("lightboxImg");

const closeLightbox =
document.getElementById("closeLightbox");

galleryImages.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.style.display="flex";

lightboxImg.src = img.src;

});

});

if(closeLightbox){

closeLightbox.addEventListener("click",()=>{

lightbox.style.display="none";

});

}
}