import Phaser from "phaser"

import PuzzleGameScene from "./scenes/PuzzleGameScene"
import WinScene from "./scenes/WinScene"

const config = {
	type: Phaser.AUTO,
	parent: "app",
	width: 1280,
	height: 864,
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
	},
	scene: [PuzzleGameScene, WinScene],
}

export default new Phaser.Game(config)
