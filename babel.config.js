module.exports = {
  presets: [
    [
      'module:metro-react-native-babel-preset',
      {useTransformReactJSXExperimental: true},
    ],
  ],
  plugins: [
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic',
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src/'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.json',
        ],
        alias: {
          styles: './src/styles',
          assets: './src/assets',
          components: './src/components',
          'shared-services': './src/shared-services',
          navigation: './src/navigation',
          screens: './src/screens',
          contexts: './src/contexts',
          utils: './src/utils',
        },
      },
    ],
    'react-native-reanimated/plugin',
    'react-native-paper/babel',
  ],
};
