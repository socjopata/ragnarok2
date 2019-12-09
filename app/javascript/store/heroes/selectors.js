import {get, compact, flatMap, filter, isEmpty, values} from 'lodash';
import {createSelector} from 'reselect';

export const characterName = state => get(state, "heroes.character.name");
export const characterId = state => get(state, "heroes.character.id");
export const usedFlexibleSecondaryParameters = state => get(state, "heroes.character.usedFlexibleSecondaryParameters");
export const chosenFlexibleSecondaryParameters = state => get(state, "heroes.character.selectedFlexibleSecondaryParameters");
export const selectedVirtues = state => get(state, "heroes.character.selectedVirtues");
export const allVirtuesSelected = state => compact(state.heroes.character.selectedVirtues).length === 2;
export const regionsFamiliarityChoice = state => get(state, "heroes.character.regionsFamiliarityChoice");

const experiencePointsSpent = state => get(state, "heroes.character.experiencePointsSpent");
const neurostabilityPointsSpent = state => get(state, "heroes.character.neurostabilityPointsSpent");
const moneySpent = state => get(state, "heroes.character.moneySpent");

export const bonusFromVirtues = (state, name, type) => {
  const selectedVirtueParameters = flatMap(compact(selectedVirtues(state)), (virtue) => virtue.parameters);
  return (selectedVirtueParameters.filter(parameter => parameter.name === name && parameter.type === type).reduce((acc, parameter) => +acc + +parameter.value, 0) || 0);
};

export const bonusFromAdvantages = (state, name, type) => {
  const relevantdvantageParameters = filter(
    flatMap(chosenAdvantages(state), 'parameters'),
    parameter => parameter.name === name && parameter.type === type
  );
  return (relevantdvantageParameters.reduce((acc, parameter) => +acc + +parameter.value, 0) || 0);
};

export const chosenImplantsIds = state => {
  if (state.heroes && state.heroes.byId) {
    return (state.heroes.character.chosenImplantsIds);
  }
};

export const chosenImplants = state => {
  if (state.implants && state.implants.byId) {
    const implantsIds = compact(state.heroes.character.chosenImplantsIds);
    const implants = get(state, "implants.byId");

    return (values(implants).filter(implant => implantsIds.includes(implant.id)));
  }
};

export const chosenAdvantagesIds = state => {
  if (state.heroes && state.heroes.byId) {
    return (state.heroes.character.chosenAdvantagesIds);
  }
};

export const chosenAdvantages = state => {
  if (state.advantages && state.advantages.byId) {
    const advantageIds = compact(state.heroes.character.chosenAdvantagesIds);
    const advantages = get(state, "advantages.byId");

    return (values(advantages).filter(advantage => advantageIds.includes(advantage.id)));
  }
};

export const chosenHexerisIds = state => {
  if (state.heroes && state.heroes.byId) {
    return (state.heroes.character.chosenHexerisIds);
  }
};

export const chosenHexeris = state => {
  if (state.advantages && state.advantages.byId) {
    const hexeriIds = compact(state.heroes.character.chosenHexerisIds);
    const advantages = get(state, "advantages.byId");
    //TODO maybe additionally filter out by kind...
    return (values(advantages).filter(advantage => hexeriIds.includes(advantage.id)));
  }
};

