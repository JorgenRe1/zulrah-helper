new Vue({
    el: '#zulrah-helper',
    data: {
        displaySettings: false,
        rotation: 0,
        phase: 0,
        theme: "dark",
        style: "simple",
        degrees: 0,
        timer: 0,
        phase: 0,
        rotation_times:{
            rot1_1:[1, 1, 1, 1, 2000,4000,6000,2000,4000,6000],
            rot1_2:[1, 1, 1, 1, 2000,3000],
            rot2:[1, 1, 1, 1, 2000,4000,6000,2000,4000,6000],
            rot3:[1, 1, 1, 1, 2000,4000,6000,2000,4000,6000]
    }
    },
    methods: {
        selectRotation: function(rotation) {
            this.rotation = rotation;
            if (rotation > 1){
                //Start countdown
                console.log("Going to rot with time to first finnish: "+this.rotation_times["rot"+String(this.rotation).replace(".", "_")][this.phase]);
                setTimeout(this.nextPhase, this.rotation_times["rot"+String(this.rotation).replace(".", "_")][this.phase]);
            }
        },
        toggleTheme: function () {
            if (this.theme == "light") {
                this.theme = "dark";
            } else {
                this.theme = "light";
            }
        },
        toggleStyle: function () {
            if (this.style == "simple") {
                this.style = "realistic";
            } else {
                this.style = "simple";
            }
        },
        toggleSettings: function () {
            if (this.displaySettings == true) {
                this.displaySettings = false;
            } else {
                this.displaySettings = true;
            }
        },
        rotateImages: function (direction) {
            if (direction == 'left') {
                this.degrees -= 90;
            } else {
                this.degrees += 90;
            }
        },
        nextPhase: function(){
            this.phase+=1;
            console.log("Phase: "+this.phase);
            if (this.rotation_times["rot"+String(this.rotation).replace(".", "_")][this.phase]){
                setTimeout(this.nextPhase, this.rotation_times["rot"+String(this.rotation).replace(".", "_")][this.phase]);
            } else {
                //rotation done reset
                console.log("Done at: "+this.phase);
            }
        }
    }
});
