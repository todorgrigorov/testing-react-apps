// form testing
// http://localhost:3000/login

import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../../components/login'
import faker from 'faker'
import {build, fake} from '@jackfranklin/test-data-bot'

const userBuilder = build('User', {
  fields: {
    username: fake(f => faker.internet.userName()),
    password: fake(f => faker.internet.password())
  },
})

test('submitting the form calls onSubmit with username and password', () => {
  const handleSubmitMock = jest.fn()

  render(<Login onSubmit={handleSubmitMock} />)

  const {username, password} = userBuilder()
  const usernameInput = screen.getByLabelText('Username')
  const passwordInput = screen.getByLabelText('Password')

  userEvent.type(usernameInput, username)
  userEvent.type(passwordInput, password)

  const button = screen.getByText('Submit')
  userEvent.click(button)

  expect(handleSubmitMock).toHaveBeenCalledWith({username, password})
})

/*
eslint
  no-unused-vars: "off",
*/
