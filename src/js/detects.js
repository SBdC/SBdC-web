
console.log('detects.js file loaded');


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
   


    tl.fromTo(".eyes", {translateX: -27}, {translateX: 30, duration: 6,  ease: "Sine.easeOut"},"+=1");
    tl.to(".eyes", {translateX: 0, duration: 6,  ease: "Sine.easeOut"}, "+=1");

   
    tl.to("#eye-l", {
        morphSVG:{
            shape:"#pencil-form",
            map:"size" 
            
        },
        duration:1
    }, "+=4");

    tl.to("#eye-l", {duration:1, fill:"white"}, "-=1")


}





let master = new gsap.timeline();
    master.add(morphLogo(), "scene1")
        //.add(moveEyes(), "scene2")
       