import AnimaNumeros from "./anima-numeros.js";
import { chamarAPI } from "./chamarAPI.js";

const createAnimal = (animal) => {
  const div = document.createElement("div");
  div.classList.add("numero-animal");
  div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
  return div;
};

export const criarQuantidadeAnimais = async (url, target) => {
  const animaisJSON = await chamarAPI(url);
  const numerosGrid = document.querySelector(target);

  if (!animaisJSON || !numerosGrid) return;

  animaisJSON.forEach((animal) => {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  });

  const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros", "ativo");
  animaNumeros.init();
};
