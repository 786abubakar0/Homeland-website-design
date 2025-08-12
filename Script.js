window.addEventListener("load",()=>{
    spinner = document.getElementById("spinner");
    main_container = document.getElementById("main-container");
    spinner.style.display = "none";
    main_container.style.display = "flex";




    const left_arrow = document.getElementById("left-arrow");
    const right_arrow = document.getElementById("right-arrow");
    const bg_name = ["images/background_1.jpg","images/background_2.jpg"];
    const background_layer = document.getElementById("background-layer");
    const slide_1 = document.getElementById("slide-one");
    const slide_2 = document.getElementById("slide-two");
    const slide_arr = [slide_1, slide_2];

    const menu = document.getElementById("menu");
    const sticky_menu = document.getElementById("sticky-menu");
    const close_icon = document.getElementById("close-icon");

    const sticky_arrow1 = document.getElementById("sticky-arrow1");
    const sticky_arrow2 = document.getElementById("sticky-arrow2");
    const sticky_dropdown1 = document.getElementById("sticky-dropdown1");
    const sticky_dropdown2 = document.getElementById("sticky-dropdown2");

    sticky_arrow1.addEventListener("click", ()=>{
        sticky_dropdown1.classList.toggle("visible-menu");
    }
    );

    sticky_arrow2.addEventListener("click", ()=>{
        sticky_dropdown2.classList.toggle("visible-menu");
    }
    );
    menu.addEventListener("click",()=>{
        sticky_menu.style.display = "flex";
    });

    close_icon.addEventListener("click",()=>{
        sticky_menu.style.display = "none";
    });

    var index = 0;

    function changeslide(){
        background_layer.classList.toggle("fade-element");
        background_layer.offsetWidth;
        background_layer.classList.toggle("fade-element");
        background_layer.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.5)),url("+bg_name[index]+")";
        slide_arr[index].style.display = "flex";
        var x = (index+1)%2;
        slide_arr[x].style.display = "none";
    }
    left_arrow.addEventListener("click",()=>{
        index+=1;
        index = index%2;
        changeslide();
    });

    right_arrow.addEventListener("click",()=>{
        index+=1;
        index = index%2;
        changeslide();
    });


    setInterval(function(){
        index+=1;
        index = index%2;
        changeslide();
    }, 3000);


});