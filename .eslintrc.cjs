module.exports = {
    'env': {
        'es2022': true,
        'node': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:n/recommended'
    ],
    'overrides': [
        {
            'env': {
                'node': true
            },
            'files': [
                'src/**/*.ts',
                'src/**/*.js',
                '.eslintrc.{js,cjs}'
            ],
            'excludedFiles': '*.test.js',
            'parserOptions': {
                'sourceType': 'script'
            }
        }
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 'ES2022',
        'sourceType': 'module'
    },
    'plugins': [
        '@typescript-eslint'
    ],
    'settings': {
        'import/resolver': {
            'typescript': true,
            'node': true
        }  
    },
    
    'rules': {
        'indent': [
            'error',
            4
        ],
        'quotes': [
            'error',
            'single',
            {
                'avoidEscape': true,
                'allowTemplateLiterals': true
            }
        ],
        'n/file-extension-in-import': [
            2, 'always'
        ],
        'no-extra-semi': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'no-unused-vars': ['error', { 
            'argsIgnorePattern': '^_',
            'varsIgnorePattern': '^_',
            'caughtErrorsIgnorePattern': '^_' 
        }],
    },
};
