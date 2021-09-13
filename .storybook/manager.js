import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';

import VueTheme from './VueTheme';

addons.setConfig({
    theme: VueTheme,
});