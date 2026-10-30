// 🔑 Aqui guardamos o usuário e senha (pode ser um ou vários!)
const usuarios = [
    {
        email: "teste@email.com",
        senha: "123456"
    }
];

// 📩 Pegamos os elementos da página
const botaoEntrar = document.getElementById("btnEntrar");
const campoEmail = document.getElementById("campoEmail");
const campoSenha = document.getElementById("campoSenha");

// ✅ Quando clicar no botão
botaoEntrar.addEventListener("click", function(evento) {
    // Impede que a página recarregue
    evento.preventDefault();

    // Pega o que o usuário digitou
    const emailDigitado = campoEmail.value;
    const senhaDigitada = campoSenha.value;

    // 🔍 Procura se existe um usuário igual
    let loginSucesso = false;

    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email === emailDigitado && 
            usuarios[i].senha === senhaDigitada) {
            loginSucesso = true;
            break;
        }
    }

    //  Mostra mensagem
    if (loginSucesso) {
        alert("✅ Bem-vindo! Login realizado com sucesso!");
        // Aqui você pode redirecionar para outra página:
        // window.location.href = "pagina-inicial.html";
    
        window.location.href = "https://github.com/";
    
    } else {
        alert("❌ Email ou senha incorretos. Tente novamente.");
    }
});