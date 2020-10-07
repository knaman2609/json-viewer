module Main where

import Prelude
import Effect (Effect)
import Effect.Console (log)

foreign import runFn  :: Effect Unit

data Node
type Children = Array Node

foreign import createNode :: Effect Node
foreign import hideNode :: Node -> Effect Node

closeAll :: Children -> Effect Unit
closeAll children = do
  let _ =  map (\child -> hideNode child) children 
  pure unit


addUnderline :: Children -> Effect Unit
addUnderline children = do
    let _ =  map (\child -> hideNode child) children 
    pure unit

main :: Effect Unit
main = do
  runFn

  log "hello"
