import {get} from 'lodash';

export const getHeroes = state => ({
  ...state.heroes.list,
  data: state.heroes.list.ids.map(id => state.heroes.byId[id]),
});

export const characterName = state => get(state, "heroes.character.name");
export const characterId = state => get(state, "heroes.character.id");

const _mainParameterBase = (state, name) => {
  if (state.heroes && state.heroes.byId) {
    const chosenHero = state.heroes.byId[parseInt(state.heroes.character.id)];
    if (chosenHero) {
      const base = chosenHero.parameters.filter(parameter => parameter.name === name)[0].value;
      return (base)
    } else {
      return 0
    }
  }
};

export const mainParameterBodyBuildingBase = (state) => _mainParameterBase(state, 'physique');
export const mainParameterBodyBuildingFromImplants = state => 0;
export const mainParameterBodyBuildingTotal = state => mainParameterBodyBuildingBase(state) + mainParameterBodyBuildingFromImplants(state);

export const mainParameterDexterityBase = state => _mainParameterBase(state, 'dexerity');
export const mainParameterDexterityFromImplants = state => 0;
export const mainParameterDexterityTotal = state => mainParameterDexterityBase(state) + mainParameterDexterityFromImplants(state);

export const mainParameterPerceptionBase = state => _mainParameterBase(state, 'perception');
export const mainParameterPerceptionFromImplants = state => 0;
export const mainParameterPerceptionTotal = state => mainParameterPerceptionBase(state) + mainParameterPerceptionFromImplants(state);

export const mainParameterInteligenceBase = state => _mainParameterBase(state, 'inteligence');
export const mainParameterInteligenceFromImplants = state => 0;
export const mainParameterInteligenceTotal = state => mainParameterInteligenceBase(state) + mainParameterInteligenceFromImplants(state);

export const mainParameterSelfControlBase = state => _mainParameterBase(state, 'self_control');
export const mainParameterSelfControlFromImplants = state => 0;
export const mainParameterSelfControlTotal = state => mainParameterSelfControlBase(state) + mainParameterSelfControlFromImplants(state);

export const mainParameterEntropyBase = state => _mainParameterBase(state, 'entropy');
export const mainParameterEntropyFromImplants = state => 0;
export const mainParameterEntropyTotal = state => mainParameterEntropyBase(state) + mainParameterEntropyFromImplants(state);

export const experiencePoints = (state) => {
  if (state.heroes && state.heroes.byId) {
    const chosenHero = state.heroes.byId[parseInt(state.heroes.character.id)];
    if (chosenHero) {
      const defaultBase = 10;
      const defaultInteligenceMultiplier = 3;
      return (defaultBase + mainParameterInteligenceTotal(state) * defaultInteligenceMultiplier)
    }
  }
};

export const focus = (state) => {
  if (state.heroes && state.heroes.byId) {
    const chosenHero = state.heroes.byId[parseInt(state.heroes.character.id)];
    if (chosenHero) {
      return (mainParameterSelfControlTotal(state) + mainParameterEntropyTotal(state))
    }
  }
};

export const neurostability = (state) => {
  if (state.heroes && state.heroes.byId) {
    const chosenHero = state.heroes.byId[parseInt(state.heroes.character.id)];
    if (chosenHero) {
      const baseMultiplier = 5;
      return (mainParameterInteligenceTotal(state) * baseMultiplier)
    }
  }
};

export const sportiness = (state) => {
  if (state.heroes && state.heroes.byId) {
    const chosenHero = state.heroes.byId[parseInt(state.heroes.character.id)];
    if (chosenHero) {
      return (mainParameterBodyBuildingTotal(state) + mainParameterDexterityTotal(state))
    }
  }
};

export const movementSpeed = (state) => {
  if (state.heroes && state.heroes.byId) {
    const chosenHero = state.heroes.byId[parseInt(state.heroes.character.id)];
    if (chosenHero) {
      const defaultValue = 5;
      return (sportiness(state) + defaultValue)
    }
  }
};

export const hitPoints = (state) => {
  if (state.heroes && state.heroes.byId) {
    const chosenHero = state.heroes.byId[parseInt(state.heroes.character.id)];
    if (chosenHero) {
      const defaultValue = 10;
      const defaultMultiplier = 5;
      return (mainParameterBodyBuildingTotal(state) * defaultMultiplier + defaultValue)
    }
  }
};
