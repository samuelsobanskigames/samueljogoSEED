/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("cenário2", "./Stage/costumes/cenário2.svg", {
        x: 241.4318084716797,
        y: 178.81818389892575
      })
    ];

    this.sounds = [new Sound("saltar", "./Stage/sounds/saltar.wav")];

    this.triggers = [];

    this.vars.minhaVariVel = 0;
  }
}
