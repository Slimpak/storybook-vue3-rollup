import VButton from '../components/VButton.vue';

export default {
  title: 'Example/VButton',
  component: VButton,
  argTypes: {
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
    type: { control: { type: 'select', options: ['primary', 'secondary', 'danger', 'ghost'] } },
    onClick: {},
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { VButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<VButton v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button Title',
  type: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button Title',
  type: 'secondary'
};

export const Danger = Template.bind({});
Danger.args = {
  label: 'Button Title',
  type: 'danger'
};

export const Ghost = Template.bind({});
Ghost.args = {
  label: 'Button Title',
  type: 'ghost'
};