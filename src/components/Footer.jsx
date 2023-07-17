
import IGlogo from '../assets/IGlogo.png'
import LinkedInLogo from '../assets/LinkedInLogo.png'
import GithubLogo from '../assets/GithubLogo.png'


function Footer() {

    return (
       
            <div className="flex flex-row justify-between gap-12 py-16">
        
        <a href="https://instagram.com/windsywinds" target="_blank" className="w-12"> <img src={IGlogo} /> </a>
        <a href="https://linkedin.com/windsy-winds" target="_blank" className="w-12"> <img src={LinkedInLogo} /> </a>
        <a href="https://github.com/windsywinds" target="_blank" className="w-12"> <img src={GithubLogo} /> </a>
        
      </div>
            
   
    )
}

export default Footer;