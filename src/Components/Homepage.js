import "./Homepage.css"
import { FaCopyright, FaHome } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { GiFirstAidKit } from "react-icons/gi";
import { GiClover } from "react-icons/gi";
import { MdHealthAndSafety } from "react-icons/md";
import { GiShinyApple } from "react-icons/gi";
import { FaTshirt } from "react-icons/fa";
import { BiHappyAlt } from "react-icons/bi";
import { FaBed } from "react-icons/fa";
import { MdEmojiPeople } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineMail } from "react-icons/md";

export default function Homepage() {
    return(
    <div id="whole">
      <div id='home-page-image'>
        <img src='/pictures/background.jpg' alt='image' id='backgroundimage'/>
        <div id='text-on-image'>
          <h2 id='firstline'>You Are Special</h2>
          <h1 id='secondline'>EVERY ELDER DESERVES</h1>
          <h1 id='thirdline'>LOVE CARE AND RESPECT</h1>
          <div id='info'>Every elder merits affection for their invaluable </div>
          <div id='info'>wisdom, vast life experiences, and enduring </div>
          <div id='info'>contributions to society's rich tapestry.</div>
        </div>
      </div>
      <div id='facilities'>
        <div id='rescue'>
          <div id='icon'><GiFirstAidKit size={50} /></div>
          <div id='heading'>Rescue And Admission</div>
          <div id='liner'>Providing crucial rescue services for elderly</div>
          <div id='liner'>residents in retirement communities</div>
        </div>
        <div id='treatment'>
          <div id='icon'><GiClover size={50} /></div>
          <div id='heading'>Treatment And Care</div>
          <div id='liner'>Delivering compassionate care and treatment </div>
          <div id='liner'>to seniors in retirement homes.</div>
        </div>
        <div id='sos'>
          <div id='icon'><MdHealthAndSafety size={50}/></div>
          <div id='heading'>Health Checkup And SOS</div>
          <div id='liner'>Offering comprehensive health checkups for elderly</div>
          <div id='liner'>residents in retirement communities.</div>
        </div>
      </div>
      <div id='information'>
        <img src='/pictures/infopic.jpg' alt='Info Pic' id='infopic' height={400}/>
        <div id='infotext'>
          <div id='heading2'>Expert Care of the Elderly</div>
          <div id='body2'>Providing expert care tailored to the unique needs of the elderly with compassion and dedication.</div>
          <div id='info2'>At our facility, we specialize in providing expert care for the elderly, recognizing the unique needs of this cherished demographic. Our dedicated team comprises trained professionals who offer holistic support, encompassing physical, emotional, and social dimensions. From tailored health management plans to stimulating recreational activities, we prioritize the well-being and comfort of our residents. With a focus on dignity and respect, we strive to create a nurturing environment where seniors thrive. Through compassionate companionship and attentive assistance, we aim to enhance the quality of life for each individual under our care, ensuring they enjoy their golden years to the fullest.</div>
        </div>
      </div>
      <div id='services'>
        <div id='heading3'>Our Services</div>
        <div id='upper'>
          <div id='services-box'>
            <GiShinyApple size={100} id='services-icon'/>
            <div id='services-head'>Nutrition food</div>
            <div id='services-text'>Supplying nutritious meals to elderly residents in our esteemed retirement community.</div>
          </div>
          <div id='services-box'>
            <FaTshirt size={100} id='services-icon'/>
            <div id='services-head'>Clean Clothes</div>
            <div id='services-text'>Ensuring clean clothes for elderly residents in our nurturing retirement community.</div>
          </div>
          <div id='services-box'>
            <BiHappyAlt size={100} id='services-icon'/>
            <div id='services-head'>Healthy Environment</div>
            <div id='services-text'>Creating a healthy environment for elderly residents in our retirement community.</div>
          </div>
        </div>
        <div id='lower'>
        <div id='services-box'>
            <GiFirstAidKit size={100} id='services-icon'/>
            <div id='services-head'>Qualified Doctors</div>
            <div id='services-text'>Offering access to qualified doctors for elderly residents in our community.</div>
          </div>
          <div id='services-box'>
            <FaBed size={100} id='services-icon'/>
            <div id='services-head'>Cremation Facilities</div>
            <div id='services-text'>Offering cremation facilities for elderly residents in our compassionate retirement community.</div>
          </div>
          <div id='services-box'>
            <MdEmojiPeople size={100} id='services-icon'/>
            <div id='services-head'>Physiotherapy Center</div>
            <div id='services-text'>Delivering physiotherapy services for elderly residents in our supportive community.</div>
          </div>
        </div>
      </div>
      <div id='team'>
        <div id='teamheading'>Our Team</div>
        <hr id='teamheadingunderline'></hr>
        <div id='teambody'>
          <div id='member'>
            <img src='/pictures/aditya.jpg' alt='image' id='memberimage'/>
            <div id='membertext'>
              <div id='membername'>Aditya Raaz</div>
              <div id='memberrole'>Front-End Developer</div>
            </div>
          </div>
          <div id='member'>
            <img src='/pictures/debasish.jpg' alt='image' id='memberimage'/>
            <div id='membertext'>
              <div id='membername'>Debasish Munda</div>
              <div id='memberrole'>Full Stack Developer</div>
            </div>
          </div>
          <div id='member'>
            <img src='/pictures/tushar.jpg' alt='image' id='memberimage'/>
            <div id='membertext'>
              <div id='membername'>Tushar Sahu</div>
              <div id='memberrole'>Full Stack Developer</div>
            </div>
          </div>
          <div id='member'>
            <img src='/pictures/abdul.jpg' alt='image' id='memberimage'/>
            <div id='membertext'>
              <div id='membername'>Abdul Munaim</div>
              <div id='memberrole'>ML/AI Developer</div>
            </div>
          </div>
        </div>
      </div>
      <div id='footer'>
        <div id='footerbox'>
          <div id='footerboxhead1'>About Us</div>
          <div id='footerboxbody1'>Our Old age home support offers comprehensive care, encompassing medical assistance, companionship, nutritious meals, and various activities tailored to enhance seniors' well-being and dignity.</div>
          <div id='footerboxfoot1'>
            <CgWebsite size={30}/>
            <FaFacebook size={30}/>
            <FaXTwitter size={30}/>
            <FaYoutube size={30}/>
            <FaInstagram size={30}/>
          </div>
        </div>
        <div id='footerbox'>
          <div id='footerboxhead2'>Opening Hours</div>
          <div id='footerboxbody2'>
            <div>Monday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9:00-18:00</div>
            <div>Tuesday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9:00-18:00</div>
            <div>Wednesday&nbsp;&nbsp;9:00-18:00</div>
            <div>Thursday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9:00-18:00</div>
            <div>Friday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9:00-18:00</div>
            <div>Saturday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9:00-18:00</div>
          </div>
          <div id='footerboxfoot2'>Sunday &nbsp;&nbsp;&nbsp;&nbsp; CLOSED</div>
        </div>
        <div id='footerbox'>
          <div id='footerboxhead3'>Get In Touch</div>
          <div id='footerboxbody3'>
            <div id='footeraddress'>
              <FaHome size={30}/>
              <div id='addresstext'> F-419,SD Hall of Residence, NIT Rourkela</div>
            </div>
            <div id='footerphone'>
              <FaPhoneAlt size={20}/>
              <div id='phonetext'> +91 9777938549</div>
            </div>
            <div id='footerwebsite'>
              <CgWebsite size={20}/>
              <div id='websitetext'>Website Link</div>
            </div>
            <div id='footeremail'>
              <MdOutlineMail size={30}/>
              <div id='emailtext'> raazaditya333@gmail.com</div>
            </div>
          </div>
          <div id='footerboxfoot3'></div>
        </div>
      </div>
      <div id='copyright'>
        <span id='copyrightbody'>Copyright</span>
        <FaCopyright/>
        <span id='copyrightbody'>2024 Prototype Website. All rights reserved</span>
      </div>
    </div>
    );
}