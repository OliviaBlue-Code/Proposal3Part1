function toggleMenu() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("darkModeToggle");
  // Load saved preference
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    toggle.checked = true;
  }
  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "enabled");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "disabled");
    }
  });
});

function showPhotos() {
  const container = document.getElementById('photo-container');
  const hiddenPhotos = container.querySelector('.hidden');
  const spinner = document.getElementById('spinner');
  if (!hiddenPhotos) return;
  // Show spinner
  spinner.classList.remove('hidden');
  // Reveal next batch after a delay
  setTimeout(() => {
    hiddenPhotos.classList.remove('hidden');
    hiddenPhotos.style.display = 'flex';
    hiddenPhotos.style.flexWrap = 'wrap';
    hiddenPhotos.style.justifyContent = 'center';
    spinner.classList.add('hidden');
  }, 3000);
}

 function validateForm(){
            const email =document.getElementById("email").value;
            const error =document.getElementById("error");
            if (!email.includes("@")){
                error.innerText = "Please enter a valid email.";
                return false;
            }
            error.innerText = ""; //means if there's no error 
            alert("Form submitted!");
            return true;
        }