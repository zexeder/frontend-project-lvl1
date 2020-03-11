#!/usr/bin/env node
import * as gameLib from '../src/index.js';

const operationSign = () => {
	let num = Math.floor((Math.random() * 3) + 1);
	let oper = '+';
	switch (num) {
		case 1:
			oper = '-';
			break;
		case 2:
			oper = '*';
			break;
		default:
			oper = '+';
			break;
	}
	return oper; 
}


const userName = gameLib.greeting();
gameLib.gameRules('What is the result of the expression?');
// while (gameLib.endGame) {
	// let num1 = gameLib.generateNum();
	// let num2 = gameLib.generateNum();
	// let oper = generateOperation();
// }
