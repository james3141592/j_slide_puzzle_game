import Phaser from "phaser"
export default class WinScene extends Phaser.Scene {
	constructor() {
		super("win-scene")
	}

	init(data) {
		this.winLabel = undefined
		this.moves = data.moves
		this.movesLabel = undefined
	}

	preload() {}

	create() {
		this.winLabel = this.add
			.text(300, 200, "You Win!", {
				fontSize: "150px",
				color: "white",
				backgroundColor: "black",
			})
			.setDepth(1)
			.setVisible(true)
		this.movesLabel = this.add
			.text(250, 400, "Moves:" + this.moves, {
				fontSize: "150px",
				color: "white",
				backgroundColor: "black",
			})
			.setDepth(1)
			.setVisible(true)
		this.add
			.text(650, 700, "Start", {
				fontSize: "128px",
				color: "#ffffff",
				backgroundColor: "#000000",
			})
			.setOrigin(0.5)
			.setInteractive()
			.on("pointerdown", () => {
				this.scene.start("puzzle-game-scene")
			})
	}

	update() {}
}
