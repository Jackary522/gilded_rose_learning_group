function clamp(min, max) {
	return function (x) {
		return x > max ? max 
      : x < min ? min 
      : x
	}
}

module.exports = {
	clamp,
}