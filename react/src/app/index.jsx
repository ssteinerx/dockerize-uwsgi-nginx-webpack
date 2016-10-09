import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './store/configureStore'
import { loadAuthFromStorage }  from './actions/auth'
import App from './containers/Root.jsx'


const store = configureStore()
store.dispatch(loadAuthFromStorage())

const history = syncHistoryWithStore(browserHistory, store)

render(<AppContainer>
  <App store={store} history={history} />
</AppContainer>, document.getElementById('app'))

if (module.hot) {
  module.hot.accept('./containers/Root.jsx', () => {
    const NextApp = require('./containers/Root.jsx').default
     render(
       <AppContainer>
         <NextApp store={store} history={history} />
       </AppContainer>,
       document.getElementById('app')
     )
   })
 }
