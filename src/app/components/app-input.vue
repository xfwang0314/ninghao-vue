<template>
  <input
    type="text"
    :value="modelValue"
    @input="$emit('update:model-value', $event.target.value)"
  />
</template>
<script lang="ts">
export default {
  props: {
    modelValue: String,
  },
};
</script>
