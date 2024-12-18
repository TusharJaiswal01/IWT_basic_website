document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', (e) => {
      document.querySelector('#roadmap').scrollIntoView({ behavior: 'smooth' });
    });
  });
  