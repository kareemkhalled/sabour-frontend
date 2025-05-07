module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:vue/essential",
        "eslint:recommended",
        '@vue/eslint-config-typescript/recommended',
        '@vue/eslint-config-prettier'
    ],
    "parserOptions": {
        "ecmaVersion": 2020,
        "sourceType": "module"
    },
    // "plugins": [
    //     "vue"
    // ],
    rules: {
        // Add custom rules here
        'vue/multi-word-component-names': 'off', 
        'no-unused-vars': 'warn', // Change unused variable errors to warnings
      },
};
