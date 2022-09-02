/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sombra3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("fantasia1", "./Sombra3/costumes/fantasia1.png", {
        x: -23,
        y: 151
      })
    ];

    this.sounds = [new Sound("saltar", "./Sombra3/sounds/saltar.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "cenario" },
        this.whenIReceiveCenario
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(
        Trigger.BROADCAST,
        { name: "próxima" },
        this.whenIReceivePrXima
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "cenario" },
        this.whenIReceiveCenario2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "cenario" },
        this.whenIReceiveCenario3
      )
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.touching(this.sprites["Poste"].andClones())) {
        this.visible = false;
      }
      yield;
    }
  }

  *whenIReceiveCenario() {
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    this.moveAhead();
    this.visible = false;
  }

  *whenGreenFlagClicked3() {
    while (true) {
      this.visible = false;
      yield;
    }
  }

  *whenIReceivePrXima() {
    this.moveAhead(1);
    this.visible = true;
    while (true) {
      if (
        this.touching(
          this.sprites[
            "PSinalizacaoSonoraParaDeficientes10946537291530728736819RemovebgPreview"
          ].andClones()
        )
      ) {
        this.visible = false;
        this.broadcast("sinaleiro");
      }
      yield;
    }
  }

  *whenIReceiveCenario2() {
    this.visible = false;
  }

  *whenIReceiveCenario3() {
    this.visible = false;
  }
}
