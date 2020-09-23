import { filtersVar } from '../../apollo/cache';
import COFFEE_DATA from './coffee.data';
import FLOWER_DATA from './flower.data';
import SESAME_DATA from './sesame.data';

export const TYPE = ['Coffee', 'Sesame', 'Flower'];
export const FILTER_DATA = {
  Coffee: [
    {
      name: 'Geographical Designation',
      id: 'geographical-designation',
      filterSelectedOptions: true,
      label: 'GeographicalDesignation',
      groupBy: (option) => option.origin,
      getOptionLabel: (option) => option.specificOrigin,
      options: COFFEE_DATA.GeographicalDesignation,
      handleFilterChange: (event, newValue) => {
        filtersVar({
          ...filtersVar(),
          uniqueAttributes: {
            ...filtersVar().uniqueAttributes,
            GeographicalDesignation: newValue ? newValue.specificOrigin : '',
          },
        });
      },

    },
    {
      id: 'group',
      options: COFFEE_DATA.Group,
      getOptionLabel: (option) => (option),
      filterSelectedOptions: true,
      label: 'Group',
      handleFilterChange: (event, newValue) => {
        filtersVar({
          ...filtersVar(),
          uniqueAttributes: { ...filtersVar().uniqueAttributes, Group: newValue },
        });
      },
    },
    {
      id: 'grade',
      options: COFFEE_DATA.Grade,
      getOptionLabel: (option) => (option),
      filterSelectedOptions: true,
      label: 'Grade',
      handleFilterChange: (event, newValue) => {
        filtersVar({
          ...filtersVar(),
          uniqueAttributes: { ...filtersVar().uniqueAttributes, Grade: newValue },
        });
      },
    },

  ],

  Flower: [
    {
      id: 'flower-type',
      options: FLOWER_DATA.FlowerType,
      getOptionLabel: (option) => (option),
      filterSelectedOptions: true,
      label: 'FlowerType',
    },
  ],

  Sesame: [
    {
      id: 'sesame-type',
      options: SESAME_DATA.Type,
      getOptionLabel: (option) => (option),
      filterSelectedOptions: true,
      label: 'SesameType',
      handleFilterChange: (event, newValue) => {
        filtersVar({
          ...filtersVar(),
          uniqueAttributes: { ...filtersVar().uniqueAttributes, Type: newValue },
        });
      },
    },

    {
      id: 'sesame-grade',
      options: SESAME_DATA.Grade,
      getOptionLabel: (option) => (option),
      filterSelectedOptions: true,
      label: 'SesameGrade',
      onInputChange: (event, newValue) => {
        filtersVar({
          ...filtersVar(),
          uniqueAttributes: { ...filtersVar().uniqueAttributes, Grade: newValue },
        });
      },
    },

  ],

};