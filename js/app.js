window.onload = function () {

"use strict";

    new Vue({
        
        el: "#app",
        
        data: {
            newTask: "",
            tasks: [
                {
                    text: "Learn Vue.js course"
                }
            ],

        },
        mounted() {
            if (localStorage.getItem('tasks')) this.tasks = JSON.parse(localStorage.getItem('tasks'));
        },
        watch: {
          tasks: {
            handler() {
                localStorage.setItem('tasks', JSON.stringify(this.tasks));
            },
            deep: true,
          },
        },
        methods: {

            addTask: function () {
                var task = this.newTask.trim();
                if (task) {
                    this.tasks.push({text: task});
                    this.newTask = "";
                }
            },

            clearList: function () {
                this.tasks = [

                ];
            },
            
            removeLast: function() {
                this.tasks.pop();
            }

        }
    });
}