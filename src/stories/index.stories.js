import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import VButton from '../components/VButton.vue'

export default {
  title: 'Button',
}

export const withText = () => ({
  components: { VButton },
  template: '<my-button @click="action">Hello Button</my-button>',
  methods: { action: action('clicked') }
})

export const withJSX = () => ({
  render() {
    return <VButton onClick={linkTo('Button', 'With Some Emoji')}>With JSX</VButton>;
  }
})

export const withSomeEmoji = () => ({
  components: { VButton },
  template: '<my-button>😀 😎 👍 💯</my-button>'
})
