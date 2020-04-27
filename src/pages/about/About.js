import React from 'react';
import AuthorComponent from '../../components/Author'
import patricia from '../../assets/patricia.jpg';
import './About.css'


class About extends React.Component {

    render() {

        return <div className="App" id="about-board">
        <AuthorComponent img ={patricia} name="Ana P. Graça" info={{ description: 'nice girl', work: 'Developer' }} />
        </div>
    }
}

export default About;