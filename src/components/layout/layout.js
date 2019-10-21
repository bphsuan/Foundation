import React from 'react';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet';
import { create } from 'dva-core';
import memberModel from '../../models/memberModel';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ToTop from '../ToTop/ToTop';
import './Layout.scss';
import Favicon from '../../images/favicon.ico';
// import { CookiesProvider } from 'react-cookie';
const app = create();
app.model(memberModel);
app.start();
const store = app._store;

export default ({ children }) => (
  <Provider store={store}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>紅粉知己 Find Your Foundation</title>
      <link rel="icon" href={Favicon} type="image/x-icon" />
    </Helmet>
    <div>
      <Header />
      <div className="content">
        {children}
      </div>
      <Footer />
      <ToTop
        scrollStepInPx="50"
        delayInMs="16.66"
      />
    </div>
  </Provider>
)