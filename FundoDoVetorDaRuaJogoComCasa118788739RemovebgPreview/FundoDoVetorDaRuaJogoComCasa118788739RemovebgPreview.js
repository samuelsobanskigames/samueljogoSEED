/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class FundoDoVetorDaRuaJogoComCasa118788739RemovebgPreview extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "fundo-do-vetor-da-rua-jogo-com-casa-118788739-removebg-preview",
        "./FundoDoVetorDaRuaJogoComCasa118788739RemovebgPreview/costumes/fundo-do-vetor-da-rua-jogo-com-casa-118788739-removebg-preview.png",
        { x: 480, y: 158 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
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
    this.goto(1, -6);
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    this.visible = false;
    this.visible = false;
  }

  *whenIReceivePlay() {
    this.visible = true;
  }

  *whenIReceiveCenario() {
    this.visible = false;
  }

  *whenIReceiveCenario2() {}
}
