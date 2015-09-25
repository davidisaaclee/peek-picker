objToList = (obj) ->
  result = []
  for k, v of obj
    result.push
      key: k
      value: v
  return result

###
@param [{width: [Number], height: [Number]}] area
@param [{[BlockID]: {width: [Number], height: [Number]}}] blocks
@return [{[BlockID]: {left: [Number], top: [Number]}}]
###
pack1 = (area, blocks) ->
  offset = left: 0, top: 0
  lineHeight = 0
  result = {}
  for blockId, block of blocks
    blockRight = offset.left + block.width
    if blockRight > area.width
      offset.left = 0
      offset.top += lineHeight
      lineHeight = 0
      blockRight = offset.left + block.width
    result[blockId] =
      left: offset.left
      top: offset.top

    offset.left = blockRight
    lineHeight = Math.max lineHeight, block.height
  return result

pack2 = (area, blocks) ->
  sortedBlocks =
    (objToList blocks).sort (a, b) -> b.value.width - a.value.width

  workspace =
    placed: {}
    verticalOpen: [
      left: 0
      top: 0
      width: area.width
      height: area.height
    ]
    horizontalOpen: [
      left: 0
      top: 0
      width: area.width
      height: area.height
    ]

  placed = workspace.placed[sortedBlocks[0].key] =
    left: 0
    top: 0
    width: sortedBlocks[0].value.width
    height: sortedBlocks[0].value.height

  workspace.verticalOpen =
    workspace.verticalOpen
      .map (block) ->
        # left side of placed block intersects
        leftSideIntersects =
          block.left < placed.left < (block.left + block.width)
        rightSideIntersects =
          block.left < (placed.left + placed.width) < (block.left + block.width)

        if leftSideIntersects or rightSideIntersects
          newBlocks = []
          if leftSideIntersects
            newBlocks.push
              left: block.left
              top: block.top
              width: placed.left - block.left
              height: block.height
          if rightSideIntersects
            newBlocks.push
              left: block.left + (placed.left + placed.width)
              top: block.top
              width: placed.left - block.left
              height: block.height
          return newBlocks
        else
          return [block]
      .reduce (acc, elm) -> acc.concat elm
  console.log workspace.verticalOpen



module.exports = pack2