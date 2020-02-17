import React,{Fragment} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import components
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Form from './components/form/Form';
import {FormProvider,FormContext} from './context/Form';
import { animateScroll as scroll } from "react-scroll";
// import css
import "./styles.css";
import Media from 'react-media';
import NavMobile from './components/header/NavMobile';
import Bar from './components/header/Bar';
import top from './components/home/img/top.png';

const toTop = ()=>{
  scroll.scrollToTop();
}
export default function() {
  return (
    <Router>
     <Switch>
        <Route path="/dangkithanhcong">
                <div>Dang ki thanh cong</div>
        </Route>
        <Route path ="/">
          <div className="App">
          <FormProvider>
          <Media queries={{ 
              iphoneAndIpad:"(max-width: 768px)",
              ipadproAndComputer: "(min-width: 769px)"
            }}>
              {matches => (
                  <Fragment>
                  {matches.iphoneAndIpad && <NavMobile />}
                  </Fragment>
              )}
            </Media>
          <Header />
          <FormContext.Consumer>
            {({display})=>( display && <Form />)}
          </FormContext.Consumer>
          <Media queries={{ 
              iphoneAndIpad:"(max-width: 768px)",
              ipadproAndComputer: "(min-width: 769px)"
            }}>
              {matches => (
                  <Fragment>
                  {matches.ipadproAndComputer && <div className = 'totop'>
            <img onClick = {toTop} className = 'radius' width = '40px' src = {top} alt = 'totop png' /> 
          </div>}
                  </Fragment>
              )}
            </Media>
          <FormContext.Consumer>
          {({menu})=>( menu && <Bar />)}
          </FormContext.Consumer>
          <Home />
          <Footer />
          </FormProvider>
        </div>
      </Route>
      
      </Switch>
    </Router>
  );
}
