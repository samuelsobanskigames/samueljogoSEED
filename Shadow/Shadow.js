/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Shadow extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("fantasia1", "./Shadow/costumes/fantasia1.svg", {
        x: 50.017293761612564,
        y: 40.36185603937656
      })
    ];

    this.sounds = [new Sound("saltar", "./Shadow/sounds/saltar.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "sombra" },
        this.whenIReceiveSombra
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "ok" }, this.whenIReceiveOk),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3)
    ];
  }

  *whenIReceiveSombra() {
    this.visible = true;
    this.moveAhead();
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.touching(this.sprites["Bb"].andClones())) {
        this.visible = false;
      }
      yield;
    }
  }

  *whenIReceiveOk() {
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    this.goto(-136, 74);
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (this.touching(this.sprites["Bb"].andClones())) {
        this.visible = false;
      }
      yield;
    }
  }
}
