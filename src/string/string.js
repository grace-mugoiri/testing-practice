function capitalize(str) {
	if (str.length === 0) return str;
	if (!str || str.constructor !== String )
		throw new TypeError('Invalid input');
  return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = capitalize;
