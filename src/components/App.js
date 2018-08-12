import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from '../components/Dashboard'
import LogInPage from '../components/LogInPage'
import LoadingBar from 'react-redux-loading'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
	componentDidMount(){
		this.props.dispatch(handleInitialData())
	}
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar/>
            <div>
              <Navbar/>
              {this.props.loading === true
                ? null
                : <div>
                    <Route path='/' exact component={Dashboard} />
                    <Route path='/login' component={LogInPage} />
                  </div>
              }
            </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps ({ authedUser }) {
 return {
   loading: authedUser === null
 }
}
 

export default connect(mapStateToProps)(App)