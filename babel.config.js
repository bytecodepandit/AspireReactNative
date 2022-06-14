module.exports = {
  presets: ['module:metro-react-native-babel-preset', '@babel/preset-flow'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./app'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@app': './app',
          '@routes': './app/routes',
          '@interfaces': './app/core/models/interfaces/index.ts',
          '@enums': './app/core/models/enums/index.ts',
          '@mock': './app/core/mock',
          '@atoms': './app/shared/atoms/index.ts',
          '@molecules': './app/shared/molecules/index.ts',
          '@organisms': './app/shared/organisms/index.ts',
          '@hooks': './app/shared/hooks/index.ts',
          '@services': './app/core/services',
          '@utils': './app/core/utils',
          '@theme': './app/theme',
          '@assets': './app/assets',
          '@store': './app/store',
          '@shared-import': './app/shared/shared-import/index.ts',
        },
      },
    ],
  ],
};
