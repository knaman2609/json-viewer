module Main where

import Prelude
import Effect (Effect)
import Effect.Console (log)
import Data.Maybe

foreign import runFn  :: Effect Unit

data Node
data JSON
type Children = Array Node

foreign import createNode :: Effect Node
foreign import hideNode :: Node -> Effect Node
foreign import addClass :: Node -> String -> Effect Unit
foreign import removeClass :: Node -> String -> Effect Unit
foreign import getNode :: Effect Node
foreign import showJson :: String -> Effect Unit
foreign import addText :: Node -> String -> Effect Unit

keys :: JSON -> Array String
keys json = [""]

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
    showJson "hello"
    pure unit


createLevel :: String -> String -> JSON -> Node -> Int -> Effect Node
createLevel name parentKey json rootNode level = do
  node <- createNode
  addClass node ("level l-" <> "level")
  addText node name

  --- event Listner

  pure $ node


createSidebarRecursive  :: Maybe JSON -> String -> JSON -> Node -> Int -> Effect Unit
createSidebarRecursive sideBarJson parentKey contentJson rootNode level = do
  case sideBarJson of
    Just json -> do
      let k = keys json

      pure unit

    Nothing -> pure unit


parseJsonRecursive  :: JSON -> String -> JSON -> JSON -> Int -> Effect Unit
parseJsonRecursive json parentKey sideBarJson contentJson level = pure unit


parseJson :: JSON -> Effect Unit
parseJson json = pure unit


main :: Effect Unit
main = do
  runFn

  log "hello"
