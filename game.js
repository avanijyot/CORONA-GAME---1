class Game{

    constructor(){

    }

    getState() {

        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();

        });

    }

    update(state) {

        database.ref('/').update({

            gameState: state

        });

    }

    async start() {

            if (gameState === 0) {

                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {

                    playerCount = playerCountRef.val();
                    player.getCount();

                }

                form = new Form()
                form.display();

            }

    player1 = createSprite(200,500);
    player1.addImage("player1", player1_img);
    
    player2 = createSprite(800,500);
    player2.addImage("player2", player2_img);

    players = [player1, player2];

        }
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                 image(back_img, 0, 0, 1000, 600);
                 var x = 100;
                 var y = 200;
                 var index = 0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y = 500;
                     
                     players[index -1].x = x;
                     players[index - 1].y = y;
                       
                     if(index === player.index){
                         
                       textSize(20);
                       fill("white");
                       text(allPlayers[plr].name, x-45, y-90);
     
                     }

                     fill("white");
                     textSize(30);
                     text("Player 1 : "+ allPlayers.player1.score, 30, 50);
                     text("Player 2 : "+ allPlayers.player2.score, 30, 100);
            
                 }
                 
                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {

                    player.distance -= 10
                    player.update();

                }

                if (keyIsDown(LEFT_ARROW) && player.index !== null) {

                    player.distance += 10
                    player.update();

                }
            
                 if (frameCount % 40 === 0) {

                     virus = createSprite(random(50, 950), 0, 100, 100);
                     virus.velocityY = 6;
                     var rand = Math.round(random(1,5));
                     switch(rand){
                         case 1: virus.addImage("virus1",virus1_img);
                         break;
                         case 2: virus.addImage("virus2", virus2_img);
                         break;
                         case 3: virus.addImage("virus3", virus3_img);
                         break;
                         case 4: virus.addImage("virus4", virus4_img);
                         break;
                         case 5: virus.addImage("virus5", virus5_img);
                         break;
                         default:break;

                     }

                     virusGroup.add(virus);
                     
                 }
                 
                  if (player.index !== null) {

                    for (var i = 0; i < virusGroup.length; i++) {

                        if (virusGroup.get(i).isTouching(players)) {

                            virusGroup.get(i).destroy();
                            player.score--;
                            player.update();
                            
                        }
                        
                    }

                  }    

    }

    end(){

       console.log("Game Ended");

    }

}