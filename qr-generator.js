// qr-generator.js
// This script handles the dynamic generation of QR codes.

function generateBusinessQRCode() {
    // Find the container where the QR code should be placed
    const qrContainer = document.getElementById('qr-code-container');
    
    // If the container doesn't exist on the page, do nothing
    if (!qrContainer) {
        return;
    }

    // Get the current page's URL to encode it in the QR code
    const urlToEncode = window.location.href;

    // Clear any previous QR code (like the placeholder image)
    qrContainer.innerHTML = "";

    // Create a new QR code instance using the qrcode.js library
    new QRCode(qrContainer, {
        text: urlToEncode,
        width: 160, // Set the size of the QR code
        height: 160,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H // High correction level
    });
}
