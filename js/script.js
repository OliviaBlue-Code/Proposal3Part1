
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



