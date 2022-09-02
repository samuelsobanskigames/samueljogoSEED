/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Aaa2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("aaa", "./Aaa2/costumes/aaa.png", { x: 173.5, y: 248 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(
        Trigger.BROADCAST,
        { name: "sinaleiro" },
        this.whenIReceiveSinaleiro
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      /* TODO: Implement sensing_setdragmode */ null;
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (this.touching(this.sprites["Aaa"].andClones())) {
        this.visible = false;
        this.broadcast("esconder");
        yield* this.wait(1);
        this.broadcast("cenario");
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    this.goto(-12, -66);
  }

  *whenIReceiveSinaleiro() {
    this.visible = true;
  }

  *whenGreenFlagClicked5() {
    this.moveAhead(5);
  }
}
