class Form{

    constructor(){

       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');

    }

    hide() {

        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();

    }

    display() {

        this.title.html("CORONA WARRIOR");
        this.title.position(500, 55);
        this.title.style('font-size', '60px');
        this.title.style('color', 'white');

        this.input.position(550,600);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');

        this.button.position(560,650);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');

        this.reset.position(900, 660);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightpink');

        this.button.mousePressed(() => {

            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(500, 500);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '70px');

        });

        this.reset.mousePressed(() => {

            var playerInfoRef = database.ref('players');
            player.updateCount(0);
            game.update(0);
            playerInfoRef.remove();

        });

    }
    
}