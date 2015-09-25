picker = document.querySelector '#picker'

randomColor = () ->
  random8bit = -> Math.floor(Math.random() * 256)
  alpha = Math.max (do Math.random), 0.2
  return "rgba(#{do random8bit}, #{do random8bit}, #{do random8bit}, #{do Math.random}"

makeBox = (width, height, color) ->
  r = document.createElement 'div'
  r.style.width = "#{width}px"
  r.style.height = "#{height}px"
  r.style.display = 'inline-block'
  if not color?
    color = do randomColor
  r.style['background-color'] = color
  return r

picker.setElements
  elt1: makeBox 200, 100
  elt2: makeBox 100, 200
  elt3: makeBox 10, 200
  elt4: makeBox 200, 10

Polymer.Gestures.add document, 'down', () -> picker.show()
picker.addEventListener 'select', (evt) ->
  console.log 'select:', evt.detail