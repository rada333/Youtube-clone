// Verifica se o usuário está autenticado
function checarAutorizacao() {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Você precisa estar logado para acessar esta página.');
      window.location.href = '/login'; // Redireciona para a página de login
    }
  }
  
  // Faz logout e limpa o token
  function logout() {
    localStorage.removeItem('token');
    alert('Você foi desconectado.');
    window.location.href = '/login'; // Redireciona para a página de login
  }
  
  // Recupera o token armazenado (para uso em requisições)
  function recuperaToken() {
    return localStorage.getItem('token');
  }
  