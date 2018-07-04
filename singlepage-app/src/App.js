import React from 'react';
import {Route} from 'react-router-dom';
import Layout from './components/Layout';

import  Home from './components/Home'
import  About from './components/About';
export default () => (
    <Layout>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />        
    </Layout>
)