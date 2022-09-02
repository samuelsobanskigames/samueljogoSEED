/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Ator1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("fantasia1", "./Ator1/costumes/fantasia1.png", {
        x: 420,
        y: 360
      })
    ];

    this.sounds = [new Sound("saltar", "./Ator1/sounds/saltar.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.BROADCAST, { name: "play" }, this.whenIReceivePlay),
      new Trigger(
        Trigger.BROADCAST,
        { name: "cenario" },
        this.whenIReceiveCenario
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "cenario" },
        this.whenIReceiveCenario2
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    this.visible = false;
  }

  *whenGreenFlagClicked3() {
    this.visible = false;
  }

  *whenIReceivePlay() {
    this.visible = true;
    this.broadcast("setas");
  }

  *whenIReceiveCenario() {
    this.visible = false;
  }

  *whenIReceiveCenario2() {
    this.visible = false;
  }
}
