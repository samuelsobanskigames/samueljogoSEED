/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class MulherSorridenteEmpurrandoCadeiraDeRodasComUmHomemDeficienteParaCimaNaIlustraODoVetorRampaJovensSexo232099905 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "mulher-sorridente-empurrando-cadeira-de-rodas-com-um-homem-deficiente-para-cima-na-ilustração-do-vetor-rampa-jovens-sexo-232099905",
        "./MulherSorridenteEmpurrandoCadeiraDeRodasComUmHomemDeficienteParaCimaNaIlustraODoVetorRampaJovensSexo232099905/costumes/mulher-sorridente-empurrando-cadeira-de-rodas-com-um-homem-deficiente-para-cima-na-ilustração-do-vetor-rampa-jovens-sexo-232099905.png",
        { x: 480, y: 351 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.BROADCAST, { name: "play" }, this.whenIReceivePlay),
      new Trigger(
        Trigger.BROADCAST,
        { name: "cenario" },
        this.whenIReceiveCenario
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    this.visible = false;
  }

  *whenGreenFlagClicked3() {
    this.visible = false;
  }

  *whenGreenFlagClicked4() {
    this.visible = false;
  }

  *whenIReceivePlay() {
    this.visible = true;
  }

  *whenIReceiveCenario() {
    while (true) {
      this.visible = false;
      yield;
    }
  }
}
