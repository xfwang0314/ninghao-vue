<template>
  <button class="button" @click="$emit('tap', text)">
    {{ text }}
    <slot></slot>
  </button>
</template>
<script lang="ts">
export default {
  props: {
    text: {
      type: String,
      default: '按钮',
    },
  },
  created() {
    this.$emit('init');
  },
};
</script>
<style scoped>
.button {
  outline: none;
  border: onne;
  background: #e1e1e1;
  color: #5a5a5a;
  padding: 8px 16px;
  margin: 4px;
  cursor: pointer;
  border-radius: 3px;
}
.button:active {
  opacity: 0.8;
}
</style>
