import {get} from 'lodash';
import {createSelector} from 'reselect';

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
      const base = chosenHero.parameters.filter(parameter => parameter.name === name && parameter.type === "MainParameter")[0].value;
      return (base)
    } else {
      return 0
    }
  }
};

const _secondaryParameterBase = (state, name) => {
  if (state.heroes && state.heroes.byId) {
    const chosenHero = state.heroes.byId[parseInt(state.heroes.character.id)];
    if (chosenHero) {
      const base = chosenHero.parameters.filter(parameter => parameter.name === name && parameter.type === "SecondaryParameter")[0].value;
      return (base)
    } else {
      return 0
    }
  }
};

const _heroSelected = (state) => {
  const currentHeroId = _.toNumber(_.get(state, 'heroes.character.id'));
  return _.get(state, ['heroes', 'byId', currentHeroId])
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

export const experiencePoints = createSelector(_heroSelected, mainParameterInteligenceTotal,
  (chosenHero, inteligenceTotal) => {
    if (chosenHero) {
      const defaultBase = 10;
      const defaultInteligenceMultiplier = 3;
      return (defaultBase + inteligenceTotal * defaultInteligenceMultiplier)
    }
  }
);

export const focus = createSelector(_heroSelected, mainParameterSelfControlTotal, mainParameterEntropyTotal,
  (chosenHero, selfControlTotal, entropyTotal) => {
    if (chosenHero) {
      return (selfControlTotal + entropyTotal)
    }
  }
);

export const neurostability = createSelector(_heroSelected, mainParameterInteligenceTotal,
  (chosenHero, inteligenceTotal) => {
    if (chosenHero) {
      const baseMultiplier = 5;
      return (inteligenceTotal * baseMultiplier)
    }
  }
);

export const sportiness = createSelector(_heroSelected, mainParameterBodyBuildingTotal, mainParameterDexterityTotal,
  (chosenHero, bodyBulidingTotal, dexterityTotal) => {
    if (chosenHero) {
      return (bodyBulidingTotal + dexterityTotal)
    }
  }
);

export const movementSpeed = createSelector(_heroSelected, sportiness,
  (chosenHero, sportiness) => {
    if (chosenHero) {
      const defaultValue = 5;
      return (sportiness + defaultValue)
    }
  }
);

export const hitPoints = createSelector(_heroSelected, mainParameterBodyBuildingTotal,
  (chosenHero, bodyBuildingTotal) => {
    if (chosenHero) {
      const defaultValue = 10;
      const defaultMultiplier = 5;
      return (bodyBuildingTotal * defaultMultiplier + defaultValue)
    }
  }
);

export const power = createSelector(_heroSelected, mainParameterInteligenceTotal,
  (chosenHero, inteligenceTotal) => {
    if (chosenHero) {
      const defaultMultiplier = 5;
      return (inteligenceTotal * defaultMultiplier)
    }
  }
);

export const apparition = createSelector(_heroSelected, mainParameterBodyBuildingTotal, mainParameterEntropyTotal,
  (chosenHero, bodyBuildingTotal, entropyTotal) => {
    if (chosenHero) {
      return (bodyBuildingTotal + entropyTotal)
    }
  }
);

export const secondaryParameterFencingBase = (state) => _secondaryParameterBase(state, 'fencing');
export const secondaryParameterFencingFromImplants = state => 0;
export const secondaryParameterFencingBonus = state => 0;
export const secondaryParameterFencingTotal = state => secondaryParameterFencingBase(state) + secondaryParameterFencingFromImplants(state) + secondaryParameterFencingBonus(state);

export const secondaryParameterMartialArtsBase = (state) => _secondaryParameterBase(state, 'martial_arts');
export const secondaryParameterMartialArtsFromImplants = state => 0;
export const secondaryParameterMartialArtsBonus = state => 0;
export const secondaryParameterMartialArtsTotal = state => secondaryParameterMartialArtsBase(state) + secondaryParameterMartialArtsFromImplants(state) + secondaryParameterMartialArtsBonus(state);
