import {get} from 'lodash';

export const getHeroes = state => ({
  ...state.heroes.list,
  data: state.heroes.list.ids.map(id => state.heroes.byId[id]),
});

export const characterName = state => get(state, "heroes.character.name");
export const characterId = state => get(state, "heroes.character.id");

export const mainParameterBodyBuildingBase = state => {
  if (state.heroes && state.heroes.byId) {
    const chosenHero = state.heroes.byId[parseInt(state.heroes.character.id)];
    if (chosenHero) {
      const physiqueBase = chosenHero.parameters.filter(parameter => parameter.name === 'physique')[0].value;
      return (physiqueBase)
    } else {
      return 0
    }
  }
};

export const mainParameterBodyBuildingFromImplants = state => 0;
export const mainParameterBodyBuildingTotal = state => mainParameterBodyBuildingBase(state) + mainParameterBodyBuildingFromImplants(state);
