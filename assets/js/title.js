import Phaser from "../../phaser.js";

class titleScene extends Phaser.Scene {
    constructor(){
        super({key:"titleScene"});
    }

    create() {

        this.add.text(400, 200, "KoiBoi", {
            font: "bold 32px courier"
        }).setOrigin(0.5, 0.5);
        
        this.add.text(400, 250, "Explore the pond and hunt some bugs.")
        .setOrigin(0.5, 0.5);

        var start = this.add.text(400,300, "Start >");
        start.setStyle({
            color: "#000000",
            backgroundColor: '#FFFFFF'
            })
            .setOrigin(0.5, 0.5)
        .setPadding(5)
        .setInteractive()
        .on('pointerdown', () => {
            game.scene.remove('title')
            game.scene.start('game');
        })

    }
}

export default titleScene;


/*
var titleScene = new Phaser.Scene("title");

titleScene.create = function() {

    this.add.text(400, 200, "KoiBoi", {
        font: "bold 32px courier"
    }).setOrigin(0.5, 0.5);
    
    this.add.text(400, 250, "Explore the pond and hunt some bugs.")
    .setOrigin(0.5, 0.5);

    var start = this.add.text(400,300, "Start >");
    start.setStyle({
        color: "#000000",
        backgroundColor: '#FFFFFF'
        })
        .setOrigin(0.5, 0.5)
    .setPadding(5)
    .setInteractive()
    .on('pointerdown', () => {
        game.scene.remove('title')
        game.scene.start('game');
    })

} */