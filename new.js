class Timer {
    constructor(el, counter) {
        this.el = el;
        this.counter = counter;
        this.el.classList.add('timer');
            this.el.innerHTML = this.counter;
            myDiv.appendChild(this.el);
        
        let timerGo = setInterval(() => {
            this.counter--;
            this.el.innerHTML = this.counter;
            if (this.counter===0){
                clearInterval(timerGo);
            }
        }, 1000);
        
        
    }
}

let myDiv = document.getElementById('background'),
     newP = document.createElement('p');

let c1 = new Timer(newP, 10 );

console.log(c1);
