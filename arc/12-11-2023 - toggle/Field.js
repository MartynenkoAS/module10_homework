class Field {
    constructor() {
        const fild = document.querySelector(".game_fild");
        let x = y = 1;
    }
    drawField() {
        for (let i = 0; i < 100; i++) {
            let divFild = document.createElement('div');
            divFild.classList.add("game_fildElement");
        
            if (x > 10) {
                x = 1;
                y++;
            } 
            divFild.setAttribute("data-x", x);
            divFild.setAttribute("data-y", y);
            divFild.textContent = `${x}/${y}`
                x++;
        
            this.fild.appendChild(divFild);
        }
    }
}
export default Field;