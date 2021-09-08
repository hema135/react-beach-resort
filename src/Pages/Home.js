import React, { Component } from 'react';
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import {Link} from 'react-router-dom';
import Services from '../Components/Services';
import Featured from '../Components/Featured';

export default class Home extends Component {
    render() {
        return (
           <> 
           <Hero>
                <Banner title="luxurious rooms" subtitle="deluxe rooms starting from $299">
                <Link to="/rooms" className="btn-primary">Our Rooms</Link>
                </Banner>
            </Hero>
            <Services />
            <Featured />
            </>
        )
    }
}
