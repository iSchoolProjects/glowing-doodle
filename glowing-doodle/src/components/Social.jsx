import facebookIco from '../images/facebook.png'
import twitterIco from '../images/twitter.png'
import googlePlusIco from '../images/g.png'
import instagramIco from '../images/instagram.png'
import '../css/social.css'
export default function Social(){
    return(
        <div className='social-container'>
        <p>Or sign in with:</p>
        <div className='ico-container'>
            <img src={facebookIco}/>
            <img src={twitterIco}/>
            <img src={googlePlusIco}/>
            <img src={instagramIco}/>
        </div>
        </div>
    )
}