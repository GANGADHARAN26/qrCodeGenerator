function generateQRCode() {
    const Data = document.getElementById('Data').value;
    const Height = document.getElementById('Height').value;
    const Width = document.getElementById('Width').value;

    const Color = document.getElementById('Color').value.replace('#', '');
    const bgColor = document.getElementById('bgColor').value.replace('#', '');
  //api url 
    const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${Height}x${Width}&data=${encodeURIComponent(Data)}&color=${Color}&bgcolor=${bgColor.replace('#', '')}`;
  //qrCode
    const qrCodeContainer = document.getElementById('qrCodeContainer');
    qrCodeContainer.innerHTML = `<img src="${apiUrl}" alt="QR Code">`;
  
    const downloadPNG = document.getElementById('downloadPNG');
    const downloadJPG = document.getElementById('downloadJPG');
    const downloadSVG = document.getElementById('downloadSVG');
   //png download
    downloadPNG.style.display = 'block';
    downloadPNG.href = `${apiUrl}&format=png`;
    downloadPNG.setAttribute('download', 'qr-code.png');
  //jpeg download
    downloadJPG.style.display = 'block';
    downloadJPG.href = `${apiUrl}&format=jpg`;
    downloadJPG.setAttribute('download', 'qr-code.jpg');
  //svg download
    downloadSVG.style.display = 'block';
    downloadSVG.href = `${apiUrl}&format=svg`;
    downloadSVG.setAttribute('download', 'qr-code.svg');
  }