# pack = require 'DumbPacker'
Packery = require 'packery'

objToString = (obj, join = ' ', transform = (x) -> x) ->
  result = []
  for k, v of obj
    result.push transform "#{k}: #{v}"
  return result.join join

offsetToTransformString = ({left, top}, setAbsolutePosition = false) ->
  properties =
    '-webkit-transform': "translate3d(#{left}px, #{top}px, 0px)"
    '-moz-transform': "translate3d(#{left}px, #{top}px, 0px)"
    '-ms-transform': "translate3d(#{left}px, #{top}px, 0px)"
    '-o-transform': "translate3d(#{left}px, #{top}px, 0px)"
    'transform': "translate3d(#{left}px, #{top}px, 0px)"

  if setAbsolutePosition
    properties['position'] = 'absolute'

  objToString properties, ' ', ((str) -> "#{str};")

# Gets dimensions of element by quietly adding to DOM, measuring, and then
#   removing the element and restoring DOM to initial state.
getDimensions = (element, appendTo) ->
  popped =
    display: element.style['display']
    position: element.style['position']
    visibility: element.style['visibility']

  element.style['display'] = 'block'
  element.style['position'] = 'absolute'
  element.style['visibility'] = 'hidden'

  appendTo.appendChild element

  dimensions =
    width: element.offsetWidth
    height: element.offsetHeight

  appendTo.removeChild element

  element.style['display'] = popped.display
  element.style['position'] = popped.position
  element.style['visibility'] = popped.visibility

  return dimensions



Polymer
  is: 'peek-picker'

  properties:
    width:
      type: Number
      value: 500
      observe: '_dimensionsChanged'
    height:
      type: Number
      value: 500
      observe: '_dimensionsChanged'
    visible:
      type: Boolean
      value: false

  listeners:
    'track': '_onTrack'
    'up': '_onUp'


  ready: () ->
    @setScrollDirection 'none'
    @positionedItems = []
    @_tracking = false

    @_dimensionsChanged()


  setElements: (elements) ->
    blocks = {}
    for key, elm of elements
      dim = getDimensions elm, this
      blocks[key] =
        width: dim.width
        height: dim.height

      @push 'positionedItems',
        element: elm
        key: key


  show: () ->
    @visible = true
    grid = @$.grid
    pckry = new Packery grid,
      itemSelector: '.picker-item'
      gutter: 10

  hide: () ->
    @visible = false

  finish: (overElement) ->
    if overElement?
      if overElement.matches '.picker-item'
        @fire 'select',
          key: overElement.dataset.key
          element: overElement.firstChild
        do @hide
      if overElement.matches '.background'
        do @hide
    do @hide

  _onTrack: (evt, detail) ->
    switch detail.state
      when 'start'
        @_tracking = true
      when 'track'
        hovered = do detail.hover
        if (hovered is @$.background) or (not hovered?)
          if @_overItem?
            Polymer.dom(@_overItem).classList.remove 'over'
        else if hovered isnt @_overItem
          if @_overItem?
            Polymer.dom(@_overItem).classList.remove 'over'
          while not (hovered is document or hovered.matches '.picker-item, #background')
            hovered = hovered.parentNode
          if hovered.matches? '.picker-item'
            @_overItem = hovered
            Polymer.dom(@_overItem).classList.add 'over'
      when 'end'
        @_tracking = false
        if @_overItem?
          @finish @_overItem
        else
          @finish null

  _onUp: (evt, detail) ->
    # if user hasn't tracked at all, simply hide without any action
    if not @_tracking
      @hide()

  _dimensionsChanged: () ->
    @style.width = "#{@width}px"
    @style.height = "#{@height}px"