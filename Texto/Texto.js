/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Texto extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("fantasia1", "./Texto/costumes/fantasia1.svg", {
        x: 215.613065,
        y: 179.1346470336914
      }),
      new Costume("fantasia2", "./Texto/costumes/fantasia2.svg", {
        x: 238.13560329081034,
        y: 164.1196340673828
      }),
      new Costume("fantasia3", "./Texto/costumes/fantasia3.svg", {
        x: 247.14460641026693,
        y: 215.17068758436787
      }),
      new Costume("fantasia4", "./Texto/costumes/fantasia4.svg", {
        x: 232.4318084716797,
        y: 169.43181228637695
      }),
      new Costume("fantasia5", "./Texto/costumes/fantasia5.svg", {
        x: 211.10857127879828,
        y: 172.99227508103564
      })
    ];

    this.sounds = [new Sound("saltar", "./Texto/sounds/saltar.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "cenario" },
        this.whenIReceiveCenario
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveCenario() {
    this.costume = "fantasia1";
    this.visible = true;
    yield* this.wait(12);
    this.costume = "fantasia2";
    yield* this.wait(18);
    this.costume = "fantasia3";
    yield* this.wait(24);
    this.costume = "fantasia4";
    yield* this.wait(12);
    this.costume = "fantasia5";
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}
