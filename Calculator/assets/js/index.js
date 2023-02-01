function insertValues(num) {
    let number = document.getElementById('calc_value').innerHTML;
    document.getElementById('calc_value').innerHTML = number + num;
}

function cleanInput() {
    document.getElementById('calc_value').innerHTML = "";
}

function backInput() {
    let result = document.getElementById('calc_value').innerHTML;
    document.getElementById('calc_value').innerHTML = result.substring(0, result.length - 1);
}

function calculateValues() {
    let result = document.getElementById('calc_value').innerHTML;
    if(result) {
        document.getElementById('calc_value').innerHTML = eval(result);
    } else {
        document.getElementById('calc_value').innerHTML = 'Nothing'
    }
}