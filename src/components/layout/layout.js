import React from 'react';
import { Provider } from 'react-redux';
import { create } from 'dva-core';
import memberModel from '../../models/memberModel';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ToTop from '../ToTop/ToTop';
import './Layout.scss';

const app = create();
app.model(memberModel);
app.start();
const store = app._store;

export default ({ children }) => (
  <Provider store={store}>
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