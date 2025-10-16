const loginWindow = document.getElementById("loginWindow");
const welcomeWindow = document.getElementById("welcomeWindow");
let clicked = false;

document.addEventListener("click", () => {
    if(clicked == false){
        document.body.innerHTML = "";
        document.body.innerHTML = `
                <div id="loginWindow" class="container-fluid w-100 text-center d-flex flex-column justify-content-center align-items-center" style="height: 100vh;">

            <div class="container w-50 d-flex flex-column justify-content-center p-5 rounded-5" style="background-color: #ffffff61; backdrop-filter: blur(8px); border: 2px solid #000;">

                <form class="container d-flex flex-column align-items-center fs-4 py-5" style="width: 85%;">
                    
                    <h1 class="mb-3 fw-bolder" style="color: #a40000;>É você mesmo?</h1>

                    <p class="mb-4 fs-5">Vamos ver se você é quem deveria estar aqui</p>
                    
                    <label class="mt-4 fs-3 fw-bolder" for="login">Login:</label>
                    <input class="px-3 py-2 w-100 rounded-3 mt-2 fs-5" type="login" name="login" id="login" placeholder="Dica: Seu primeiro apelido. Começa com 'M'." required autocomplete="off">

                    <label class="mt-4 fs-3 fw-bolder" for="senha">Senha:</label>
                    <input class="px-3 py-2 w-100 rounded-3 mt-2 fs-5" type="password" name="senha" id="senha" placeholder="Dica: Ano do começo de tudo." required>

                    <button class="mt-5 btn btn-primary fs-3 w-50" type="button" onclick="validar_login()">Entrar</button>

                </form>
                
            </div>

        </div>

        <div id="bgImg" class="container-fluid position-fixed top-0" style="width: 100vw; height: 100vh; background: url('midias/bg.gif') no-repeat; background-size: cover; z-index: -99; "></div>
        `;
    }
    clicked = true;
});

function validar_login() {
    let login = document.getElementById("login").value.toLowerCase();
    let senha = document.getElementById("senha").value;

    console.log(login + " e " + senha);

    if(login === "morena" && senha === "2023") {
        sessionStorage.setItem("logado", "1");
        window.location.href = "index.html";
    }
    else {
        document.body.innerHTML += `
        <div class="alert alert-warning alert-dismissible fade show position-fixed w-50" style="bottom: 5vh;" role="alert">
                Não é isso não, viu. Por segurança, tente novamente!
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
    }
}

document.addEventListener("keydown", function (event) {
    if(event.key === "Enter") {
        event.preventDefault();
        validar_login();
    }
});