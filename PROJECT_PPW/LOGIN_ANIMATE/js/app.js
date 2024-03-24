const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});



document.querySelector('#btn-login').addEventListener('click', verificationLogin) 

  function verificationLogin() {
    const loginEmail = document.querySelector('#emailLogin')
    const loginPassword = document.querySelector('#passwordLogin')
    const loginInput = document.querySelector('#InputLogin')

      if (loginEmail.value == 0 && loginPassword.value == 0) {
        alert("[ERRO] Preencha os campos vazios!")
        loginEmail.focus()
        loginEmail.style.borderBottom = '1px dashed red'
        loginPassword.style.borderBottom = '1px dashed red'
      } else if (loginEmail.value == 0) {
        alert('[ERRO] O campo email está vazio!')
        loginEmail.style.borderBottom = '1px dashed red'
      } else if (loginPassword.value == 0) {
        alert('[ERRO] O campo senha está vazio!')
        loginPassword.style.borderBottom = '1px dashed red'
      } else if (loginEmail.value.indexOf('@') == -1 || loginEmail.value.indexOf('.') == -1) {
        alert("[ERRO] Coloque um email válido!")
        loginEmail.style.borderBottom = '1px dashed red'
      } else if (loginPassword.value.length < 6) {
        alert("[ERRO] Coloque uma senha válida")
      }
  }

document.querySelector("#btn-signUp").addEventListener('click', verificationSignUp)

  function verificationSignUp() {
    const signUpFullName = document.querySelector('#fullName')
    const signUpEmail = document.querySelector('#signUpEmail')
    const signUpPassword = document.querySelector("#signUpPassword")
    const signUpConfirmPassword = document.querySelector("#confirmPassword")

    if (signUpFullName.value == 0 && signUpEmail.value == 0 && signUpPassword.value == 0 && signUpConfirmPassword.value == 0) {
      alert('[ERRO] Preencha todos os campos de cadastro!')
      signUpFullName.focus()
      signUpFullName.style.borderBottom ='1px dashed red'
      signUpEmail.style.borderBottom ='1px dashed red'
      signUpPassword.style.borderBottom ='1px dashed red'
      signUpConfirmPassword.style.borderBottom ='1px dashed red'
    } else if (signUpFullName.value < 3 || signUpFullName.value.indexOf(' ') == -1){
      alert("[ERRO] Nome inválido")
      signUpFullName.focus()
      signUpFullName.style.borderBottom ='1px dashed red'
    } else if (signUpEmail.value == 0 || signUpEmail.value.indexOf('@') == -1 || signUpEmail.value.indexOf('.') == -1) {
      alert("[ERRO] Email inválido ou vazio!")
      signUpEmail.focus()
      signUpEmail.style.borderBottom ='1px dashed red'
    } else if (signUpPassword.value == 0) {
      alert("[ERRO] Preencha o campo da senha!")
      signUpPassword.focus()
      signUpPassword.style.borderBottom ='1px dashed red'
    } else if (signUpPassword.value.length < 7) {
      alert("[ERRO] A senha deve ter no mínimo 7 caracteres!")
    } else if (signUpConfirmPassword.value != signUpPassword.value ) {
      alert("[ERRO] As senhas não conferem!")
    }
  }

