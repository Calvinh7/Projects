var goombaPrice = parseInt(document.getElementById("goomba-price").innerHTML);

document.getElementById("goomba-count").addEventListener("input", function() {
    var goombaCount = parseInt(document.getElementById("goomba-count").value);
    var goombaTotal = goombaPrice * goombaCount;
    document.getElementById("goomba-total").innerHTML = goombaTotal
});

var bombPrice = parseInt(document.getElementById("bomb-price").innerHTML);

document.getElementById("bomb-count").addEventListener("input", function() {
    var bombCount = parseInt(document.getElementById("bomb-count").value);
    var bombTotal = bombPrice * bombCount;
    document.getElementById("bomb-total").innerHTML = bombTotal
});

var cheepPrice = parseInt(document.getElementById("cheep-price").innerHTML);

document.getElementById("cheep-count").addEventListener("input", function() {
    var cheepCount = parseInt(document.getElementById("cheep-count").value);
    var cheepTotal = cheepPrice * cheepCount;
    document.getElementById("cheep-total").innerHTML = cheepTotal
});

document.getElementById("button").addEventListener("click", function () {
    var goombaTotal = document.getElementById("goomba-total").innerHTML;
    var bombTotal = document.getElementById("bomb-total").innerHTML;
    var cheepTotal = document.getElementById("cheep-total").innerHTML;
    var totalOwed = parseInt(cheepTotal) + parseInt(bombTotal) + parseInt(goombaTotal);
    document.getElementById("grand-total").innerHTML = totalOwed;
});
