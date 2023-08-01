function add(valor){
    document.getElementById('screen').value += valor;
}

function erase(){
    document.getElementById('screen').value = '';
}

function result(){
    const valueInScreen = document.getElementById('screen').value;
    const result = eval(valueInScreen);
    document.getElementById('screen').value = result;
}