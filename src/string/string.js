function capitalize(str) {
	if (str.length === 0) return str;
	if (!str || str.constructor !== String )
    throw new Error();
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
	return str.split('').reverse().join('');
}

module.exports = {capitalize, reverseString};
