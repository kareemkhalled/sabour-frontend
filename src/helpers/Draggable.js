import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'

export function create_draggables(targetClass, boundsClass, type = 'x,y') {
  gsap.registerPlugin(Draggable)
  let targets = document.getElementsByClassName(targetClass)
  let container = document.querySelector('.' + boundsClass)

  Draggable.create(targets, {
    bounds: container,
    type: type,
    edgeResistance: 1,
    force3D: false,
    onDragEnd: onDragEndCallback
  })

  // fix the shift happening in y axis
  Array.from(targets).forEach((target) => {
    target.style.transform = 'translate(0px, 0px)'
  })

  function onDragEndCallback() {
    const element = this.target
    const container = document.querySelector('.' + boundsClass)

    const elementRect = element.getBoundingClientRect()
    const containerRect = container.getBoundingClientRect()

    const leftPercentage = ((elementRect.left - containerRect.left) / containerRect.width) * 100
    const topPercentage = ((elementRect.top - containerRect.top) / containerRect.height) * 100

    const elementHCenter = ((elementRect.right - elementRect.left) / 2 / containerRect.width) * 100
    const elementVCenter = ((elementRect.bottom - elementRect.top) / 2 / containerRect.height) * 100
    const centerH = leftPercentage + elementHCenter
    const centerV = topPercentage + elementVCenter
    console.clear()
    console.log(`Top: ${topPercentage.toFixed(2)}% (centerV: ${centerV.toFixed(2)}%)`)
    console.log(`Left: ${leftPercentage.toFixed(2)}% (centerH: ${centerH.toFixed(2)}%)`)
  }
}
