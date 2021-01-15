// Avoid implementation details
// http://localhost:3000/counter

import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import Counter from '../../components/counter'
import userEvent from '@testing-library/user-event'

test('counter increments and decrements when the buttons are clicked', () => {
  render(<Counter />)
  const decrement = screen.getByText('Decrement')
  const increment = screen.getByText('Increment')
  const message = screen.getByText(/current count/i)

  expect(message).toHaveTextContent('Current count: 0')
  userEvent.click(increment)
  expect(message).toHaveTextContent('Current count: 1')
  userEvent.click(decrement)
  expect(message).toHaveTextContent('Current count: 0')
})
