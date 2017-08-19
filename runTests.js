const resultUI = require("./resultUI.js");

module.exports = (testData) => {
	var tests = testData;

	process.stdout.write("\x1B[2J\x1B[0f\u001b[0;0H");
	console.log("\x1b[34mExecuting " + tests.length + " tests...\x1b[0m");

	var completedTests = 0;
	for (let i = 0; i < tests.length; i++) {
		tests[i].timing = {
			startTime: new Date().getTime()
		};

		var testCompleted = (success, info) => {
			tests[i].timing.endTime = new Date().getTime();
			tests[i].result = {success, info};

			tests[i].result.timeTaken = tests[i].timing.endTime - tests[i].timing.startTime;

			console.log("\x1b[30m" + tests[i].name + (success ? " \x1b[32mpassed" : " \x1b[31mfailed") + "\x1b[0m");
			completedTests++;

			if (completedTests >= tests.length) {
				resultUI(tests);
			}
		};

		try {
			tests[i].testMethod(testCompleted);
		}
		catch (err) {
			testCompleted(false, err.toString());
		}
	}
};