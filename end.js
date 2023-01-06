var endScene = new Phaser.Scene('end');

endScene.create = function() {
    this.add.text(270, 180, "KoiBoi's belly is very happy now.");
    this.add.text(350, 230, "Thanks!", {font: "bold 32px courier"})
}