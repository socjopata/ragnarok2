import {get} from 'lodash';
import {createSelector} from 'reselect';

export const getHeroes = state => ({
  ...state.heroes.list,
  data: state.heroes.list.ids.map(id => state.heroes.byId[id]),
});

export const characterName = state => get(state, "heroes.character.name");
export const characterId = state => get(state, "heroes.character.id");
export const usedFlexibleSecondaryParameters = state => get(state, "heroes.character.usedFlexibleSecondaryParameters");
export const chosenFlexibleSecondaryParameters = state => get(state, "heroes.character.selectedFlexibleSecondaryParameters");

export const mainParameterBase = (state, name) => {
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

export const mainParameterFromImplants = (state, name) => {
  return(0);
};

export const mainParameterTotal = (state, name) => {
  return(mainParameterBase(state, name) + mainParameterFromImplants(state, name))
};

export const secondaryParameterBase = (state, name) => {
  if (state.heroes && state.heroes.byId) {
    const chosenHero = state.heroes.byId[parseInt(state.heroes.character.id)];
    if (chosenHero) {
      const defaultBase = chosenHero.parameters.filter(parameter => parameter.name === name && parameter.type === "SecondaryParameter")[0].value;
      const flexibleSkillChoice = get(chosenFlexibleSecondaryParameters(state), name, 0);
      return (defaultBase + flexibleSkillChoice)
    } else {
      return 0
    }
  }
};

export const secondaryParameterFromImplants = (state, name) => {
  return(0);
};

export const secondaryParameterBonus = (state, name) => {
  return(0);
};

export const secondaryParameterTotal = (state, name) => {
  return(secondaryParameterBase(state, name) + secondaryParameterFromImplants(state, name) + secondaryParameterBonus(state, name));
};

export const secondaryParameterTotalBonus = (state, mainName, secondaryName) => {
  return(mainParameterTotal(state, mainName) + secondaryParameterTotal(state, secondaryName));
};

export const heroSelected = (state) => {
  const currentHeroId = _.toNumber(_.get(state, 'heroes.character.id'));
  return _.get(state, ['heroes', 'byId', currentHeroId])
};

export const mainParameterBodyBuildingTotal = state => mainParameterTotal(state, 'physique');
export const mainParameterDexterityTotal = state => mainParameterTotal(state, 'dexterity');
export const mainParameterPerceptionTotal = state => mainParameterTotal(state, 'perception');
export const mainParameterInteligenceTotal = state => mainParameterTotal(state, 'inteligence');
export const mainParameterSelfControlTotal = state => mainParameterTotal(state, 'self_control');
export const mainParameterEntropyTotal = state => mainParameterTotal(state, 'entropy');

export const experiencePoints = createSelector(heroSelected, mainParameterInteligenceTotal,
  (chosenHero, inteligenceTotal) => {
    if (chosenHero) {
      const defaultBase = 10;
      const defaultInteligenceMultiplier = 3;
      return (defaultBase + inteligenceTotal * defaultInteligenceMultiplier)
    }
  }
);

export const focus = createSelector(heroSelected, mainParameterSelfControlTotal, mainParameterEntropyTotal,
  (chosenHero, selfControlTotal, entropyTotal) => {
    if (chosenHero) {
      return (selfControlTotal + entropyTotal)
    }
  }
);

export const neurostability = createSelector(heroSelected, mainParameterInteligenceTotal,
  (chosenHero, inteligenceTotal) => {
    if (chosenHero) {
      const baseMultiplier = 5;
      return (inteligenceTotal * baseMultiplier)
    }
  }
);

export const sportiness = createSelector(heroSelected, mainParameterBodyBuildingTotal, mainParameterDexterityTotal,
  (chosenHero, bodyBulidingTotal, dexterityTotal) => {
    if (chosenHero) {
      return (bodyBulidingTotal + dexterityTotal)
    }
  }
);

export const movementSpeed = createSelector(heroSelected, sportiness,
  (chosenHero, sportiness) => {
    if (chosenHero) {
      const defaultValue = 5;
      return (sportiness + defaultValue)
    }
  }
);

export const hitPoints = createSelector(heroSelected, mainParameterBodyBuildingTotal,
  (chosenHero, bodyBuildingTotal) => {
    if (chosenHero) {
      const defaultValue = 10;
      const defaultMultiplier = 5;
      return (bodyBuildingTotal * defaultMultiplier + defaultValue)
    }
  }
);

export const power = createSelector(heroSelected, mainParameterInteligenceTotal,
  (chosenHero, inteligenceTotal) => {
    if (chosenHero) {
      const defaultMultiplier = 5;
      return (inteligenceTotal * defaultMultiplier)
    }
  }
);

export const apparition = createSelector(heroSelected, mainParameterBodyBuildingTotal, mainParameterEntropyTotal,
  (chosenHero, bodyBuildingTotal, entropyTotal) => {
    if (chosenHero) {
      return (bodyBuildingTotal + entropyTotal)
    }
  }
);
