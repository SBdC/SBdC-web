
console.log('detects.js file loaded');

gsap.registerPlugin(MotionPathPlugin);


function morphLogo () {
    let tl = new TimelineMax();
    tl.add("begin");
    MorphSVGPlugin.convertToPath("#circle");

    tl.to("#circle", {
        morphSVG:{
            shape:"#snakes",
            map:"position" //or "20% 60%,35% 90%" if there are different values for the start and end shapes.
        },
        duration:1
    });
   


    tl.fromTo(".eyes", {translateX: -27}, {translateX: 30, duration: 3,  ease: "Sine.easeOut"},"+=1");
    tl.to(".eyes", {translateX: 0, duration: 3,  ease: "Sine.easeOut"}, "+=1");

   
    tl.to("#eye-l", {
        morphSVG:{
            shape:"#pencil-form-l",
            map:"size" 
            
        },
        duration:1
    }, "more");

    tl.to("#eye-l", {duration:1, opacity:0}, "more");
    tl.to("#pencil-form-l", {visibility:"visible"}, "more");
    tl.to("#pencil-details-l", {visibility:"visible"}, "more");

    tl.to("#eye-r", {
        morphSVG:{
            shape:"#pencil-form-r",
            map:"size" 
            
        },
        duration:1
    }, "+=2");

   

    tl.to("#eye-r", {duration:1, opacity:0}, "more");
    tl.to("#pencil-form-r", {visibility:"visible"}, "more");
    tl.to("#pencil-details-r", {visibility:"visible"}, "more");


    tl.to("#pencil-form-l", {
        duration:5,
        motionPath:{
            path:"#eye-path-l",
            align:"self"
        }
    }, "draw");

    tl.to("#pencil-details-l", {
        duration:5,
        motionPath:{
            path:"#eye-path-l",
            align:"self"
        }
    }, "draw");

    tl.from("#eye-path-l", {duration:5, drawSVG:0}, "draw")

    tl.to("#pencil-form-r", {
        duration:5,
        motionPath:{
            path:"#eye-path-r",
            align:"self"
        }
    }, "draw");

    tl.to("#pencil-details-r", {
        duration:5,
        motionPath:{
            path:"#eye-path-r",
            align:"self"
        }
    }, "draw");

    tl.from("#eye-path-r", {duration:5, drawSVG:0}, "draw")

}





let master = new gsap.timeline();
    master.add(morphLogo(), "scene1")
        //.add(moveEyes(), "scene2")
       