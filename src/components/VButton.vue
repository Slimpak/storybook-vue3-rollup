<template>
  <button type="button" :class="classes" @click="onClick" :style="style" :disabled="disabled">
    {{ label }}
    <span v-show="plus">
      +
      </span>
  </button>
</template>

<script>
import '../assets/sass/main.scss';
import { reactive, computed } from 'vue';

export default {
  name: 'VButton',

  props: {
    label: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'primary',
      validator: function (value) {
        return ['primary', 'secondary', 'danger', 'ghost'].indexOf(value) !== -1;
      },
    },
    plus: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
  },

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        'storybook-button': true,
        [`storybook-button--${props.type}`]: props.type,
        'storybook-button--disabled': props.disabled,
        [`storybook-button--${props.size || 'medium'}`]: true,
      })),
      onClick() {
        emit('click');
      }
    }
  },
};
</script>


<style lang="scss">
.storybook-button {
  align-items: center;
  border: 0;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  justify-content: center;
  line-height: 1;
  padding: 8px 16px;
  flex-direction: row;
  max-width: max-content;
}

.storybook-button span {
  margin-left: 8px;
}

.storybook-button--primary {
  color: white;
  background-color: #6a50fc;
}

.storybook-button--primary:hover {
  color: white;
  background-color: #5d44e7;
}

.storybook-button--disabled {
  opacity: 0.4;
}

.storybook-button--secondary {
  background-color: transparent;
  border: 1px solid #37A58C;
  color: #37A58C;
}

.storybook-button--secondary:hover {
  background-color: transparent;
  border: 1px solid rgba(38, 116, 98, 1);
  color: rgba(38, 116, 98, 1);
}


.storybook-button--danger {
  background-color: #DD0060;
  border: 1px solid #DD0060;
  color: #fff;
}

.storybook-button--danger:hover {
  background-color: #B1004D;
  border: 1px solid #B1004D;
  color: #fff;
}

.storybook-button--ghost {
  background-color: transparent;
  color: #000000;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
}

.storybook-button--ghost:hover {
  background-color: transparent;
  color: #7bff00;
} 

.storybook-button--small {
  font-size: 12px;
  padding: 10px 16px;
}
.storybook-button--medium {
  font-size: 14px;
  padding: 11px 20px;
}
.storybook-button--large {
  font-size: 16px;
  padding: 12px 24px;
}

</style>