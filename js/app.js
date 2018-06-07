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