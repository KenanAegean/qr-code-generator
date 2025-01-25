// Generate QR Code for custom text
document.getElementById("generateBtn").addEventListener("click", function () {
    const qrText = document.getElementById("qrText").value;
    generateQRCode(qrText);
  });
  
  // Generate QR Code for today's date in YYYYMMDD format
  document.getElementById("generateDateBtn").addEventListener("click", function () {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    const dateText = `${yyyy}${mm}${dd}`;
    generateQRCode(dateText);
  });
  
  // Function to generate QR Code
  function generateQRCode(text) {
    const qrCodeContainer = document.getElementById("qrCode");
  
    // Clear previous QR Code
    qrCodeContainer.innerHTML = "";
  
    if (!text || text.trim() === "") {
      alert("Invalid input. Please enter valid text.");
      return;
    }
  
    // Generate QR Code with fixed size of 200
    QRCode.toCanvas(text, { width: 200 }, function (error, canvas) {
      if (error) {
        console.error("Error generating QR Code:", error);
        return;
      }
  
      // Append the QR code canvas to the container
      qrCodeContainer.appendChild(canvas);
      console.log(`QR Code generated for: ${text}`);
    });
  }
  