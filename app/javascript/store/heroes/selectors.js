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

const _secondaryParameterBase = (state, name) => {
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

export const secondaryParameterFencingBase = (state) => _secondaryParameterBase(state, 'fencing');
export const secondaryParameterFencingFromImplants = state => 0;
export const secondaryParameterFencingBonus = state => 0;
export const secondaryParameterFencingTotal = state => secondaryParameterFencingBase(state) + secondaryParameterFencingFromImplants(state) + secondaryParameterFencingBonus(state);
export const secondaryParameterFencingTotalBonus = createSelector(heroSelected, mainParameterBodyBuildingTotal, secondaryParameterFencingTotal,
  (chosenHero, total1, total2) => {
    return (total1 + total2)
  }
);

export const secondaryParameterMartialArtsBase = (state) => _secondaryParameterBase(state, 'martial_arts');
export const secondaryParameterMartialArtsFromImplants = state => 0;
export const secondaryParameterMartialArtsBonus = state => 0;
export const secondaryParameterMartialArtsTotal = state => secondaryParameterMartialArtsBase(state) + secondaryParameterMartialArtsFromImplants(state) + secondaryParameterMartialArtsBonus(state);
export const secondaryParameterMartialArtsTotalBonus = createSelector(heroSelected, mainParameterBodyBuildingTotal, secondaryParameterMartialArtsTotal,
  (chosenHero, total1, total2) => {
    return (total1 + total2)
  }
);

export const secondaryParameterEnduranceBase = (state) => _secondaryParameterBase(state, 'endurance');
export const secondaryParameterEnduranceFromImplants = state => 0;
export const secondaryParameterEnduranceBonus = state => 0;
export const secondaryParameterEnduranceTotal = state => secondaryParameterEnduranceBase(state) + secondaryParameterEnduranceFromImplants(state) + secondaryParameterEnduranceBonus(state);
export const secondaryParameterEnduranceTotalBonus = createSelector(heroSelected, mainParameterBodyBuildingTotal, secondaryParameterEnduranceTotal,
  (chosenHero, total1, total2) => {
    return (total1 + total2)
  }
);

export const secondaryParameterPistolsBase = (state) => _secondaryParameterBase(state, 'pistols');
export const secondaryParameterPistolsFromImplants = state => 0;
export const secondaryParameterPistolsBonus = state => 0;
export const secondaryParameterPistolsTotal = state => secondaryParameterPistolsBase(state) + secondaryParameterPistolsFromImplants(state) + secondaryParameterPistolsBonus(state);
export const secondaryParameterPistolsTotalBonus = createSelector(heroSelected, mainParameterDexterityTotal, secondaryParameterPistolsTotal,
  (chosenHero, total1, total2) => {
    return (total1 + total2)
  }
);

export const secondaryParameterVehicleHandlingBase = (state) => _secondaryParameterBase(state, 'vehicle_handling');
export const secondaryParameterVehicleHandlingFromImplants = state => 0;
export const secondaryParameterVehicleHandlingBonus = state => 0;
export const secondaryParameterVehicleHandlingTotal = state => secondaryParameterVehicleHandlingBase(state) + secondaryParameterVehicleHandlingFromImplants(state) + secondaryParameterVehicleHandlingBonus(state);
export const secondaryParameterVehicleHandlingTotalBonus = createSelector(heroSelected, mainParameterDexterityTotal, secondaryParameterVehicleHandlingTotal,
  (chosenHero, total1, total2) => {
    return (total1 + total2)
  }
);

export const secondaryParameterReflexBase = (state) => _secondaryParameterBase(state, 'reflex');
export const secondaryParameterReflexFromImplants = state => 0;
export const secondaryParameterReflexBonus = state => 0;
export const secondaryParameterReflexTotal = state => secondaryParameterReflexBase(state) + secondaryParameterReflexFromImplants(state) + secondaryParameterReflexBonus(state);
export const secondaryParameterReflexTotalBonus = createSelector(heroSelected, mainParameterDexterityTotal, secondaryParameterReflexTotal,
  (chosenHero, total1, total2) => {
    return (total1 + total2)
  }
);

export const secondaryParameterRiflesBase = (state) => _secondaryParameterBase(state, 'rifles');
export const secondaryParameterRiflesFromImplants = state => 0;
export const secondaryParameterRiflesBonus = state => 0;
export const secondaryParameterRiflesTotal = state => secondaryParameterRiflesBase(state) + secondaryParameterRiflesFromImplants(state) + secondaryParameterRiflesBonus(state);
export const secondaryParameterRiflesTotalBonus = createSelector(heroSelected, mainParameterPerceptionTotal, secondaryParameterRiflesTotal,
  (chosenHero, total1, total2) => {
    return (total1 + total2)
  }
);

export const secondaryParameterSpaceshipsHandlingBase = (state) => _secondaryParameterBase(state, 'spaceships_handling');
export const secondaryParameterSpaceshipsHandlingFromImplants = state => 0;
export const secondaryParameterSpaceshipsHandlingBonus = state => 0;
export const secondaryParameterSpaceshipsHandlingTotal = state => secondaryParameterSpaceshipsHandlingBase(state) + secondaryParameterSpaceshipsHandlingFromImplants(state) + secondaryParameterSpaceshipsHandlingBonus(state);
export const secondaryParameterSpaceshipsHandlingTotalBonus = createSelector(heroSelected, mainParameterPerceptionTotal, secondaryParameterSpaceshipsHandlingTotal,
  (chosenHero, total1, total2) => {
    return (total1 + total2)
  }
);

export const secondaryParameterSensesBase = (state) => _secondaryParameterBase(state, 'senses');
export const secondaryParameterSensesFromImplants = state => 0;
export const secondaryParameterSensesBonus = state => 0;
export const secondaryParameterSensesTotal = state => secondaryParameterSensesBase(state) + secondaryParameterSensesFromImplants(state) + secondaryParameterSensesBonus(state);
export const secondaryParameterSensesTotalBonus = createSelector(heroSelected, mainParameterPerceptionTotal, secondaryParameterSensesTotal,
  (chosenHero, total1, total2) => {
    return (total1 + total2)
  }
);

export const secondaryParameterConnectionsBase = (state) => _secondaryParameterBase(state, 'connections');
export const secondaryParameterConnectionsFromImplants = state => 0;
export const secondaryParameterConnectionsBonus = state => 0;
export const secondaryParameterConnectionsTotal = state => secondaryParameterConnectionsBase(state) + secondaryParameterConnectionsFromImplants(state) + secondaryParameterConnectionsBonus(state);
export const secondaryParameterConnectionsTotalBonus = createSelector(heroSelected, mainParameterInteligenceTotal, secondaryParameterConnectionsTotal,
  (chosenHero, total1, total2) => {
    return (total1 + total2)
  }
);

export const secondaryParameterTechnologyBase = (state) => _secondaryParameterBase(state, 'technology');
export const secondaryParameterTechnologyFromImplants = state => 0;
export const secondaryParameterTechnologyBonus = state => 0;
export const secondaryParameterTechnologyTotal = state => secondaryParameterTechnologyBase(state) + secondaryParameterTechnologyFromImplants(state) + secondaryParameterTechnologyBonus(state);
export const secondaryParameterTechnologyTotalBonus = createSelector(heroSelected, mainParameterInteligenceTotal, secondaryParameterTechnologyTotal,
  (chosenHero, total1, total2) => {
    return (total1 + total2)
  }
);

export const secondaryParameterKnowledgeBase = (state) => _secondaryParameterBase(state, 'knowledge');
export const secondaryParameterKnowledgeFromImplants = state => 0;
export const secondaryParameterKnowledgeBonus = state => 0;
export const secondaryParameterKnowledgeTotal = state => secondaryParameterKnowledgeBase(state) + secondaryParameterKnowledgeFromImplants(state) + secondaryParameterKnowledgeBonus(state);
export const secondaryParameterKnowledgeTotalBonus = createSelector(heroSelected, mainParameterInteligenceTotal, secondaryParameterKnowledgeTotal,
  (chosenHero, total1, total2) => {
    return (total1 + total2)
  }
);

export const secondaryParameterHackingBase = (state) => _secondaryParameterBase(state, 'hacking');
export const secondaryParameterHackingFromImplants = state => 0;
export const secondaryParameterHackingBonus = state => 0;
export const secondaryParameterHackingTotal = state => secondaryParameterHackingBase(state) + secondaryParameterHackingFromImplants(state) + secondaryParameterHackingBonus(state);
export const secondaryParameterHackingTotalBonus = createSelector(heroSelected, mainParameterSelfControlTotal, secondaryParameterHackingTotal,
  (chosenHero, total1, total2) => {
    return (total1 + total2)
  }
);

export const secondaryParameterInfiltrationBase = (state) => _secondaryParameterBase(state, 'infiltration');
export const secondaryParameterInfiltrationFromImplants = state => 0;
export const secondaryParameterInfiltrationBonus = state => 0;
export const secondaryParameterInfiltrationTotal = state => secondaryParameterInfiltrationBase(state) + secondaryParameterInfiltrationFromImplants(state) + secondaryParameterInfiltrationBonus(state);
export const secondaryParameterInfiltrationTotalBonus = createSelector(heroSelected, mainParameterSelfControlTotal, secondaryParameterInfiltrationTotal,
  (chosenHero, total1, total2) => {
    return (total1 + total2)
  }
);

export const secondaryParameterTrickAndSubterfugeBase = (state) => _secondaryParameterBase(state, 'trick_and_subterfuge');
export const secondaryParameterTrickAndSubterfugeFromImplants = state => 0;
export const secondaryParameterTrickAndSubterfugeBonus = state => 0;
export const secondaryParameterTrickAndSubterfugeTotal = state => secondaryParameterTrickAndSubterfugeBase(state) + secondaryParameterTrickAndSubterfugeFromImplants(state) + secondaryParameterTrickAndSubterfugeBonus(state);
export const secondaryParameterTrickAndSubterfugeTotalBonus = createSelector(heroSelected, mainParameterSelfControlTotal, secondaryParameterTrickAndSubterfugeTotal,
  (chosenHero, total1, total2) => {
    return (total1 + total2)
  }
);

export const secondaryParameterCharismaBase = (state) => _secondaryParameterBase(state, 'charisma');
export const secondaryParameterCharismaFromImplants = state => 0;
export const secondaryParameterCharismaBonus = state => 0;
export const secondaryParameterCharismaTotal = state => secondaryParameterCharismaBase(state) + secondaryParameterCharismaFromImplants(state) + secondaryParameterCharismaBonus(state);
export const secondaryParameterCharismaTotalBonus = createSelector(heroSelected, mainParameterEntropyTotal, secondaryParameterCharismaTotal,
  (chosenHero, total1, total2) => {
    return (total1 + total2)
  }
);

export const secondaryParameterHexeriBase = (state) => _secondaryParameterBase(state, 'hexeri');
export const secondaryParameterHexeriFromImplants = state => 0;
export const secondaryParameterHexeriBonus = state => 0;
export const secondaryParameterHexeriTotal = state => secondaryParameterHexeriBase(state) + secondaryParameterHexeriFromImplants(state) + secondaryParameterHexeriBonus(state);
export const secondaryParameterHexeriTotalBonus = createSelector(heroSelected, mainParameterEntropyTotal, secondaryParameterHexeriTotal,
  (chosenHero, total1, total2) => {
    return (total1 + total2)
  }
);

export const secondaryParameterWillpowerBase = (state) => _secondaryParameterBase(state, 'willpower');
export const secondaryParameterWillpowerFromImplants = state => 0;
export const secondaryParameterWillpowerBonus = state => 0;
export const secondaryParameterWillpowerTotal = state => secondaryParameterWillpowerBase(state) + secondaryParameterWillpowerFromImplants(state) + secondaryParameterWillpowerBonus(state);
export const secondaryParameterWillpowerTotalBonus = createSelector(heroSelected, mainParameterEntropyTotal, secondaryParameterWillpowerTotal,
  (chosenHero, total1, total2) => {
    return (total1 + total2)
  }
);
