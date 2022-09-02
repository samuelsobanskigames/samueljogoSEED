/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1", "./_1/costumes/1.png", { x: 397, y: 322 }),
      new Costume("3", "./_1/costumes/3.svg", { x: 207.5, y: 167 }),
      new Costume("4", "./_1/costumes/4.svg", { x: 285.98545, y: 170.05807 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "personagem1" },
        this.whenIReceivePersonagem1
      ),
      new Trigger(Trigger.BROADCAST, { name: "fala5" }, this.whenIReceiveFala5)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceivePersonagem1() {
    this.costume = 1;
    this.visible = true;
    yield* this.wait(5);
    this.costume = 3;
    yield* this.wait(5);
    this.costume = 4;
    yield* this.wait(5);
    this.broadcast("play");
    yield* this.broadcastAndWait("bb");
    this.visible = false;
  }

  *whenIReceiveFala5() {
    this.costume = 3;
    if (this.keyPressed("space")) {
      this.broadcast("play");
    }
  }
}
