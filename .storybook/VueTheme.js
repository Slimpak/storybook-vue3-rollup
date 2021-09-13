import { create } from '@storybook/theming';
import logo from '../src/assets/image/VueTheme.svg';

export default create({
    base: 'dark',
    brandTitle: 'My custom storybook',
    brandUrl: 'https://example.com',
    brandImage: logo,

    appContentBg: '#313131',

    colorPrimary: '#DD0060',
    colorSecondary: '#37A58C',

    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',

  // Toolbar default and active colors
    barTextColor: '#F6F6F6',
    barSelectedColor: '#F6F6F6',
    barBg: '#37A58C',

  // Text colors
  textColor: '#F6F6F6',
  textInverseColor: 'rgba(255,255,255,0.9)',
});