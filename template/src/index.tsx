// order to import: CSS, React, node, code, components, assets

import './index.sass'
// React
import React from 'react'
import ReactDOM from 'react-dom'
// code
import * as serviceWorker from './serviceWorker'
// components
import App from './Components/React/App'

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
