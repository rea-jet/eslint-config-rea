module.exports = {
  "extends": "rea",
  "plugins": [
    "mocha",
  ],
  "rules": {
    "max-nested-callbacks": [2, 15], // them its and describes...
    "max-len": [2, 240], // them verbose it statements
    "mocha/no-exclusive-tests": 2, // never push exclusive tests
    "mocha/handle-done-callback": 2, // don't forget that "done" !
  },
  "env": {
    "mocha": true,
  },
  "globals": {
    "describe": false,
    "it": false,
    "beforeEach": false,
    "afterEach": false,
    "expect": false,
    "inject": false,
  },
}