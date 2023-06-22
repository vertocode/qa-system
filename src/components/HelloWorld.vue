<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide about QA, you can visit my blog here:
      <a href="https://blog.vertocode.com/#/qa" target="_blank" rel="noopener">qa pages</a>.
    </p>

    <div class="components">
        <BaseTextField
          showLabel
          showHr
          labelText="First BaseTextField"
          placeholder="Placeholder 1"
        />
       <BaseTextField
          showLabel
          showHr
          labelText="Second BaseTextField"
          placeholder="Placeholder 2"
       />
      <BaseTextField
          placeholder="Placeholder 3"
      />
    </div>
  </div>
</template>

<script>
import BaseTextField from "@/components/BaseTextField.vue";

export default {
  name: 'HelloWorld',
  components: {BaseTextField},
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
