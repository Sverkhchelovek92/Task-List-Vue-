const App = {
  data() {
    return {
      title: "Task List",
      holder: "Add Task...",
      inputValue: "",
      tasks: [],
    };
  },
  methods: {
    changeInput(event) {
      this.inputValue = event.target.value;
    },
    addTask() {
      this.tasks.push(this.inputValue);
      this.inputValue = "";
    },
    enterPress(event) {
      if (event.key == "Enter") {
        this.addTask();
      }
    },
    deleteTask(event) {
      const taskToDelete = event.target.closest(".list_item");
      taskToDelete.remove();
    },
  },
};

Vue.createApp(App).mount("#app");
