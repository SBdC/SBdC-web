/*! project-name v0.0.1 | (c) 2020 YOUR NAME | MIT License | http://link-to-your-git-repo.com */

console.log('detects.js file loaded');


function morphLogo () {
    let tl = new TimelineMax();
    tl.add("begin");
    MorphSVGPlugin.convertToPath("#circle");
    MorphSVGPlugin.convertToPath("#name");

    tl.to("#circle", 2, {
        morphSVG:{
            shape:"#snakes",
            map:"position" //or "20% 60%,35% 90%" if there are different values for the start and end shapes.
        }
    }, "begin");
    // tl.to("#eye-l", 6, { x: 30,  ease: Sine.easeOut}, "eye-mov");
    // tl.to("#eye-l", 6, { x: -23,  ease: Sine.easeOut}, "eye-mov");
    // tl.to("#eye-l", 6, { x: 0,  ease: Sine.easeOut}, "eye-mov");

}


function moveEyes () {
    let tl = new gsap.timeline();
    tl.add("move");
  
    tl.fromTo(".eyes", {translateX: 0}, {translateX: 30, duration: 6, delay: 2, ease: "elastic"});
    tl.to(".eyes", {translateX: 0, duration: 6, delay: 2, ease: "elastic"});


}




function pencil () {
    let tl = new gsap.timeline();
    tl.add("pencil-morph");
    MorphSVGPlugin.convertToPath(".eyes");
    MorphSVGPlugin.convertToPath(".pincels");
    tl.to(".eyes", 2, {
        morphSVG:{
            shape:".pincels",
            map:"position" //or "20% 60%,35% 90%" if there are different values for the start and end shapes.
        }
    }, "pencil-morph");
    
}



let master = new gsap.timeline();
    master.add(morphLogo(), "scene1")
    master.add(moveEyes(), "scene2")
    //master.add(pencil(), "scene2")
       