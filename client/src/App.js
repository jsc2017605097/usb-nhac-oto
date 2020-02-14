import React,{Fragment} from "react";
// import components
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Form from './components/form/Form';
import {FormProvider,FormContext} from './context/Form';
// import css
import "./styles.css";
import Media from 'react-media';
import NavMobile from './components/header/NavMobile';
import Bar from './components/header/Bar';
export default function() {
  return (
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
      <FormContext.Consumer>
      {({menu})=>( menu && <Bar />)}
      </FormContext.Consumer>
      <Home />
      <Footer />
      </FormProvider>
    </div>
  );
}
