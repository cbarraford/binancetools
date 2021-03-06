import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from 'antd';

import { ContextProvider } from "./context"

import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'
import Footer from './components/layout/Footer'

import Home from './components/pages/Home'
import MultiSend from './components/pages/MultiSend'
import MultiSig from './components/pages/MultiSig'
import Escrow from './components/pages/Escrow'
import HEscrow from './components/pages/HedgeEscrow'
import DAO from './components/pages/DAO'
import Swap from './components/pages/Swap'
import Unlock from './components/pages/Wallet/Unlock'

import 'antd/dist/antd.css'
import './App.css'

const { Content } = Layout;

const App = (props) => {
  return (
    <ContextProvider>
      <Router>
        <div>
          <Layout>
            <Header />
            <Layout>
              <Sidebar />
              <Content style={{background: "#fff"}}>
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/multi-send/" component={MultiSend} />
                  <Route path="/multi-sig/" component={MultiSig} />
                  <Route path="/escrow/" component={Escrow} />
                  <Route path="/hedge-escrow/" component={HEscrow} />
                  <Route path="/dao/" component={DAO} />
                  <Route path="/swap/" component={Swap} />
                  <Route path="/wallet/unlock" component={Unlock} />
                </Switch>
              </Content>
            </Layout>
            <Footer />
          </Layout>
        </div>
      </Router>
    </ContextProvider>
  );
}

export default App;
