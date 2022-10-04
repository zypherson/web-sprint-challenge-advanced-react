import AppFunctional from "./AppFunctional"
import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
// Write your tests here
test('sanity', () => {
  expect(true).toBe(true)
})


test('renders without errors', () => {
  render(<AppFunctional/>)
})

test('when our app mounts, you moved 0 times appears to the screen', () => {
  render(<AppFunctional/>)

  const header = screen.queryByText(/You moved 0 times/i)

  expect(header).toBeInTheDocument()
})

test('when our app mounts, "coordinates" appears to the screen', () => {
  render(<AppFunctional/>)

  const header = screen.getByText(/coordinates/i)

  expect(header).toBeInTheDocument()
})

