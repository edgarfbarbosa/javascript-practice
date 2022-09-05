const btn = document.getElementById('btn');

function chamarPara() {
    let para = document.getElementById('para');
    
    para.innerHTML = 'Você clicou em mim';
}

btn.addEventListener('click', chamarPara);