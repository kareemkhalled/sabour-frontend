import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'

let draggables = []
let isResizing = false

function create_draggables() {
  draggables = Draggable.create('.data-holder', {
    bounds: '.container',
    type: 'left,top',
    onDragEnd: function () {
      const element = this.target
      const container = document.querySelector('.container')

      const elementRect = element.getBoundingClientRect()
      const containerRect = container.getBoundingClientRect()

      const leftPercentage = ((elementRect.left - containerRect.left) / containerRect.width) * 100
      const topPercentage = ((elementRect.top - containerRect.top) / containerRect.height) * 100

      // const elementHCenter =
      //   ((elementRect.right - elementRect.left) / 2 / containerRect.width) * 100
      // const elementVCenter =
      //   ((elementRect.bottom - elementRect.top) / 2 / containerRect.height) * 100
      // const centerH = leftPercentage + elementHCenter
      // const centerV = topPercentage + elementVCenter

      element.style.left = `${leftPercentage.toFixed(2)}%`
      element.style.top = `${topPercentage.toFixed(2)}%`

      // console.log(`left: ${leftPercentage.toFixed(2)}% ; top: ${topPercentage.toFixed(2)}%`)
      // console.log(`Left: ${leftPercentage.toFixed(2)}% (centerH: ${centerH.toFixed(2)}%)`)
      // console.log(`Top: ${topPercentage.toFixed(2)}% (centerV: ${centerV.toFixed(2)}%)`)
      const newWidth = (elementRect.width / containerRect.width) * 100
      const newHeight = (elementRect.height / containerRect.height) * 100
      console.log(
        `left: ${leftPercentage.toFixed(2)}%;top: ${topPercentage.toFixed(2)}%;width: ${newWidth.toFixed(2)}%;height: ${newHeight.toFixed(2)}%;`
      )
    }
  })
}
function create_word_draggables() {
  draggables = Draggable.create('.data-holder.abc', {
    bounds: '.container',
    type: 'left,top',
    onDragEnd: function () {
      const element = this.target
      const closestWrapper = element.closest('.data-holder')

      if (!closestWrapper) {
        console.error('No wrapper found for the dragged element.')
        return
      }
      const wrapperRect = closestWrapper.getBoundingClientRect()
      const elementRect = element.getBoundingClientRect()

      const leftPercentage = ((elementRect.left - wrapperRect.left) / wrapperRect.width) * 100
      const topPercentage = ((elementRect.top - wrapperRect.top) / wrapperRect.height) * 100

      element.style.left = `${leftPercentage.toFixed(2)}%`
      element.style.top = `${topPercentage.toFixed(2)}%`

      console.log(`Left relative to wrapper: ${leftPercentage.toFixed(2)}%`)
      console.log(`Top relative to wrapper: ${topPercentage.toFixed(2)}%`)
    }
  })
}
function disableDrag() {
  for (let draggable of draggables) {
    draggable.kill()
  }
}

function enableDrag() {
  create_draggables()
}
function enableWordDrag() {
  create_word_draggables()
}

export function init_gsap_draggable() {
  gsap.registerPlugin(Draggable)
  create_draggables()
  create_word_draggables()
  enableWordDrag()
  disableDrag()
}

const resizeObserver = new ResizeObserver((entries) => {
  const containerElement = document.querySelector('.container')
  for (const entry of entries) {
    const element = entry.target // Get the specific element that resized

    const containerWidth = containerElement.clientWidth
    const containerHeight = containerElement.clientHeight

    const newWidth = (element.clientWidth / containerWidth) * 100
    const newHeight = (element.clientHeight / containerHeight) * 100
    element.style.width = `${newWidth.toFixed(2)}%`
    element.style.height = `${newHeight.toFixed(2)}%`

    // console.log(`New Width: ${newWidth.toFixed(2)}%`);
    // console.log(`New Height: ${newHeight.toFixed(2)}%`);
  }
})

function resize_observe(element) {
  resizeObserver.observe(element)
  element.style.overflow = 'scroll'
  element.style.scrollbarWidth = 'none'
  element.style.resize = 'both'

  element.addEventListener('mousedown', () => {
    isResizing = true
  })

  element.addEventListener('mouseup', () => {
    if (isResizing) {
      const containerElement = document.querySelector('.container')
      const containerWidth = containerElement.clientWidth
      const containerHeight = containerElement.clientHeight
      const newWidth = (element.clientWidth / containerWidth) * 100
      const newHeight = (element.clientHeight / containerHeight) * 100

      const elementRect = element.getBoundingClientRect()
      const containerRect = containerElement.getBoundingClientRect()

      const leftPercentage = ((elementRect.left - containerRect.left) / containerRect.width) * 100
      const topPercentage = ((elementRect.top - containerRect.top) / containerRect.height) * 100

      // console.log(`Resize End - New Width: ${newWidth.toFixed(2)}%`);
      // console.log(`Resize End - New Height: ${newHeight.toFixed(2)}%`);
      console.log(
        `left: ${leftPercentage.toFixed(2)}%; top: ${topPercentage.toFixed(2)}%; width: ${newWidth.toFixed(2)}%; height: ${newHeight.toFixed(2)}%`
      )

      isResizing = false
    }
  })
}
export function resizer() {
  const dataHolderElements = document.querySelectorAll('.data-holder')
  // Observe all elements with the class 'data-holder'
  dataHolderElements.forEach((element) => resize_observe(element))
}

function print_inside_tags() {
  const containerElement = document.querySelector('.container')
  console.clear()
  console.log(containerElement.outerHTML)
}

function keydown(evt) {
  const containerElement = document.querySelector('.container')
  if (!evt) evt = event
  else if (evt.shiftKey && evt.keyCode == 53) {
    enableWordDrag()
  } else if (evt.shiftKey && evt.keyCode == 50) {
    disableDrag()
  } else if (evt.shiftKey && evt.keyCode == 51) {
    enableDrag()
  } else if (evt.shiftKey && evt.keyCode == 52) {
    print_inside_tags()
  } else if (evt.shiftKey && evt.keyCode == 49) {
    //Shif+TAB
    // alert('Shift+TAB')
    var wrapperDiv = document.createElement('div')
    wrapperDiv.className = 'wrapper'
    var dataDiv = document.createElement('div')
    dataDiv.className = 'data-holder abc'
    dataDiv.style.width = '10%'
    dataDiv.style.height = '10%'
    dataDiv.style.left = '10%'
    dataDiv.style.top = '10%'
    wrapperDiv.append(dataDiv)
    containerElement.append(wrapperDiv)
    resize_observe(dataDiv)
    enableDrag()
  }
}

export function init_keyboard_shortcuts() {
  document.onkeydown = keydown
}
