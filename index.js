import Phaser from "./phaser.js";
import titleScene from "./assets/js/title.js";


const config = {
                    title: "KoiBoi",
                    type: Phaser.AUTO,
                    width: 800,
                    height: 600,
                    physics: {
                    default: 'arcade',
                    arcade: {
                        gravity: 0
                        }
                    },
                    backgroundColor: "#99d9ea",
                    scale: {
                        autoCenter: Phaser.Scale.CENTER_BOTH
                    }
                };

            var game = new Phaser.Game(config);

            game.scene.add('title', titleScene);
            //game.scene.add('game', gameScene);
            //game.scene.add('end', endScene);

            game.scene.start('title');