module Main where

import Prelude
import Effect (Effect)
import Effect.Console (log)

foreign import runFn  :: Effect Unit

main :: Effect Unit
main = do
  runFn
  log "hello"
