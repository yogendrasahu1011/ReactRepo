import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile  from '../src/assets/profile.jpg';
import Title from './Title';


class App extends Component {
    state = {displayBio:false}
   
    toggleDisplayBio = () =>{
        this.setState({displayBio: !this.state.displayBio});
    }
    render(){
       
        return (
            <div>
                
                <hr/>
                <img className='profile' src={profile}/>
                <h1>Hello!</h1>
                
                <p>My name is Yogendra Sahu.</p>
                <Title/>
                <p>Looking forward to work in meaningful project.</p>
            
            {
                this.state.displayBio ? (
                    <div>
            
                        <p>I live in Sunnyvale CA</p>
                        <p>I love making Web Applications</p>
                        <p>Music Lover</p>
                        <button onClick={this.toggleDisplayBio}>Read less</button>
                    </div>) : (<div><button onClick={this.toggleDisplayBio}>Read More</button></div>)
            }
            <hr/>
            <Projects/>
            <hr/>
            <SocialProfiles/>
           
            </div>
    
            
        )
    }
}

export default App;