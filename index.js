const runTests = require("./runTests.js");

var tests = [];

module.exports = {
	"add": (name, testMethod) => {
		tests.push({testMethod, name});
	},
	"test": () => {
		runTests(tests);
	}
};