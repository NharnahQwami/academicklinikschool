// Mobile menu toggle
const mobileMenuToggle = document.getElementById("mobileMenuToggle")
const navMenu = document.getElementById("navMenu")

mobileMenuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active")
})

// Close mobile menu when a link is clicked
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
  })
})

// Page navigation
function navigateTo(page) {
  // Hide all pages
  document.querySelectorAll(".page").forEach((p) => {
    p.classList.remove("active")
  })

  // Show selected page
  const selectedPage = document.getElementById(`${page}-page`)
  if (selectedPage) {
    selectedPage.classList.add("active")
  }

  // Update active nav link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active")
  })
  const activeLink = document.querySelector(`[data-page="${page}"]`)
  if (activeLink) {
    activeLink.classList.add("active")
  }

  // Scroll to top
  window.scrollTo(0, 0)
}

// Contact form submission
const contactForm = document.getElementById("contactForm")
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()
    alert("Thank you for your message! We will get back to you soon.")
    contactForm.reset()
  })
}

// Login form submission
const loginForm = document.getElementById("loginForm")
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const email = document.getElementById("loginEmail").value
    const password = document.getElementById("loginPassword").value

    if (email && password) {
      alert(`Login successful for ${email}!`)
      loginForm.reset()
    } else {
      alert("Please fill in all fields")
    }
  })
}

// Initialize - show home page by default
document.addEventListener("DOMContentLoaded", () => {
  navigateTo("home")
})
