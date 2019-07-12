import React, { Component } from 'react';
import Nav from '../component/navbar.js';
import Body from '../component/body.js';
import Footer from '../component/footer';
import bkf1 from '../bkf1.jpg';
import { Route } from "react-router-dom";
import YesNoQuestion from "../";

class Home extends Component {
    
    render() {
        return (
            <div>
                <div className='container,center'>
                    <Nav />
                    <div style={{ backgroundImage: 'url(' + bkf1 + ')', backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', color: 'white' }}>

                        <Route path="/" component={Body} />

                        <Footer />
                    </div>

                </div>
            </div>
        );
    }
}
export default Home;