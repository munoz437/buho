document.getElementById('image-upload-display').addEventListener('click', function() {
    document.getElementById('image-upload').click();
});

document.getElementById('image-upload').addEventListener('change', function(e) {
    var reader = new FileReader();
    reader.onload = function(){
        var output = document.getElementById('image-upload-display');
        output.src = reader.result;
    };
    reader.readAsDataURL(e.target.files[0]);
});
