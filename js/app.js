window.onload = function () {

    const tl = new TimelineLite({delay: 0.5});
    const greenLeaf = document.querySelectorAll('.green-leaf');
    const yellowLeaf = document.querySelectorAll('.yellow-leaf');
    const crab = document.querySelectorAll('.crab');
    const crabLeg1 = document.querySelectorAll('#leg1');
    const crabLeg2 = document.querySelectorAll('#leg4');

    tl.add([
        TweenMax.to(greenLeaf, 4, {x: 20, rotation: "10", transformOrigin:"center center",yoyo: true, repeatDelay: 1, repeat: -1}),
        TweenMax.to(yellowLeaf, 3, {rotation: "-40", transformOrigin:"center center",yoyo: true, repeatDelay:0, repeat: -1}),
        TweenMax.set(crab, { x: -250,zIndex: -5} ),
        TweenMax.to(crab, 50, { x: 1100}),
        TweenMax.to(crab, 50, { y: -620}, 6),
        TweenMax.to(crabLeg1, 0.5, { y: 5,repeat: -1, yoyo:true}),
        TweenMax.to(crabLeg2, 0.5, { y: -5,repeat: -1, yoyo:true})
    ]);

    new Vue({
        
        el: "#app",
        
        data: {
            newTask: "",
            tasks: [
             
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
                const task = this.newTask.trim();
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