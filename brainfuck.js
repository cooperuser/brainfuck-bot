
class Character {
	constructor(char, func) {
		if (Character.list == undefined) {
			Character.list = {};
		}
		Character.list[char] = func;
	}
}
Character.list = {
	'+': function(bf) {
		if (bf.memory[bf.selector] < 255) {
			bf.memory[bf.selector]++;
		} else {
			bf.memory[bf.selector] = 0;
		}
	},
	'-': function(bf) {
		if (bf.memory[bf.selector] > 0) {
			bf.memory[bf.selector--;
		} else {
			bf.memory[bf.selector] = 255;
		}
	},
	'>': function(bf) {
		if (bf.selector < 255) {
			bf.selector++;
		} else {
			bf.selector = 0;
		}
	},
	'<': function(bf) {
		if (bf.selector > 0) {
			bf.selector--;
		} else {
			bf.selector = 255;
		}
	},
	',': function(bf) {
		bf.memory[bf.selector] = 0;
	},
	'.': function(bf) {
		console.log(String.fromCharCode(bf.memory(bf.selector)));
	},
	'[': function(bf) {
		if (bf.memory[bf.selector]) {
			bf.caret++;
		} else {
			let counter = 1;
			while (counter) {
				let char = bf.content[++bf.caret];
				if (char == '[') {
					counter++;
				} else  if (char == ']') {
					counter--;
				}
			}
		}
	},
	']': function(bf) {
		let counter = 1;
		while (counter) {
			let char = bf.content[++bf.caret];
			if (char == '[') {
				counter++;
			} else  if (char == ']') {
				counter--;
			}
		}
	}
};

class BrainFuck {
	constructor(code, input=function(bf) {}, output=function(bf) {}) {
		this.code = code;
		this.selector = 0;
		this.caret = 0;
		this.memory = [];
		this.input = function() {input(this);};
		this.output = function() {output(this);};
	}
	
}
