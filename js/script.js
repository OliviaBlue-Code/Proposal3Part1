
function toggleMenu() {
      const nav = document.getElementById('navLinks');
      nav.classList.toggle('active');
    }

    function toggleMode(){
      const toggleButton = document.getElementById("theme-toggle");
      const body = document.body;
  
      // Check local storage for theme preference
      if (localStorage.getItem("theme") === "dark-mode") {
        body.classList.add("dark-mode");
        toggleButton.textContent = "🌞 Light Mode"; /*windows+ v opens emojis*/ 
      }
  
      toggleButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
  
        // Update button text and save preference
        if (body.classList.contains("dark-mode")) {
          toggleButton.textContent = "🌞Light Mode";
          localStorage.setItem("theme", "dark-mode");
        } else {
          toggleButton.textContent = "🌚 Dark Mode";
          localStorage.removeItem("theme");/*this takes it back to default so chosen mode doesn't get saved */
        }
      });
    }

 function showPhotos() {
  const container = document.getElementById('photo-container');
  const hiddenPhotos = container.querySelectorAll('.hidden');
  const spinner = document.getElementById('spinner');

  if (hiddenPhotos.length === 0) return;

  // Show spinner
  spinner.classList.remove('hidden');

  // Reveal next batch immediately (CSS will delay the visibility)
  hiddenPhotos[0].classList.remove('hidden');

  // Hide spinner after CSS animation ends
  spinner.addEventListener('animationend', () => {
    spinner.classList.add('hidden');
  }, { once: true });
}




