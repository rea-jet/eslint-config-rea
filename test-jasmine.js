module.exports = {
  "plugins": [
    "jasmine",
  ],
  "extends": [
    "rea",
    "plugin:jasmine/recommended",
  ],
  "env": {
    "jasmine": true,
  },
  "rules": {
    "max-nested-callbacks": [2, 15], // them its and describes...
    "max-len": [2, 240], // them verbose it statements
    "jasmine/no-spec-dupes": [1, "branch"]
  },
  "globals": {
    "describe": false,
    "it": false,
    "beforeEach": false,
    "afterEach": false,
    "expect": false,
    "inject": false,
  },
};
