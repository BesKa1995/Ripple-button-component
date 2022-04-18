const buttons = document.querySelectorAll('.ripple')
buttons.forEach(button => {
  button.addEventListener('click', function (e) {

    const circle = document.createElement('span')
    //getting the x,y coordinates of the mouse
    const x = e.clientX
    const y = e.clientY1

    //getting the button position
    const buttonLeft = e.target.offsetLeft
    const buttonTop = e.target.offsetTop

    //getting the click position inside the button
    const InsideX = x - buttonLeft
    const InsideY = y - buttonTop


    circle.style.top = `${buttonInsideY}px`
    circle.style.left = `${buttonInsideX}px`
    circle.classList.add('circle')
    this.appendChild(circle)
    setTimeout(() => circle.remove(), 500)
  })
})