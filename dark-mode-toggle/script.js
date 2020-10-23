const toggle = document.getElementById('toggle');

toggle.addEventListener('click', (e) => {
  document.body.classList.toggle('dark', e.target.checked)
})