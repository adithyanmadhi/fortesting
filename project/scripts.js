document.addEventListener("DOMContentLoaded", function() {
  
  const aboutLink = document.getElementById('about-link');
  const aboutContent = document.getElementById('more-about-content');
  const aboutSection = document.getElementById('about-section');


  aboutLink.addEventListener('click', function(e) {
    e.preventDefault(); 

    
    if (aboutContent.style.display === "none" || aboutContent.style.display === "") {
      aboutContent.style.display = "block"; 
    } else {
      aboutContent.style.display = "none"; 
    }

    
    window.scrollTo({
      top: aboutSection.offsetTop - 80, 
      behavior: 'smooth'
    });
  });
});
