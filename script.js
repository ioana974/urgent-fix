document.addEventListener('DOMContentLoaded', function () {
      const links = document.querySelectorAll('a[href^="#"]');
      links.forEach((link) => {
            link.addEventListener('click', function (event) {
                  const targetId = this.getAttribute('href');
                  if (targetId.length > 1) {
                        event.preventDefault();
                        document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
                  }
            });
      });

      // Mobile nav toggle
      const navToggle = document.createElement('button');
      navToggle.className = 'nav-toggle';
      navToggle.setAttribute('aria-label', 'Meniu');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.innerHTML = `
        <span class="nav-toggle-icon">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </span>
        <span class="nav-toggle-label">Meniu</span>
      `;
      const headerInner = document.querySelector('.header-inner');
      const mainNav = document.querySelector('.main-nav');
      headerInner.insertBefore(navToggle, mainNav);
      navToggle.addEventListener('click', function () {
            const isOpen = mainNav.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', isOpen.toString());
            navToggle.classList.toggle('active', isOpen);
      });
      mainNav.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', function () {
                  if (mainNav.classList.contains('open')) {
                        mainNav.classList.remove('open');
                        navToggle.setAttribute('aria-expanded', 'false');
                  }
            });
      });

      // Contact form handling (client-side)
      const form = document.getElementById('contact-form');
      if (form) {
            const statusEl = document.getElementById('form-status');

            form.addEventListener('submit', function (e) {
                  e.preventDefault();
                  statusEl.style.display = 'none';

                  const formData = new FormData(form);
                  const name = formData.get('name')?.toString().trim();
                  const email = formData.get('email')?.toString().trim();
                  const message = formData.get('message')?.toString().trim();

                  if (!name || !email || !message) {
                        statusEl.textContent = 'Te rugăm completează toate câmpurile obligatorii.';
                        statusEl.className = 'form-status error';
                        statusEl.style.display = 'block';
                        return;
                  }

                  // Fake submit: show success message and reset form
                  statusEl.textContent = 'Mesaj trimis. Îți vom răspunde în curând.';
                  statusEl.className = 'form-status success';
                  statusEl.style.display = 'block';
                  form.reset();
                  setTimeout(() => {
                        statusEl.style.display = 'none';
                  }, 5000);
            });
      }
});

// iOS Modal Functions
function showIOSPopup() {
      const modal = document.getElementById('iosModal');
      modal.classList.add('show');
}

function closeIOSPopup() {
      const modal = document.getElementById('iosModal');
      modal.classList.remove('show');
}

// Close modal when clicking outside of it
window.addEventListener('click', function(event) {
      const modal = document.getElementById('iosModal');
      if (event.target === modal) {
            modal.classList.remove('show');
      }
});
