/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Ator2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("fantasia1", "./Ator2/costumes/fantasia1.svg", {
        x: 59.68180847167969,
        y: 22.431819915771484
      }),
      new Costume("setas-cashback", "./Ator2/costumes/setas-cashback.png", {
        x: 405,
        y: 81
      })
    ];

    this.sounds = [new Sound("saltar", "./Ator2/sounds/saltar.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "setas" }, this.whenIReceiveSetas),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.BROADCAST, { name: "poste" }, this.whenIReceivePoste)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(-52, -12);
    this.size = 100;
    this.costume = "fantasia1";
    this.visible = true;
    yield* this.wait(0.3);
    this.effects.color += 25;
    yield* this.wait(0.3);
    this.effects.color += 25;
    yield* this.wait(0.3);
    this.effects.color += 25;
    yield* this.wait(0.3);
    this.effects.color += 25;
    yield* this.wait(0.2);
    this.effects.color += 25;
    this.broadcast("personagem1");
    this.visible = false;
  }

  *whenIReceiveSetas() {
    this.size = 50;
    this.costume = "setas-cashback";
    this.moveAhead();
    this.visible = true;
    this.broadcast("bb");
    this.broadcast("sombra");
  }

  *whenGreenFlagClicked2() {
    while (true) {
      this.moveAhead();
      yield;
    }
  }

  *whenIReceivePoste() {
    this.visible = false;
  }
}
