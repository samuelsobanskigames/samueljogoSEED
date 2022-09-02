/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Aaa extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("aaa", "./Aaa/costumes/aaa.png", { x: 41, y: 136 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "sinaleiro" },
        this.whenIReceiveSinaleiro
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "esconder" },
        this.whenIReceiveEsconder
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveSinaleiro() {
    this.visible = true;
  }

  *whenIReceiveEsconder() {
    while (true) {
      this.visible = false;
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.goto(-221, 3);
  }

  *whenGreenFlagClicked3() {
    while (true) {
      /* TODO: Implement sensing_setdragmode */ null;
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    this.moveAhead();
  }
}
