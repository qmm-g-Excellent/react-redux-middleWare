### how to use it

     npm  install

     npm run webpack

     npm  start



#写代码总结:
出现的错误:
  createstore  写成  createState

  import {createstore}  from "redux"

  import React from "react"

  import {render}  from 'react-dom'

  reducer方法里面忘记写return state 导致 connect 里面使用不到 state


