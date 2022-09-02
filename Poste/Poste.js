/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Poste extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("fantasia1", "./Poste/costumes/fantasia1.svg", {
        x: 30,
        y: 94
      })
    ];

    this.sounds = [new Sound("saltar", "./Poste/sounds/saltar.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "cenario" },
        this.whenIReceiveCenario
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(
        Trigger.BROADCAST,
        { name: "cenario" },
        this.whenIReceiveCenario2
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
      new Trigger(Trigger.BROADCAST, { name: "poste" }, this.whenIReceivePoste)
    ];
  }

  *whenIReceiveCenario() {
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.moveAhead();
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
      if (this.touching(this.sprites["Sombra2"].andClones())) {
        this.broadcast("faixa");
      }
      yield;
    }
  }

  *whenIReceiveCenario2() {
    this.visible = false;
  }

  *whenGreenFlagClicked4() {
    this.goto(-80, -69);
  }

  *whenGreenFlagClicked5() {
    this.visible = false;
  }

  *whenIReceivePoste() {
    this.visible = true;
  }
}
