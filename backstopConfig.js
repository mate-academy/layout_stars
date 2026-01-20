'use strict';
// https://github.com/garris/BackstopJS#advanced-scenarios

const backstop = require('@mate-academy/backstop-config');
const { basicScenario } = backstop;

const basic = {
  ...basicScenario,
  label: 'Elementary test',
  referenceUrl: 'http://localhost:1234',


};

const config = {
  ...backstop,
  fileNameTemplate: '{scenarioLabel}',
  viewports: [
    {
      name: 'tablet_h',
      width: 768,
      height: 600,
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
      delay: 500,
    },
    {
      ...basic,
      label: 'stars--1',
      selectors: ['.stars--1'],
      delay: 500,
    },
    {
      ...basic,
      label: 'stars--2',
      selectors: ['.stars--2'],
      delay: 500,
    },
    {
      ...basic,
      label: 'stars--3',
      selectors: ['.stars--3'],
      delay: 500,
    },
    {
      ...basic,
      label: 'stars--4',
      selectors: ['.stars--4'],
      delay: 500,
    },
    {
      ...basic,
      label: 'stars--5',
      selectors: ['.stars--5'],
      delay: 500,
    },
  ],
};

module.exports = config;
