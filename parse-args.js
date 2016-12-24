module.exports = function parseArgs(input) {
	let args = {};
	for (let arg of input.split("--")) {
		if (arg != "") {
			let data = arg.trim().split('=');
			args[data[0]] = parseFloat(data[1]) || data[1] == "true" || data[1];
		}
	}
	return args;
}
