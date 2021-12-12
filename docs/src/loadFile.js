bsCustomFileInput.init();

const handleFileSelect = () => {
    console.log(fileInput.files)
    file = fileInput.files[0];
    reader = new FileReader();
    // remove previous preview
    prePreview = document.getElementById('preview');
    reader.onload = function (e) {
        const imageUrl = e.target.result;
        preview.src = imageUrl
        preview.width = 350;
    }
    reader.readAsDataURL(file);
}

const fileInput = document.getElementById('inputFile');
fileInput.addEventListener('change', handleFileSelect);