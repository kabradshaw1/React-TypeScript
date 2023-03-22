import React from 'react'
import { Child } from './Child'
export default function Parent() {
  return (
    <Child color='red' onClick={() => console.log('clicked')}/>
  )
}
