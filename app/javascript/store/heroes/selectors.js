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
