document.addEventListener('DOMContentLoaded', function() {
    // Add event listener for changing background color
    document.getElementById('colorButton').addEventListener('click', function() {
        document.body.style.backgroundColor = getRandomColor();
    });

    // Add event listener for showing/hiding hidden message
    document.getElementById('toggleButton').addEventListener('click', function() {
        var hiddenMessage = document.getElementById('hiddenMessage');
        if (hiddenMessage.style.display === 'none') {
            hiddenMessage.style.display = 'block';
        } else {
            hiddenMessage.style.display = 'none';
        }
    });
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