export const mainParameterBase = (state, name) => {
  if (state.heroes && state.heroes.byId) {
    const chosenHero = state.heroes.byId[parseInt(state.heroes.character.id)];
    if (chosenHero) {
      const base = chosenHero.parameters.filter(parameter => parameter.name === name && parameter.type === "MainParameter")[0].value;
      const userChanges = get(state, ["heroes", "character", 'mainParametersIncreased', name], 0);

      return (base + userChanges + bonusFromVirtues(state, name, "MainParameter") + bonusFromAdvantages(state, name, "MainParameter"))
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
      const userChanges = get(state, ["heroes", "character", 'secondaryParametersIncreased', name], 0);
      const flexibleSkillChoice = get(chosenFlexibleSecondaryParameters(state), name, 0);

      return (defaultBase + flexibleSkillChoice + userChanges + bonusFromVirtues(state, name, "SecondaryParameter") + bonusFromAdvantages(state, name, "SecondaryParameter"))
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

export const mainParameterUserChanges = (state, name) => {
  //TODO this is a duplication (mainParameterBase), but createSelector kinda didn't fit here
  if (state.heroes && state.heroes.byId) {
    const changes = state.heroes.character.mainParametersIncreased;
    return(get(changes, name, 0));
  }
};

export const secondaryParameterUserChanges = (state, name) => {
  //TODO this is a duplication (mainParameterBase), but createSelector kinda didn't fit here
  if (state.heroes && state.heroes.byId) {
    const changes = state.heroes.character.secondaryParametersIncreased;
    return(get(changes, name, 0));
  }
};

export const mainParameterBodyBuildingTotal = state => mainParameterTotal(state, 'physique');
export const mainParameterDexterityTotal = state => mainParameterTotal(state, 'dexterity');
export const mainParameterPerceptionTotal = state => mainParameterTotal(state, 'perception');
export const mainParameterInteligenceTotal = state => mainParameterTotal(state, 'inteligence');
export const mainParameterSelfControlTotal = state => mainParameterTotal(state, 'self_control');
export const mainParameterEntropyTotal = state => mainParameterTotal(state, 'entropy');

const focusFromVirtues = state => bonusFromVirtues(state, 'focus', "VirtualParameter");
const neurostabilityFromVirtues = state => bonusFromVirtues(state, 'neurostability', "VirtualParameter");
const sportinessFromVirtues = state => bonusFromVirtues(state, 'sportiness', "VirtualParameter");
const movementSpeedFromVirtues = state => bonusFromVirtues(state, 'movement_speed', "VirtualParameter");
const hitPointsFromVirtues = state => bonusFromVirtues(state, 'hit_points', "VirtualParameter");
const powerFromVirtues = state => bonusFromVirtues(state, 'power', "VirtualParameter");
const apparitionFromVirtues = state => bonusFromVirtues(state, 'apparition', "VirtualParameter");
const moneyFromVirtues = state => bonusFromVirtues(state, 'money', "VirtualParameter");

const focusFromAdvantages = state => bonusFromAdvantages(state, 'focus', "VirtualParameter");
const neurostabilityFromAdvantages = state => bonusFromAdvantages(state, 'neurostability', "VirtualParameter");
const sportinessFromAdvantages = state => bonusFromAdvantages(state, 'sportiness', "VirtualParameter");
const movementSpeedFromAdvantages = state => bonusFromAdvantages(state, 'movement_speed', "VirtualParameter");
const hitPointsFromAdvantages = state => bonusFromAdvantages(state, 'hit_points', "VirtualParameter");
const powerFromAdvantages = state => bonusFromAdvantages(state, 'power', "VirtualParameter");
const apparitionFromAdvantages = state => bonusFromAdvantages(state, 'apparition', "VirtualParameter");
const moneyFromAdvantages = state => bonusFromAdvantages(state, 'money', "VirtualParameter");

export const flexibleParameters = createSelector(heroSelected, (
  chosenHero) => {
    if (chosenHero) {
      return (chosenHero.parameters.filter(parameter => parameter.name.includes("_or_") || parameter.name.includes("any_") && parameter.type === "SecondaryParameter"));
    }
  }
);

export const allFlexibleParametersAssigned = createSelector(heroSelected, flexibleParameters, usedFlexibleSecondaryParameters,
  (chosenHero, flexibleParameters, usedFlexibleSecondaryParameters) => {
    if (chosenHero) {
      if (flexibleParameters.length === 0) {
        return true
      }
      return (flexibleParameters.length === usedFlexibleSecondaryParameters.length);
    }
  }
);

export const experiencePoints = createSelector(heroSelected, mainParameterInteligenceTotal, experiencePointsSpent,
  (chosenHero, inteligenceTotal, experiencePointsSpent) => {
    if (chosenHero) {
      const defaultBase = 10;
      const defaultInteligenceMultiplier = 3;
      return (defaultBase + inteligenceTotal * defaultInteligenceMultiplier - experiencePointsSpent)
    }
  }
);

export const focus = createSelector(heroSelected, mainParameterSelfControlTotal, mainParameterEntropyTotal, focusFromVirtues, focusFromAdvantages,
  (chosenHero, selfControlTotal, entropyTotal, fromVirtues, fromAdvantages) => {
    if (chosenHero) {
      return (selfControlTotal + entropyTotal + fromVirtues + fromAdvantages)
    }
  }
);

export const neurostability = createSelector(heroSelected, mainParameterInteligenceTotal, neurostabilityFromVirtues, neurostabilityFromAdvantages, neurostabilityPointsSpent, selectedVirtues,
  (chosenHero, inteligenceTotal, fromVirtues, fromAdvantages, neurostabilityPointsSpent, selectedVirtues) => {
    if (chosenHero) {
      const cyberneticBody = !isEmpty(compact(selectedVirtues).filter(virtue => virtue.internal_name === "cybernetic_body"));
      const baseMultiplier = cyberneticBody ? 10 : 5;
      return ((inteligenceTotal * baseMultiplier) + fromVirtues + fromAdvantages - neurostabilityPointsSpent)
    }
  }
);

export const sportiness = createSelector(heroSelected, mainParameterBodyBuildingTotal, mainParameterDexterityTotal, sportinessFromVirtues, sportinessFromAdvantages,
  (chosenHero, bodyBulidingTotal, dexterityTotal, fromVirtues, fromAdvantages) => {
    if (chosenHero) {
      return (bodyBulidingTotal + dexterityTotal + fromVirtues + fromAdvantages)
    }
  }
);

export const movementSpeed = createSelector(heroSelected, sportiness, movementSpeedFromVirtues, movementSpeedFromAdvantages,
  (chosenHero, sportiness, fromVirtues, fromAdvantages) => {
    if (chosenHero) {
      const defaultValue = 5;
      return (sportiness + defaultValue + fromVirtues + fromAdvantages)
    }
  }
);

export const hitPoints = createSelector(heroSelected, mainParameterBodyBuildingTotal, hitPointsFromVirtues, hitPointsFromAdvantages,
  (chosenHero, bodyBuildingTotal, fromVirtues, fromAdvantages) => {
    if (chosenHero) {
      const defaultValue = 10;
      const defaultMultiplier = 5;
      return (bodyBuildingTotal * defaultMultiplier + defaultValue + fromVirtues + fromAdvantages)
    }
  }
);

export const power = createSelector(heroSelected, mainParameterInteligenceTotal, powerFromVirtues, powerFromAdvantages,
  (chosenHero, inteligenceTotal, fromVirtues, fromAdvantages) => {
    if (chosenHero) {
      const defaultMultiplier = 5;
      return ((inteligenceTotal * defaultMultiplier) + fromVirtues + fromAdvantages)
    }
  }
);

export const apparition = createSelector(heroSelected, mainParameterBodyBuildingTotal, mainParameterEntropyTotal, apparitionFromVirtues, apparitionFromAdvantages,
  (chosenHero, bodyBuildingTotal, entropyTotal, fromVirtues, fromAdvantages) => {
    if (chosenHero) {
      return (bodyBuildingTotal + entropyTotal + fromVirtues + fromAdvantages)
    }
  }
);

export const money = createSelector(heroSelected, moneyFromVirtues, moneyFromAdvantages, moneySpent,
  (chosenHero, fromVirtues, fromAdvantages, moneySpent) => {
    if (chosenHero) {
      const defaultAmount = 1500;
      // #FIXME edge cases like Techmistrz
      return (defaultAmount + fromVirtues + fromAdvantages - moneySpent);
    }
  }
);
