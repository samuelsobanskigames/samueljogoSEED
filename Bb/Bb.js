/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Bb extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("bb", "./Bb/costumes/bb.png", { x: 43, y: 138 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.BROADCAST, { name: "bb" }, this.whenIReceiveBb),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(
        Trigger.BROADCAST,
        { name: "cenario" },
        this.whenIReceiveCenario
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
      new Trigger(Trigger.BROADCAST, { name: "bb" }, this.whenIReceiveBb2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked6)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    this.goto(-39, -177);
    this.moveAhead();
    this.visible = false;
  }

  *whenIReceiveBb() {
    this.broadcast("sombra");
    this.visible = true;
  }

  *whenGreenFlagClicked3() {
    while (true) {
      /* TODO: Implement sensing_setdragmode */ null;
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    while (true) {
      if (this.touching(this.sprites["Shadow"].andClones())) {
        this.broadcast("bb");
      }
      yield;
    }
  }

  *whenIReceiveCenario() {
    this.visible = false;
  }

  *whenGreenFlagClicked5() {
    while (true) {
      if (this.touching(this.sprites["Shadow"].andClones())) {
        yield* this.broadcastAndWait("poste");
      }
      yield;
    }
  }

  *whenIReceiveBb2() {
    while (true) {
      /* TODO: Implement sensing_setdragmode */ null;
      yield;
    }
  }

  *whenGreenFlagClicked6() {}
}
