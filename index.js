import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import FundoDoVetorDaRuaJogoComCasa118788739RemovebgPreview from "./FundoDoVetorDaRuaJogoComCasa118788739RemovebgPreview/FundoDoVetorDaRuaJogoComCasa118788739RemovebgPreview.js";
import PSinalizacaoSonoraParaDeficientes10946537291530728736819RemovebgPreview from "./PSinalizacaoSonoraParaDeficientes10946537291530728736819RemovebgPreview/PSinalizacaoSonoraParaDeficientes10946537291530728736819RemovebgPreview.js";
import MulherSorridenteEmpurrandoCadeiraDeRodasComUmHomemDeficienteParaCimaNaIlustraODoVetorRampaJovensSexo232099905 from "./MulherSorridenteEmpurrandoCadeiraDeRodasComUmHomemDeficienteParaCimaNaIlustraODoVetorRampaJovensSexo232099905/MulherSorridenteEmpurrandoCadeiraDeRodasComUmHomemDeficienteParaCimaNaIlustraODoVetorRampaJovensSexo232099905.js";
import Faixa from "./Faixa/Faixa.js";
import Ator1 from "./Ator1/Ator1.js";
import _1 from "./_1/_1.js";
import Ator2 from "./Ator2/Ator2.js";
import Shadow from "./Shadow/Shadow.js";
import Sombra2 from "./Sombra2/Sombra2.js";
import Bb from "./Bb/Bb.js";
import Poste from "./Poste/Poste.js";
import SombraFaixa from "./SombraFaixa/SombraFaixa.js";
import Sombra3 from "./Sombra3/Sombra3.js";
import Texto from "./Texto/Texto.js";
import Aaa from "./Aaa/Aaa.js";
import Aaa2 from "./Aaa2/Aaa2.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  FundoDoVetorDaRuaJogoComCasa118788739RemovebgPreview: new FundoDoVetorDaRuaJogoComCasa118788739RemovebgPreview(
    {
      x: 1,
      y: -6,
      direction: 90,
      costumeNumber: 1,
      size: 100,
      visible: false,
      layerOrder: 5
    }
  ),
  PSinalizacaoSonoraParaDeficientes10946537291530728736819RemovebgPreview: new PSinalizacaoSonoraParaDeficientes10946537291530728736819RemovebgPreview(
    {
      x: 157,
      y: 10,
      direction: 90,
      costumeNumber: 1,
      size: 25,
      visible: false,
      layerOrder: 16
    }
  ),
  MulherSorridenteEmpurrandoCadeiraDeRodasComUmHomemDeficienteParaCimaNaIlustraODoVetorRampaJovensSexo232099905: new MulherSorridenteEmpurrandoCadeiraDeRodasComUmHomemDeficienteParaCimaNaIlustraODoVetorRampaJovensSexo232099905(
    {
      x: -2.000002225240223,
      y: 50,
      direction: 90,
      costumeNumber: 1,
      size: 100,
      visible: false,
      layerOrder: 3
    }
  ),
  Faixa: new Faixa({
    x: 182,
    y: -109,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 12
  }),
  Ator1: new Ator1({
    x: 161.00000794728635,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 4
  }),
  _1: new _1({
    x: 92.00000044504803,
    y: -122,
    direction: 90,
    costumeNumber: 3,
    size: 70,
    visible: false,
    layerOrder: 2
  }),
  Ator2: new Ator2({
    x: -52,
    y: -12,
    direction: 90,
    costumeNumber: 2,
    size: 50,
    visible: false,
    layerOrder: 15
  }),
  Shadow: new Shadow({
    x: -136,
    y: 74,
    direction: 90,
    costumeNumber: 1,
    size: 80,
    visible: false,
    layerOrder: 10
  }),
  Sombra2: new Sombra2({
    x: 157.0000076929733,
    y: 6,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 7
  }),
  Bb: new Bb({
    x: -153,
    y: 31,
    direction: 90,
    costumeNumber: 1,
    size: 110.00000000000001,
    visible: false,
    layerOrder: 9
  }),
  Poste: new Poste({
    x: 137,
    y: 37,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 11
  }),
  SombraFaixa: new SombraFaixa({
    x: 180,
    y: -175,
    direction: 90,
    costumeNumber: 1,
    size: 80,
    visible: false,
    layerOrder: 8
  }),
  Sombra3: new Sombra3({
    x: 165.99999879201243,
    y: 11,
    direction: 90,
    costumeNumber: 1,
    size: 15,
    visible: false,
    layerOrder: 14
  }),
  Texto: new Texto({
    x: 2.999997901916373,
    y: -17,
    direction: 90,
    costumeNumber: 4,
    size: 100,
    visible: true,
    layerOrder: 1
  }),
  Aaa: new Aaa({
    x: -221,
    y: 3,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 6
  }),
  Aaa2: new Aaa2({
    x: -219,
    y: 6,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 13
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
