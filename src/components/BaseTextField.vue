<template>
  <div class="base-text-field mt-3" data-cy="base-text-field">
    <label data-cy="label" class="input-group-text" for="input" v-if="showLabel">{{ labelText }}</label>
    <input data-cy="input" class="input-group mt-2" type="text" :placeholder="placeholder">
    <hr data-cy="hr" v-if="showHr">
  </div>
</template>

<script>
export default {
  props: {
    labelText: {
      type: String,
      required: false
    },
    placeholder: {
      type: String,
      required: false
    },
    showLabel: {
      type: Boolean,
      default: false
    },
    showHr: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
.base-text-field {
  border: #42b983 1px solid;
  width: 300px;
  margin: auto;
}

.base-text-field input {
  width: 250px;
  margin: auto;
}
</style>