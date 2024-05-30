const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", function (e) {
  cursor.style.left = e.x + "px";
  cursor.style.top = e.y + "px";
  cursor_blur.style.left = e.x - 250 + "px";
  cursor_blur.style.top = e.y - 250 + "px";
});
const cursor_blur = document.querySelector(".cursor-blur");

gsap.to("nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "100px",
  scrollTrigger: {
    trigger: "nav",
    scroller: "body",
    // markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: 2,
  },
});
gsap.to("main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "main",
    scroller: "body",
    start: "top -30%",
    end: "top -80%",
    scrub: 1.5,
  },
});
/**
 * @param {string} str
 */
str;
