  // Hamburger toggle
    function toggleMenu() {
      const nav = document.getElementById("navLinks");
      nav.classList.toggle("show");
    }

    // Typing effect
    const text = "UI/UX Designer";
    let index = 0;
    function typeWriter() {
      if (index < text.length) {
        document.getElementById("typed").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
      }
    }
    window.onload = typeWriter;
  var typed = new Typed("#typing", {
    strings: [
      "Web Developer",
      "Front-End Developer",
      "React.js Enthusiast",
      "Tech Learner"
    ],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
  });
  function downloadResume() {
  const link = document.createElement('a');
  link.href = './ e (6).pdf'; // Replace with your actual resume path
  link.download = 'Balaji_Sakthivel_Resume.pdf';
  link.click();
} 
 document.getElementById('contactForm').addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const message = document.getElementById('message').value.trim();

      const text = `Hello, I'm ${name}%0A📧 Email: ${email}%0A📞 Phone: ${phone}%0A💬 Message: ${message}`;
      const whatsappNumber = "919751945743"; // YOUR WhatsApp number with country code, no '+'

      const url = `https://wa.me/${whatsappNumber}?text=${text}`;
      window.open(url, "_blank");
    });
    document.addEventListener('DOMContentLoaded', function() {
    // Animate progress bars when they come into view
    const progressBars = document.querySelectorAll('.progress-bar');
    
    const animateProgressBars = () => {
        progressBars.forEach(bar => {
            const barWidth = bar.getAttribute('aria-valuenow');
            bar.style.width = '0%';
            
            // Trigger reflow to restart animation
            void bar.offsetWidth;
            
            bar.style.width = barWidth + '%';
        });
    };
    
    // Use IntersectionObserver to trigger animation when section comes into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProgressBars();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        observer.observe(skillsSection);
    }
    
    // Tooltip initialization for additional skills
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

