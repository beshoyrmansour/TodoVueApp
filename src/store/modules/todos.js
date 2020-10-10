// import axios from "axios";

import axios from "axios";

const state = {
  todos: [],
};

const getters = {
  allTodos: (state) => state.todos,
};

const actions = {
  // fetchTodos
  async fetchTodos({ commit }) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    commit("SET_TODOS", response.data);
  },

  //   AddTodo
  async AddTodo({ commit }, title) {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      { title, completed: false }
    );
    commit("ADD_TODOS", response.data);
  },

  // deleteTodo
  async deleteTodo({ commit }, id) {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(() => commit("DELETE_TODOS", id));
    // if (response.code == 200) commit("DELETE_TODOS", id);
  },

  // ToggleTodo
  async ToggleTodo({ commit }, todo) {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
      todo
    );
    commit("UPDATE_TODOS", response.data);
  },
};

const mutations = {
  SET_TODOS: (state, todos) => (state.todos = todos),
  ADD_TODOS: (state, todo) => state.todos.unshift(todo),
  DELETE_TODOS: (state, id) =>
    (state.todos = state.todos.filter((t) => t.id !== id)),
  UPDATE_TODOS: (state, todo) => {
    const index = state.todos.findIndex((t) => t.id === todo.id);
    if (index !== -1) {
      state.todos.splice(index, 1, todo);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};