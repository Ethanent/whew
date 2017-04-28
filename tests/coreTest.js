const whew = require("../index.js");

whew.add("Adding numbers", (res) => {
	var added = 3 + 4;

	res((added === 7), "Resulted in 3 + 4 = " + added);
});

whew.add("Subtracting numbers", (res) => {
	var subtracted = 7 - 4;

	res((subtracted === 3), "Resulted in 7 - 4 = " + subtracted);
});

whew.add("Something that takes a while", (res) => {
	setTimeout(() => {
		res(true, "That took a while...");
	}, 1300);
});

whew.add("Something with no description", (res) => {
	setTimeout(() => {
		res(true);
	}, 700);
});

whew.test();