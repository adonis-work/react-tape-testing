import React from 'react'
import createComponent from 'react-unit'
import tape from 'tape'

import { createRenderer } from 'react-addons-test-utils'
import addAssertions from 'extend-tape'
import jsxEquals from 'tape-jsx-equals'

const test = addAssertions(tape, {jsxEquals})

// Component to test
import Button from '../components/Button'

test('Button props', t => {
  // Shallow rendering: Render React element only *one* level deep
  const component = createComponent.shallow(<Button label='foo' />)

  // Test component props and content
  t.equal(
    component.props.className,
    'default-class',
    'props.className mora uporabiti default če ni definiran')

  t.equal(component.text,
    'foo',
    'props.label se mora rendrati kot vsebina')

  t.end()
})

test('Button render', t => {
  // Test rendered output
  const r = createRenderer()
  r.render(<Button label='share' />)
  const result = r.getRenderOutput()
  t.jsxEquals(result, <div className='default-class'>
                        share
                      </div>)

  t.end()
})
