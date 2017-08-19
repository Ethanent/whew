module.exports = (tests) => {
	process.stdout.write("\x1B[2J\x1B[0f\u001b[0;0H");
	console.log("\x1b[34mCompleted " + tests.length + " tests.\x1b[0m\n");
	var totals = {
		"fail": 0,
		"pass": 0
	};

	for (let i = 0; i < tests.length; i++) {
		if (tests[i].result.success) {
			totals.pass++;
		}
		else {
			totals.fail++;
		}
	}

	console.log("\x1b[32m" + totals.pass + " " + (totals.pass == 1 ? "test" : "tests") + " passed.\x1b[0m");
	console.log((totals.fail <= 0 ? "\x1b[32m" : "\x1b[31m") + totals.fail + " " + (totals.fail == 1 ? "test" : "tests") + " failed.\x1b[0m\n\n");

	for (let i = 0; i < tests.length; i++) {
		if (tests[i].result.success) {
			console.log("\x1b[32m✓ \x1b[34m" + tests[i].name + " \x1b[32mpassed \x1b[34min " + tests[i].result.timeTaken + "ms." + (tests[i].result.info ? "\t\x1b[35m" + tests[i].result.info + "\x1b[0m" : "\x1b[0m"));
		}
		else {
			console.error("\x1b[31m✗ \x1b[34m" + tests[i].name + " \x1b[31mfailed \x1b[34min " + tests[i].result.timeTaken + "ms." + (tests[i].result.info ? "\t\x1b[35m" + tests[i].result.info + "\x1b[0m" : "\x1b[0m"));
		}
	}

	console.log("\n");

	if (totals.fail > 0) {
		process.exit(1);
	}
	else {
		process.exit(0);
	}
};