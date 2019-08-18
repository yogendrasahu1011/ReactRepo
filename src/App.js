import React, { Component } from 'react';
import Projects from '../src/Projects';
import SocialProfiles from '../src/SocialProfiles';
import profile  from '../src/assets/profile.jpg';
class App extends Component {
    state = {displayBio:false}
   
    toggleDisplayBio = () =>{
        this.setState({displayBio: !this.state.displayBio});
    }
    render(){
       
        return (
            <div>
                <img className='profile' src={profile}/>
                <h1>Hello!</h1>
                
                <p>My name is Yogendra Sahu. I am software engineer,</p>
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