module Main where

import Prelude
import Effect (Effect)
import Effect.Console (log)

foreign import runFn  :: Effect Unit

data Node
data JSON
type Children = Array Node

foreign import createNode :: Effect Node
foreign import hideNode :: Node -> Effect Node
foreign import addClass :: Node -> String -> Effect Unit
foreign import removeClass :: Node -> String -> Effect Unit
foreign import getNode :: Effect Node
foreign import updateText :: String -> Effect Unit

closeAll :: Children -> Effect Unit
closeAll children = do
  let _ =  map (\child -> hideNode child) children
  pure unit


addUnderline :: Node  -> Boolean -> Effect Unit
addUnderline node nodeClicked = do
  addClass node "highlight"

  if (nodeClicked == true) then
    removeClass node "highlight"
  else
    pure unit

  -- nodeClicked = node


showContent :: Node -> String -> JSON -> Int -> Effect Unit
showContent node name json level = do
  if (level < 2) then do
    -- children = node.childNodes
    children <- getNode
    closeAll  [children]
  else do
    -- updateText json.name
    updateText "hello"
    pure unit


createLevel :: String -> String -> JSON -> Node -> Int
createLevel name parentKey json rootNode level = do
  node <- createNode




main :: Effect Unit
main = do
  runFn

  log "hello"
