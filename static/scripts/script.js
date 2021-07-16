console.log("Helloworld")
let reg1 = /@([a-zA-Z0-9_.]{3,30})/;
let reg2 = /([0-9]{3,5})/;

let inp = document.querySelector('#name');
let inp2 = document.querySelector('#input_text1');
let span = document.querySelector('.span');
let span2 = document.querySelector('.span2');

document.querySelector('.vhod1').onclick = function(e){
    e.preventDefault();
    if (!validate(reg1, inp.value)){
        novalid(inp, span, '');
    }else{
        valid(inp, span, '');
    }
    if (!validate(reg2, inp2.value)){
        novalid(inp2, span2, 'От 100 до 10.000 <br> например:100,200,300 и т.д.');
    }else{
        valid(inp2);
    }
};
function validate(regex,inp) {
    return regex.test(inp);
}
function novalid(inp, el, mess) {
    inp.classList.add('is-invalid');
    el.innerHTML = mess;
}
function valid(inp, el, mess) {
    inp.classList.remove('is-invalid');
    inp.classList.add('is-valid');
    el.innerHTML = mess;
}


  const input = inputHandler = e =>{
    document.querySelector('.span3').innerHTML = e.value*2;
  }


