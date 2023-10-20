let cont = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btnAdd');
let main = document.getElementById('areaLista')

btnAdd.addEventListener('click', () => {
    //Pegar valor digitado no input;
    let valorInput = input.value;

    //Se não for vazio,nem nulo, nem indefinido;
    if((valorInput !== " ") && (valorInput !== null) && (valorInput !== undefined)) {
        ++cont;

        let novoItem = ` <div id="${cont}" class="item">
            <div class="item-icone">
                <img src="./assets/radio_button_unchecked_black_24dp.svg" alt="">
            </div>
            <div class="item-name">
                ${valorInput}
            </div>
            <div class="item-button">
                <button class="deletar">
                    <img src="./assets/delete_black_24dp.svg" alt="">delete
                </button>
            </div>
        </div>`;
        //Adicionar novo itemno main
        main.innerHTML += novoItem;

        //zerar campinhos
        input.value = " ";
        input.focus();

       
    }
} );

input.addEventListener('keyup', (e) => {
    //Se teclou no enter
    if(e.keyCode === 13) {
        e.preventDefault();
        btnAdd.click();
    }
});

