import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders Link to GitHub for jonmbsmith', () => {
  const { getByText } = render(<App />)
  const linkElement = getByText(/Link to GitHub for jonmbsmith/i)
  expect(linkElement).toBeInTheDocument()
})
