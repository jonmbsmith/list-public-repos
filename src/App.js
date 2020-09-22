import React, { useEffect, useState } from 'react'
import fetch from 'isomorphic-fetch'
import './App.css'
import Person from './components/Person'
import List from './components/List'
import withListLoading from './components/withListLoading'
import globe from './globe.svg'

function App () {
  const ListLoading = withListLoading(List)
  const [appState, setAppState] = useState({
    loading: false,
    repos: null
  })
  const fullName = new Person('Jon', 'Smith').getFullName()

  useEffect(() => {
    setAppState({ loading: true })
    const apiUrl = 'https://api.github.com/users/jonmbsmith/repos'
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        setAppState({ loading: false, repos: repos })
      })
  }, [setAppState])
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={globe} className='App-globe' alt='globe' />
      </header>
      <div className='container'>
        <h1>Repositories of {fullName}</h1>
      </div>
      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} repos={appState.repos} />
      </div>
      <footer>
        <div className='footer'>
          <p>
            Built{' '}
            <span role='img' aria-label='tick'>
            ✔
            </span>{' '}
            Demo by {fullName} using React v{React.version}
          </p>
          <a
            className='App-link'
            href='https://github.com/jonmbsmith'
            target='_blank'
            rel='noopener noreferrer'
          >
            Link to GitHub for jonmbsmith
          </a>
        </div>
      </footer>
    </div>
  )
}
export default App
