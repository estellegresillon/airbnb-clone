//import React from "react";
// import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import { BrowserRouter as Router, Route } from 'react-router-dom'

//import "../public/static/css/index.scss";
//import Header from "../components/common/header";
//import Home from "../components/home";
// import Restaurants from "../components/restaurants";
// import Detail from "../components/detail";
// import Awards from "../components/awards";
// import Contact from "../components/contact";



//const HomeContainer = () => {
  //return (
    // <>
    //   <Header />
    //   <Home />
      {/* <Route exact path="/awards" component={Awards} />
      <Route exact path="/restaurants" component={Restaurants} />
      <Route exact path="/detail/:id" component={Detail} />
      <Route exact path="/contact" component={Contact} /> */}
    {/* </> */}
  //);
//};

//export default HomeContainer;
// ReactDOM.render(
//   <Provider >
//     <App />
//   </Provider>,
//   document.getElementById("app")
// );

import React, {Component} from "react";
import { connect } from "react-redux";
import AppLayout from "../components/app-layout";
import Home from "../components/home";




class Page extends Component {
    // static getInitialProps({store, isServer, pathname, query}) {
    //     store.dispatch({type: 'FOO', payload: 'foo'}); // component will be able to read from store's state when rendered
    //     return {custom: 'custom'}; // you can pass some custom props to component from here
    // }
    render() {
        return (
          <AppLayout>
            <Home />
          </AppLayout>
        )
    }
}

export default connect(state => state)(Page);