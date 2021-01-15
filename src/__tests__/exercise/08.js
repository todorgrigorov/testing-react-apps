// testing custom hooks
// http://localhost:3000/counter-hook

import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import useCounter from '../../components/use-counter'
import {renderHook, act} from '@testing-library/react-hooks'

test('exposes the count and increment/decrement functions', () => {
  const {result} = renderHook(useCounter)
  expect(result.current.count).toMatchInlineSnapshot(`0`)
  act(result.current.decrement)
  expect(result.current.count).toMatchInlineSnapshot(`-1`)
  act(result.current.increment)
  expect(result.current.count).toMatchInlineSnapshot(`0`)
})

test('allows customization of the initial count', () => {
  const {result} = renderHook(useCounter, {initialProps: {initialCount: 10}})
  expect(result.current.count).toMatchInlineSnapshot(`10`)
})

test('allows customization of the step', async () => {
  const {result} = renderHook(useCounter, {initialProps: {step: 5}})
  expect(result.current.count).toMatchInlineSnapshot(`0`)
  act(result.current.increment)
  expect(result.current.count).toMatchInlineSnapshot(`5`)
})

/* eslint no-unused-vars:0 */
