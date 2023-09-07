import { FaFacebookF, FaHome, FaPaperPlane, FaRegPaperPlane, FaRss } from 'react-icons/fa'
import './css/footer.css'
import {LuMailOpen} from 'react-icons/lu'
import { BsFillTelephoneFill, BsTwitter } from 'react-icons/bs'
import { TfiYoutube } from 'react-icons/tfi'
import { GrGooglePlus } from 'react-icons/gr'

export default function Footer(){
return(<><footer>
    <div className="footer1">
        <div>
            <div className=''><img src='https://htmldemo.net/boyka/boyka/assets/images/logo/logo_footer.png'/></div> 
            <div><FaHome className='logo'/> &nbsp; 123 Main Street, Anytown, CA 12345 - USA.</div>
            <div><BsFillTelephoneFill className='logo'/> &nbsp; (0) 800 456 789</div>
            <div><LuMailOpen className='logo'/> &nbsp; contact@demoemail.com</div>
            <div className='logos'><div><BsTwitter/></div><div><FaRss/></div><div id='gp'><GrGooglePlus/></div><div><FaFacebookF/></div><div><TfiYoutube/></div></div>
        </div>

        <div className='footermain1'>
            <div className='footermain '>Products</div>
            <div> Prices drop</div>
            <div> New products</div>
            <div> Best sales</div>
            <div> Contact us</div>
        </div>
        <div className='footermain1'>
            <div className='footermain  '>Our company</div>
            <div>  Delivery</div>
            <div> About us</div>
            <div> Contact us</div>
            <div> Sitemap</div>
            <div> Stores</div>
        </div>
        <div>
            <div className='footermain'>Join Our Newsletter Now</div>
            <div className='df'> <input type='email' id='inputtt' placeholder='Your email address'/><button id='footerbutton'><FaRegPaperPlane/></button></div>
            <div> Get E-mail updates about our latest shop and special offers.</div>
            
        </div>


    </div>
    <div className='footerline'></div>
    <div className='footer2'><div>Copyright 2021 Boyka. All Rights Reserved</div><div><img src='https://htmldemo.net/boyka/boyka/assets/images/icon/1.png' /></div>

    </div>
</footer></>)



}