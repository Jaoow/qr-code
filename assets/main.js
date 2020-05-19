const qrElement = document.querySelector("#qr-code");
const qr = new QRCode(qrElement, "http://joaolucas.xyz");

function gerarQR() {
  const inputURL = document.querySelector("#qr-value").value;
  qrElement.classList.add("qr-code-reveal");

  qr.clear();
  qr.makeCode(inputURL);
}
