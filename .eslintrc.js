module.exports = {
    "env": {
        "es2021": true,
        "es6": true,
        "node": true
    },
    "extends": "standard-with-typescript",
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script",
                "parser": "@typescript-eslint/parser",
                "project": "./tsconfig.json",
                "tsconfigRootDir": "__dirname",
            },
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "keyword-spacing": 2
    }
}
