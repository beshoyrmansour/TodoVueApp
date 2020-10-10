<template>
  <form class="addNewForm" @submit.prevent="onSubmit">
    <!-- <h1>ADD NEW</h1> -->
    <input type="text" v-model="title" />
    <button type="submit">Add</button>
  </form>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddTodo",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    ...mapActions(["AddTodo","deleteTodo", "ToggleTodo"]),
    onSubmit() {
      //   e.preventDefualt();
      console.log("this.title", this.title);
      this.AddTodo(this.title);
      this.title = "";
    },
    
  },
};
</script>

sc
<style lang="scss">
.addNewForm {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: stretch;
  input {
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #899bad;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin: 1rem 0px;
  }
  button {
    width: auto;
    margin-left: 1rem;
    padding-left: 3rem;
    padding-right: 3rem;
    color: #fff;
    background-color: #28a745;
    border-color: #28a745;
  }
}
</style>
