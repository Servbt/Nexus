module.exports = {
	format_date: (date) => {
		// Format date as MM/DD/YYYY
		return date.toLocaleDateString();
	},
	randomNumber: (max) => {
		return Math.floor(Math.random() * max) + 1;
	},
};
