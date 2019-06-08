import theCity, {
	message,
	name,
	getGreeting
} from './myModule';
import sumFunc, {
	subtract
} from './math.js'

console.log(message);
console.log(name);
console.log(theCity);
console.log(getGreeting("Richard"));

console.log(`Adding 1 + 2 = ${sumFunc(1, 2)}`);
console.log(`Subtracting 1 from 2 is ${subtract(2, 1)}`);