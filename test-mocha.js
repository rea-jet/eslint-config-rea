module.exports = {
  "plugins": [
    "mocha"
  ],
  "extends": "rea",
  "env": {
    "mocha": true
  },
  "rules": {
    // them its and describes...
    "max-nested-callbacks": [2, 15],
    // them verbose it statements
    "max-len": [2, 240],
    // never push exclusive tests
    "mocha/no-exclusive-tests": 2,
    // don't forget that "done" !
    "mocha/handle-done-callback": 2
  },
  "globals": {
    "describe": false,
    "chai": false,
    "expect": false,
    "sinon": false
  }
};
