
function animation(){

    console.log("gsap-function is worikng")
    gsap.from(".desktop-menu .li",{
        opacity:0,
        x:-100,
        duration:1,    
    })
    gsap.from(".desktop-menu",{
        
        duration:1,
        opacity:0
        // backgroundColor: '#ffffff'
        // backgroundColor: '#000000'
    })  
}
function animation2(){

    console.log("gsap-function-2 is worikng")

    gsap.to(".desktop-menu .li",{
        opacity:0,
        x:-100,
        duration:1,    
    })

    gsap.to(".desktop-menu",{
        
        duration:1,
        opacity:0
        // backgroundColor: '#ffffff'
        // backgroundColor: '#000000'
    })  
}


// animation()
