const message = "Hello world";
const name = "Richard";
const city = "Las Vegas";

const getGreeting = (name) => {
	return `Welcome ${name}`
}

export {
	message,
	name,
	getGreeting,
	city as
	default
};