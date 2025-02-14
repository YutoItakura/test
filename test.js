const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('.passbox');

  togglePassword.addEventListener('click', function () {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});


function checkText(){
    let text=document.myform.mytext.value;
    let pass=document.myform.mypass.value;
    if (text.length === 0 && pass.length === 0) {
        document.getElementById('output1').textContent = "*IDが入力されていません";
        document.getElementById('output2').textContent = "*パスワードが入力されていません";
        return false;
    } else if (text.length === 0) {
        document.getElementById('output1').textContent = "*IDが入力されていません";
        document.getElementById('output2').textContent = "";
        return false;
    } else if (pass.length === 0) {
        document.getElementById('output1').textContent = "";
        document.getElementById('output2').textContent = "*パスワードが入力されていません";
        return false;
    }
    if (text !== "202110841") {
        document.getElementById('output1').textContent = "*IDが正しくありません";
        document.getElementById('output2').textContent = "";
        return false;
    }
    if (pass !== "Yuto") {
        document.getElementById('output1').textContent = "";
        document.getElementById('output2').textContent = "*パスワードが正しくありません";
        return false;
    }
    if (text==="202110841"&&pass==="Yuto"){
        document.getElementById('output1').textContent = "";
        document.getElementById('output2').textContent = "";
        location.replace("test1.html");
        return false;
    }
}
