/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class PSinalizacaoSonoraParaDeficientes10946537291530728736819RemovebgPreview extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "p_sinalizacao-sonora-para-deficientes_10946_53729_1530728736819-removebg-preview",
        "./PSinalizacaoSonoraParaDeficientes10946537291530728736819RemovebgPreview/costumes/p_sinalizacao-sonora-para-deficientes_10946_53729_1530728736819-removebg-preview.png",
        { x: -34, y: 113 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(
        Trigger.BROADCAST,
        { name: "próxima" },
        this.whenIReceivePrXima
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked6)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.touching(this.sprites["Sombra3"].andClones())) {
        this.broadcast("sinaleiro");
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      this.moveAhead();
      this.visible = false;
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      this.visible = false;
      yield;
    }
  }

  *whenIReceivePrXima() {
    this.visible = true;
  }

  *whenGreenFlagClicked4() {
    while (true) {
      /* TODO: Implement sensing_setdragmode */ null;
      yield;
    }
  }

  *whenGreenFlagClicked5() {
    this.goto(-66, -143);
  }

  *whenGreenFlagClicked6() {
    while (true) {
      if (this.touching(this.sprites["Poste"].andClones())) {
        this.broadcast("sinaleiro");
      }
      yield;
    }
  }
}
