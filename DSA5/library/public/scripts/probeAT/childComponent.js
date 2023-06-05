const ChildComponent = {
  props: {
    myMessage: String,
  },
  data() {
    return {};
  },
  async setup() {
    console.log("Setting up component");
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await response.json();
    console.log("Response", todos);
    return {
      todos,
    };
  },
  template: `<div style="border: 1px solid blue;"> {{myMessage}} <div v-for="todo in todos">{{todo.title}}</div></div>`,
};
