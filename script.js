document.getElementById("generateBtn").addEventListener("click", function () {
    const qrText = document.getElementById("qrText").value;
    const qrCodeContainer = document.getElementById("qrCode");
  
    // Clear previous QR Code
    qrCodeContainer.innerHTML = "";
  
    if (qrText.trim() === "") {
      alert("Please enter text or a URL.");
      return;
    }
  
    // Generate QR Code with fixed size of 200
    QRCode.toCanvas(qrText, { width: 200 }, function (error, canvas) {
      if (error) {
        console.error("Error generating QR Code:", error);
        return;
      }
  
      // Append the QR code canvas to the container
      qrCodeContainer.appendChild(canvas);
      console.log("QR Code generated successfully!");
    });
  });
  