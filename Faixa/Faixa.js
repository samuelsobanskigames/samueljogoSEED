/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Faixa extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("faixa", "./Faixa/costumes/faixa.png", { x: 104, y: 21 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.BROADCAST, { name: "faixa" }, this.whenIReceiveFaixa),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(
        Trigger.BROADCAST,
        { name: "cenario" },
        this.whenIReceiveCenario
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "cenario" },
        this.whenIReceiveCenario2
      ),
      new Trigger(Trigger.BROADCAST, { name: "faixa" }, this.whenIReceiveFaixa2)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.touching(this.sprites["SombraFaixa"].andClones())) {
        this.visible = false;
        this.broadcast("próxima");
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.moveAhead();
    this.visible = false;
  }

  *whenGreenFlagClicked3() {
    this.visible = false;
  }

  *whenIReceiveFaixa() {
    while (true) {
      this.visible = true;
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    this.goto(-40, -105);
    while (true) {
      /* TODO: Implement sensing_setdragmode */ null;
      yield;
    }
  }

  *whenIReceiveCenario() {
    this.visible = false;
  }

  *whenIReceiveCenario2() {
    while (true) {
      this.visible = false;
      yield;
    }
  }

  *whenIReceiveFaixa2() {
    if (this.touching(this.sprites["SombraFaixa"].andClones())) {
      while (true) {
        this.broadcast("esconder sombra faixa");
        yield;
      }
    }
  }
}
