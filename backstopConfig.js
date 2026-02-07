'use strict';

const backstop = require('@mate-academy/backstop-config');
const { basicScenario } = backstop;

const PAGE_URL = 'https://peloso31.github.io/layout_stars/src/';

const basic = {
  ...basicScenario,
  url: PAGE_URL,
  referenceUrl: PAGE_URL,
};

module.exports = {
  ...backstop,

  fileNameTemplate: '{scenarioLabel}',

  viewports: [
    {
      name: 'desktop',
      width: 140,
      height: 160,
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
      label: 'stars--0',
      selectors: ['.stars--0'],
    },
    {
      ...basic,
      label: 'stars--1',
      selectors: ['.stars--1'],
    },
    {
      ...basic,
      label: 'stars--2',
      selectors: ['.stars--2'],
    },
    {
      ...basic,
      label: 'stars--3',
      selectors: ['.stars--3'],
    },
    {
      ...basic,
      label: 'stars--4',
      selectors: ['.stars--4'],
    },
    {
      ...basic,
      label: 'stars--5',
      selectors: ['.stars--5'],
    },
  ],
};