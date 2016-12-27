
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
			bf.memory[bf.selector]--;
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
		bf.outputs += String.fromCharCode(bf.memory[bf.selector]);
	},
	'[': function(bf) {
		if (!bf.memory[bf.selector]) {
			let counter = 1;
			while (counter) {
				let char = bf.code[++bf.caret];
				if (char == '[') {
					counter++;
				} else if (char == ']') {
					counter--;
				}
			}
		}
	},
	']': function(bf) {
		let counter = 1;
		while (counter) {
			let char = bf.code[--bf.caret];
			if (char == '[') {
				counter--;
			} else if (char == ']') {
				counter++;
			}
		}
		bf.caret--;
	}
};

class BrainFuck {
	constructor(code, input=function(bf) {}, output=function(bf) {}) {
		this.code = code;
		this.selector = 0;
		this.caret = 0;
		this.memory = '0'.repeat(256).split('');
		this.outputs = "";
		this.continue = true;
		this.input = function() {input(this);};
		this.output = function() {output(this);};
		this.parse();
	}
	parse() {
		while(this.continue) {
			let char = this.code[this.caret];
			if (char in Character.list) {
				Character.list[char](this);
			}
			this.caret++;
			if (this.caret == this.code.length) {
				this.continue = false;
			}
		}
	}
}

module.exports = {BrainFuck, Character};
