// Modo escuro

document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggleTheme');
  const body = document.body;

  if (localStorage.getItem('darkTheme') === 'enabled') {
    body.classList.add('dark');
    toggleButton.textContent = 'Modo claro';
  }

  toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');
    if (body.classList.contains('dark')) {
      localStorage.setItem('darkTheme', 'enabled');
      toggleButton.textContent = 'Modo claro';
    } else {
      localStorage.setItem('darkTheme', 'disabled');
      toggleButton.textContent = 'Modo escuro';
    }
  });
  


  // Função para exibir a página e esconder as outras
  function showPage(page) {
      const pages = document.querySelectorAll('.page');
      pages.forEach(p => {
          if (p.id === page) {
              p.style.display = 'block';
          } 
          
          else {
              p.style.display = 'none';
          }
      });


    
    // Fazer com que a calculadora suma quando eu selecionar outra página.
    const resultadoCalculadora = document.getElementById('resultadoCalculadora');
    if (resultadoCalculadora) {
        resultadoCalculadora.style.display = 'none';
    }
  }

      // Exporta a função para ser usada no botão da calculadora.
      window.showPage = showPage;

});



function showProject(project) {

  // Mostrar a calculadora, e levar a página até ela.
  const resultado = document.getElementById('resultado' + project.charAt(0).toUpperCase() + project.slice(1));
  if (resultado) {
      resultado.style.display = 'block';
      resultado.scrollIntoView({ behavior: 'smooth' });
  }
}