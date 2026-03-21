/* ============================================================
   JV Portfolio – main.js
   Navbar scroll, mobile menu, scroll reveal, contact form
   ============================================================ */

// ---------- Navbar: add .scrolled class on scroll ----------
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });


// ---------- Mobile hamburger menu ----------
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  // Animate hamburger bars into X
  const bars = hamburger.querySelectorAll('span');
  bars[0].style.transform = navLinks.classList.contains('open') ? 'rotate(45deg) translate(5px, 5px)' : '';
  bars[1].style.opacity   = navLinks.classList.contains('open') ? '0' : '';
  bars[2].style.transform = navLinks.classList.contains('open') ? 'rotate(-45deg) translate(5px, -5px)' : '';
});

// Close menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    const bars = hamburger.querySelectorAll('span');
    bars[0].style.transform = '';
    bars[1].style.opacity   = '';
    bars[2].style.transform = '';
  });
});


// ---------- Scroll Reveal ----------
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger siblings inside the same parent
      const siblings = Array.from(entry.target.parentElement.querySelectorAll('.reveal'));
      const index    = siblings.indexOf(entry.target);
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 100);
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
});

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


// ---------- Active nav link highlight ----------
const sections = document.querySelectorAll('section[id]');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));


// ---------- EmailJS init ----------
emailjs.init('oCo1aNN6MEkqQzwbv');

// ---------- Contact form ----------
const form     = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const btn      = form.querySelector('button[type="submit"]');
  const original = btn.textContent;

  btn.textContent = 'Sending...';
  btn.disabled    = true;
  formNote.textContent = '';

  const templateParams = {
    name:    form.name.value,
    email:   form.email.value,
    service: form.service.options[form.service.selectedIndex].text || 'Not specified',
    message: form.message.value,
  };

  emailjs.send('service_23hwc2r', 'template_yx9gr6p', templateParams)
    .then(() => {
      formNote.textContent = "✓ Message sent! I'll get back to you within 24 hours.";
      formNote.style.color = '#00ff88';
      form.reset();
    })
    .catch(() => {
      formNote.textContent = '✗ Something went wrong. Please email me directly at martejohnvincent13@gmail.com';
      formNote.style.color = '#ff4d4d';
    })
    .finally(() => {
      btn.textContent = original;
      btn.disabled    = false;
      setTimeout(() => { formNote.textContent = ''; }, 7000);
    });
});


// ---------- Particle canvas in hero ----------
(function () {
  const canvas = document.createElement('canvas');
  canvas.id = 'particles';
  canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;z-index:0;pointer-events:none;';
  document.querySelector('.hero-bg').appendChild(canvas);

  const ctx = canvas.getContext('2d');
  let W, H, particles = [];
  const COUNT = 80;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  function rand(min, max) { return Math.random() * (max - min) + min; }

  for (let i = 0; i < COUNT; i++) {
    particles.push({
      x: rand(0, 1), y: rand(0, 1),
      r: rand(0.5, 2),
      vx: rand(-0.0002, 0.0002),
      vy: rand(-0.0002, 0.0002),
      alpha: rand(0.2, 0.8)
    });
  }

  // Mouse parallax
  let mx = 0.5, my = 0.5;
  document.addEventListener('mousemove', e => {
    mx = e.clientX / window.innerWidth;
    my = e.clientY / window.innerHeight;
  });

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      p.x += p.vx + (mx - 0.5) * 0.00015;
      p.y += p.vy + (my - 0.5) * 0.00015;
      if (p.x < 0) p.x = 1; if (p.x > 1) p.x = 0;
      if (p.y < 0) p.y = 1; if (p.y > 1) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x * W, p.y * H, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0,170,255,${p.alpha})`;
      ctx.fill();
    });

    // Draw connecting lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j];
        const dx = (a.x - b.x) * W, dy = (a.y - b.y) * H;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(a.x * W, a.y * H);
          ctx.lineTo(b.x * W, b.y * H);
          ctx.strokeStyle = `rgba(0,170,255,${0.12 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
})();


// ---------- Custom glow cursor ----------
(function () {
  const cursor = document.createElement('div');
  cursor.id = 'cursor-glow';
  cursor.style.cssText = `
    position:fixed; width:300px; height:300px;
    border-radius:50%; pointer-events:none; z-index:9999;
    background:radial-gradient(circle, rgba(0,170,255,0.08) 0%, transparent 70%);
    transform:translate(-50%,-50%);
    transition: opacity 0.3s ease;
    top:0; left:0;
  `;
  document.body.appendChild(cursor);

  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
  });
  document.addEventListener('mouseleave', () => cursor.style.opacity = '0');
  document.addEventListener('mouseenter', () => cursor.style.opacity = '1');
})();


// ---------- Stat counter animation ----------
(function () {
  const stats = document.querySelectorAll('.stat-num');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el  = entry.target;
      const raw = el.textContent.trim();
      const num = parseInt(raw);
      if (isNaN(num)) return;
      const suffix = raw.replace(num, '');
      let start = 0;
      const duration = 1500;
      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(ease * num) + suffix;
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      counterObserver.unobserve(el);
    });
  }, { threshold: 0.5 });

  stats.forEach(s => counterObserver.observe(s));
})();


// ---------- Card tilt on hover ----------
(function () {
  document.querySelectorAll('.service-card, .project-card, .about-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width  - 0.5;
      const y = (e.clientY - rect.top)  / rect.height - 0.5;
      card.style.transform = `perspective(600px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-6px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
})();


// ---------- Typing animation in hero ----------
(function () {
  const el = document.querySelector('.hero-sub');
  if (!el) return;
  const original = el.textContent.trim();
  el.textContent = '';
  el.style.borderRight = '2px solid #00aaff';
  let i = 0;
  const type = () => {
    if (i < original.length) {
      el.textContent += original[i++];
      setTimeout(type, 18);
    } else {
      setTimeout(() => { el.style.borderRight = 'none'; }, 800);
    }
  };
  setTimeout(type, 900);
})();


// ---------- Smooth scroll for anchor links ----------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
