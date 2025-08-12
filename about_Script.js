const q1_arrow = document.getElementById("q1-arrow");
const q2_arrow = document.getElementById("q2-arrow");
const q3_arrow = document.getElementById("q3-arrow");
const q4_arrow = document.getElementById("q4-arrow");

const a1 = document.getElementById("a1");
const a2 = document.getElementById("a2");
const a3 = document.getElementById("a3");
const a4 = document.getElementById("a4");

q1_arrow.addEventListener("click",()=>{
    a1.classList.toggle("a-visible");
    a2.classList.remove("a-visible");
    a3.classList.remove("a-visible");
    a4.classList.remove("a-visible");

    q1_arrow.classList.toggle("q-arrow-visible");
    q2_arrow.classList.remove("q-arrow-visible");
    q3_arrow.classList.remove("q-arrow-visible");
    q4_arrow.classList.remove("q-arrow-visible");



});

q2_arrow.addEventListener("click",()=>{
    a2.classList.toggle("a-visible");
    
    a1.classList.remove("a-visible");
    a3.classList.remove("a-visible");
    a4.classList.remove("a-visible");

    q2_arrow.classList.toggle("q-arrow-visible");
    q1_arrow.classList.remove("q-arrow-visible");
    q3_arrow.classList.remove("q-arrow-visible");
    q4_arrow.classList.remove("q-arrow-visible");
});

q3_arrow.addEventListener("click",()=>{
    a3.classList.toggle("a-visible");
    
    a1.classList.remove("a-visible");
    a2.classList.remove("a-visible");
    a4.classList.remove("a-visible");

    q3_arrow.classList.toggle("q-arrow-visible");
    q1_arrow.classList.remove("q-arrow-visible");
    q2_arrow.classList.remove("q-arrow-visible");
    q4_arrow.classList.remove("q-arrow-visible");
});

q4_arrow.addEventListener("click",()=>{
    a4.classList.toggle("a-visible");
    
    a1.classList.remove("a-visible");
    a3.classList.remove("a-visible");
    a2.classList.remove("a-visible");

    q4_arrow.classList.toggle("q-arrow-visible");
    q1_arrow.classList.remove("q-arrow-visible");
    q3_arrow.classList.remove("q-arrow-visible");
    q2_arrow.classList.remove("q-arrow-visible");
});