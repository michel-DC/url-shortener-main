module.exports = {
  root: true,
  env: {
    node: true
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly'
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  rules: {
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
    'vue/prop-name-casing': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/padding-line-between-blocks': 1,
    'vue/no-v-html': 'error',
    'vue/no-undef-properties': 'error',
    'vue/no-unused-properties': [
      'error',
      {
        groups: ['props', 'data', 'computed', 'methods', 'setup']
      }
    ]
  }
}
