import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../Component/Header';
import Maincomp from '../Component/Maincomp';
import Card from '../Component/CardArea';
import Footer from '../Component/Footer';
import Popup from '../Component/Popup';


const News = () => {

  return (
    <div>
      <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-4 mt-4 text-center">News</h1>
      <Card />
    </div>
  );
}

export default News;
