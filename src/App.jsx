import User from './User.jsx'
import ProfilePic from './assets/profile.png'

function App(){
    return(
        <>
            <User username="Ario" image={ProfilePic} description="I'm a cool gamer I love programming."/>
            <User username="Aida" image={ProfilePic} description="I'm a cool sister. I'm the gamer's sister."/>
            <User username="Leila" image={ProfilePic} description="I freaking made the freaking cool gamer."/>
            <User username="Daruosh" image={ProfilePic} description="I'm the reason the freaking cool gamer exists."/>

        </>
        
    );
}

export default App