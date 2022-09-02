/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sombra2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("fantasia2", "./Sombra2/costumes/fantasia2.svg", {
        x: 49.932515337423325,
        y: 125.99693251533742
      })
    ];

    this.sounds = [new Sound("saltar", "./Sombra2/sounds/saltar.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.BROADCAST, { name: "poste" }, this.whenIReceivePoste)
    ];
  }

  *whenGreenFlagClicked() {
    this.moveAhead();
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.touching(this.sprites["Poste"].andClones())) {
        this.visible = false;
        this.broadcast("ok2");
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    this.visible = false;
  }

  *whenIReceivePoste() {
    this.visible = true;
  }
}
