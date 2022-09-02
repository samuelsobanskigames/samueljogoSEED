/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class SombraFaixa extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("fantasia1", "./SombraFaixa/costumes/fantasia1.png", {
        x: 128,
        y: 161
      })
    ];

    this.sounds = [new Sound("saltar", "./SombraFaixa/sounds/saltar.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.BROADCAST, { name: "faixa" }, this.whenIReceiveFaixa),
      new Trigger(
        Trigger.BROADCAST,
        { name: "cenario" },
        this.whenIReceiveCenario
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(
        Trigger.BROADCAST,
        { name: "esconder sombra faixa" },
        this.whenIReceiveEsconderSombraFaixa
      )
    ];
  }

  *whenGreenFlagClicked() {
    if (this.touching(this.sprites["Faixa"].andClones())) {
      while (true) {
        this.visible = false;
        this.broadcast("sombra");
        yield;
      }
    }
  }

  *whenGreenFlagClicked2() {
    this.moveAhead();
    this.visible = false;
  }

  *whenIReceiveFaixa() {
    this.visible = true;
  }

  *whenIReceiveCenario() {
    this.visible = false;
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (this.touching(this.sprites["Faixa"].andClones())) {
        this.visible = false;
        this.broadcast("próxima");
      }
      yield;
    }
  }

  *whenIReceiveEsconderSombraFaixa() {
    this.visible = false;
  }
}
