import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import MyResumeWeb from "./myResumeWeb/myResumeWeb"
import MyDocument from "./myDocument/myDocument"

class MyRouter extends React.Component {
	render() {
		return(
      <Router >
        <div>
          <Route exact path="/" component={MyResumeWeb} />
          <Route path="/MyDocument" component={MyDocument} />
        </div>
      </Router>
		)
	}
}

export default MyRouter
