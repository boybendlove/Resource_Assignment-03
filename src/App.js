import React, {Suspense} from 'react';
import './App.css';
import './css/custom.css'
import './css/style.default.css'

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Footer from './Share/Footer/Footer';
import Header from './Share/Header/Header';
import Chat from './Share/Chat/Chat';
// import { Suspense } from 'react';


const Home = React.lazy(()=> import('./Home/Home'))
const Detail = React.lazy(()=> import('./Detail/Detail'))
const Cart = React.lazy(()=> import('./Cart/Cart'))
const SignIn = React.lazy(()=> import('./Authentication/SignIn'))
const SignUp = React.lazy(()=> import('./Authentication/SignUp'))
const Checkout = React.lazy(()=> import('./Checkout/Checkout'))
const Shop = React.lazy(()=> import('./Shop/Shop'))


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header />
          <Suspense fallback={<p>Loading...</p>}>
          <Switch>

            <Route exact path='/' component={Home} />
            <Route path='/detail/:id' component={Detail} />
            <Route path='/cart' component={Cart} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/checkout' component={Checkout} />
            <Route path='/shop' component={Shop} />

          </Switch>
          </Suspense>
        </BrowserRouter>

        <Chat />

      <Footer />
    </div>
  );
}

export default App;
