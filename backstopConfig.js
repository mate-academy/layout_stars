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
      url: '"url": "http://localhost:5500/index.html"',
      selectors: ['document'],
    },
    {
      ...basic,
      label: 'stars--0',
      url: '"url": "http://localhost:5500/index.html"',
      selectors: ['.stars--0'],
    },
    {
      ...basic,
      label: 'stars--1',
      url: '"url": "http://localhost:5500/index.html"',
      selectors: ['.stars--1'],
    },
    {
      ...basic,
      label: 'stars--2',
      url: '"url": "http://localhost:5500/index.html"',
      selectors: ['.stars--2'],
    },
    {
      ...basic,
      label: 'stars--3',
      url: '"url": "http://localhost:5500/index.html"',
      selectors: ['.stars--3'],
    },
    {
      ...basic,
      label: 'stars--4',
      url: '"url": "http://localhost:5500/index.html"',
      selectors: ['.stars--4'],
    },
    {
      ...basic,
      label: 'stars--5',
      url: '"url": "http://localhost:5500/index.html"',
      selectors: ['.stars--5'],
    },
  ],
};

module.exports = config;
