import React from "react";
import  Task from "./components/Task";
import "./App.css";
import Home from '.screens/Home';
import Login from '.screens/Login';
import Register from '.screens/Register';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';








function App() {

  return (
    <div className="App">
      <Task />
    </div>
  );
}
ReactDOM.render(
<body>
<router>
<div>
  <ul>
<li>
<Link to="/">Home</Link>
</li>
<li>
<Link to="/login">Login</Link>
</li>
<li>
<Link to="/register">Register</Link>
</li>

</ul>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={register} />
    </div>
<hr />
<Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />


</router>
 
</body>
);
render(<App />, document.getElementById('root'));
