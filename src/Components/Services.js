import React, { Component } from 'react'
import Title from './Title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';

export default class Services extends Component {
    state={
        Services:[
            {
                icon:<FaCocktail />,
                title: "free cocktails",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis "
            },
            {
                icon:<FaHiking />,
                title: "endless hiking",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis "
            },
            {
                icon:<FaShuttleVan />,
                title: "free shuttle",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis "
            },{
                icon:<FaBeer />,
                title: "Strongest beer",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis "
            }
        ]
    }
    render() {
        return (
            <section className="services">
            <Title title="Services" />
            <div className="services-center ">
            {this.state.Services.map((item, index) => {
                return <article key={index} className="service">
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                </article>
            })}
            </div>
            </section>
               
        )
    }
}
