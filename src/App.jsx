import User from './User.jsx'
import ProfilePic from './assets/profile.png'

function App(){
    return(
        <>
            <User username="Ario" image={ProfilePic} description="I'm a cool gamer I love programming."/>

        </>
        
    );
}

export default App