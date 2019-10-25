module.exports = {
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: [
        'plugin:vue/recommended',
        'standard'
    ],
    rules: {
        semi: [2, "always"],
        "no-tabs": ["error", { allowIndentationTabs: true }]
    },
    plugins: [
        'vue'
    ]
}