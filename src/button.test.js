import React from 'react'
import createComponent from 'react-unit'
import tape from 'tape'

import { createRenderer } from 'react-addons-test-utils'
import addAssertions from 'extend-tape'
import jsxEquals from 'tape-jsx-equals'

const test = addAssertions(tape, {jsxEquals})

// komponenta na testiranju
import Button from './button'

test('Button parametri', t => {
  // shallow render: ne rendra podelementov
  let c = createComponent.shallow(<Button />)

  // uporaba defaultov
  t.equal(
    c.props.className,
    'default-class',
    'class mora uporabiti default-class, če ni definiran')

  t.equal(
    c.text,
    'button',
    'label mora uporabiti button, če ni definiran')

  // render vsebine
  c = createComponent.shallow(<Button label='gumb' />)

  t.equal(
    c.text,
    'gumb',
    'label se uporabi za vsebino')

  t.end()
})

test('Button render', t => {
  // rendranje DOM objekta
  const r = createRenderer()
  r.render(<Button label='share' />)
  t.jsxEquals(
    r.getRenderOutput(),
     <div className='default-class'>
       share
     </div>,
     'props.label se mora rendrati kot vsebina, nedefiniran class se mora rendrati kot default-class'
   )

  t.end()
})
