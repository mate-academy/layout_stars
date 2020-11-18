'use strict';
// https://github.com/garris/BackstopJS#advanced-scenarios

const backstop = require('@mate-academy/backstop-config');
const { basicScenario } = backstop;

const basic = {
  ...basicScenario,
  label: 'Elementary test',
  referenceUrl: basicScenario.referenceUrl + '/stars/',
};

const config = {
  ...backstop,
  fileNameTemplate: '{scenarioLabel}',
  viewports: [
    {
      name: 'tablet_h',
      width: 100,
      height: 100,
    },
  ],
  scenarios: [
    {
      ...basic,
      label: 'Entire document',
      selectors: ['document'],
    },
    {
      ...basic,
      label: 'block__stars--0',
      selectors: ['.block__stars--0'],
    },
    {
      ...basic,
      label: 'block__stars--1',
      selectors: ['.block__stars--1'],
    },
    {
      ...basic,
      label: 'block__stars--2',
      selectors: ['.block__stars--2'],
    },
    {
      ...basic,
      label: 'block__stars--3',
      selectors: ['.block__stars--3'],
    },
    {
      ...basic,
      label: 'block__stars--4',
      selectors: ['.block__stars--4'],
    },
    {
      ...basic,
      label: 'block__stars--5',
      selectors: ['.block__stars--5'],
    },
  ],
};

module.exports = config;
