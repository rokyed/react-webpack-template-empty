module.exports = {
	"parser": "babel-eslint",
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended"
	],
	"globals": {
		"document": true,
		"window": true,
		"OBS_RV": true,
		"X_MGR": true,
		"LN": true,
		"console": true,
		"__dirname": true
	},
	"rules": {
		"semi": "never",
		"eqeqeq": "ignore"
	}
}
