(function () {

    var a = 2;
    var b = 3;

    var c = a + b;
    var x = 5;
    var y = 2;
    var z = x - y;
    var x = 5;
    var z = Math.pow(x, 2);

    var z2 = 2 * z;

    function showValueInElement(id, label, value) {
        var labelElement = window.document.getElementById(id+"label");
        if (labelElement) {
            labelElement.textContent = label;
        }
        var valueElement = window.document.getElementById(id);
        if (valueElement) {
            valueElement.textContent = value;
        }
    }
    setTimeout(function () {
        showValueInElement("input1", "x:", x);
        showValueInElement("input2", "y:", y);
        showValueInElement("output", "result:", z);
    }, 0);
})();
