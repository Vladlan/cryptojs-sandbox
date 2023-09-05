import AES from "crypto-js/aes";
import Utf8 from "crypto-js/enc-utf8";

addHTML();

encrbtn.addEventListener("click", function (e) {
  const ciphertext = AES.encrypt(rawdata.value, password.value);
  endata.value = ciphertext.toString();
  display1.textContent = ciphertext.toString();
});

debtn.addEventListener("click", function (e) {
  if (password.value != password2.value) {
    alert("password must same as on encrypted");
    return false;
  }
  const Normaltext = AES.decrypt(endata.value, password2.value);
  display2.textContent = Normaltext.toString(Utf8);
});


function addHTML() {
  const baseDiv = document.createElement("div");
  baseDiv.id = "add_after_me";
  document.body.appendChild(baseDiv);

  document.getElementById("add_after_me").insertAdjacentHTML(
    "afterend",
    `<div>
        <div>
              Sensitive Data<input type="text" id="rawdata"/>
              Password       <input type="text" id="password"/>
              Encrypted data:: <span id="display1"></span><br/>
              <button type="button" id="encrbtn">Encrypt</button>
        </div>

        <div>
            Encrypted String<input type="text" id="endata"/>
            Password       <input type="text" id="password2"/>
            Decrypted data:: <span id="display2"></span><br/>
            <button type="button" id="debtn">Decrypt</button>
        </div>
    <div/>`
  );
}
