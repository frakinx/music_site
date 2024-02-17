function fadeIn(element, duration) {
    element.style.opacity = 0;
    let start = null;
  
    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      element.style.opacity = Math.min(progress / duration, 1);
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    }
  
    window.requestAnimationFrame(step);
  }
const blur1 = document.getElementById('blur1');
const button = document.getElementById('button');
const main__exit = document.getElementById('main__exit');
button.addEventListener("click",function(){
    container.classList.toggle('content__hidden')
    main__exit.classList.toggle('content__hidden')
    if (container.classList.contains('content__hidden'))
    {
        
        }
    else {
        fadeIn(container,400);
        fadeIn(main__exit,400);
        blur1.classList.add("pointerevents");
    }
})
main__exit.addEventListener("click",function(){
    container.classList.toggle('content__hidden')
    main__exit.classList.toggle('content__hidden')
    if (container.classList.contains('content__hidden'))
    {
    blur1.classList.remove("pointerevents");
        }
})    