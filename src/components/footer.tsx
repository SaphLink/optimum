import styled from 'styled-components';
import {BiLogoFacebook} from 'react-icons/bi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FaPhoneAlt} from 'react-icons/fa'
import {GrMail} from 'react-icons/gr'
import Link from "next/link";
import styles from "@/styles/navbar.module.css";

//#region styled component
const FooterContainer = styled.div`
  background-color: #35281e;
  color: white;
  padding: 6rem 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap:2rem;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  /* iPad Air width (~820px portrait) – ensure footer fits and doesn't cut off */
  @media (min-width: 810px) and (max-width: 840px) {
    padding: 5rem 2rem;
    gap: 2rem;
  }
`;

const FooterLeft = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  
  @media only screen and (max-width: 768px) {
    align-items: center;
    gap: 2rem;
  }
`;

const FooterRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 8rem;
  flex:1;
  font-family: 'Raleway', sans-serif;

  @media only screen and (max-width: 768px) {
    align-items: start;
    gap: 2rem;
  }

  /* iPad Pro 11" – keep sections on one row but with tighter spacing */
  @media (min-width: 830px) and (max-width: 860px) {
    gap: 6rem;
    flex-wrap: nowrap;
  }

  /* iPad Pro 12.9" – one row with comfortable spacing */
  @media (min-width: 1000px) and (max-width: 1035px) {
    gap: 7rem;
    flex-wrap: nowrap;
  }

  /* iPad Air – allow wrapping so nothing is cut off */
  @media (min-width: 810px) and (max-width: 840px) {
    gap: 4rem;
    flex-wrap: nowrap;
    justify-content: space-between;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 1rem;  // Adjust the value as per your needs

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  /* Prevent line-wrapping for business hours on iPad Air/Pro */
  &.business-hours ul li {
    white-space: nowrap;
  }
  @media (min-width: 810px) and (max-width: 840px) {
    &.business-hours ul li {
      white-space: nowrap;
      font-size: 0.92rem;
    }
    flex-basis: auto;
  }
  @media (min-width: 830px) and (max-width: 860px) {
    &.business-hours ul li {
      white-space: nowrap;
      font-size: 0.95rem;
    }
  }
  @media (min-width: 1000px) and (max-width: 1035px) {
    &.business-hours ul li {
      white-space: nowrap;
      font-size: 1rem;
    }
  }
`;

const Logo = styled.img`
  object-fit: contain;
  height: 100px; 
`;

const Description = styled.p`
  font-size: 20px;
  text-align: start;
  font-family: 'Raleway', sans-serif;

`;
//#endregion

export const FooterIcon = ({children}:any)=>{
  return <div
    className='cursor-pointer h-[50px] w-[50px] rounded-[50%] border-[3px] border-white flex items-center justify-center'
  >
    {children}
  </div>
}

const Footer = () => (
    <FooterContainer>
        <FooterLeft className='!items-start mb-[2rem] md:mb-[0]'>
            <Logo src="/images/homepage/Optimum Laser Brown White.png" alt="White Logo" />
            {/* <Description className='text-center md:text-left' >1180 Northern Blvd, Suite 201, Manhasset, NY 11030</Description> */}
            <p className='text-center md:text-left font-medium text-xl font-[Raleway]'>1180 Northern Blvd, Suite 202, Manhasset, NY 11030</p>
            <SocialIcons>
                <a href="https://www.facebook.com/OptimumLaserInc/" target="_blank">
                    <FooterIcon>
                        <BiLogoFacebook size={30} />
                    </FooterIcon>
                </a>
                <a href="https://www.instagram.com/optimum.laser/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==" target="_blank">
                    <FooterIcon>
                        <AiOutlineInstagram size={30} />
                    </FooterIcon>
                </a>
                <a href="tel:516-495-4908">
                    <FooterIcon>
                        <FaPhoneAlt size={20} />
                    </FooterIcon>
                </a>
                <a href="mailto:optimumlaserhairremoval@gmail.com">
                    <FooterIcon>
                        <GrMail size={25} />
                    </FooterIcon>
                </a>
            </SocialIcons>


        </FooterLeft>

        <FooterRight>
            <Section>
                <h3 style={{ textDecoration: 'underline', fontWeight: 'bold', marginBottom: '1rem' }}>LINKS</h3>
                <ul>
                    <li>
                        <a href={"/"}>
                            Home
                        </a>
                    </li>
                    <li> <a href={"/services/laser-service"}>
                        Laser Hair Removal
                    </a>
                    </li>
                    <li> <a href={"/services/pigmentation-service"}>
                        Pigmentation Removal
                    </a>
                    </li>
                    <li> <a href={"/services/vein-removal"}>
                        Vein Removal
                    </a>
                    </li>
                    <li> <a href={"/services/facial-service"}>
                        Facial Services
                    </a>
                    </li>
                    <li> <a href={"/about-us"}>
                        About Us
                    </a>
                    </li>
                    <li> <a href={"/contact-us"}>
                        Contact Us
                    </a>
                    </li>
                </ul>
            </Section>

            <Section className="business-hours">
                <h3 style={{ textDecoration: 'underline', fontWeight: 'bold', marginBottom: '1rem' }}>BUSINESS HOURS</h3>
                <ul>
                    <li>Monday: Closed</li>
                    <li>Tuesday: 9:00 am - 6:00 pm</li>
                    <li>Wednesday: 9:00 am - 6:00 pm</li>
                    <li>Thursday: 9:00 am - 8:00 pm</li>
                    <li>Friday: 9:00 am - 3:00 pm</li>
                    <li>Saturday: Closed</li>
                    <li>Sunday: 10:00 am - 5:00 pm</li>
                </ul>
            </Section>
        </FooterRight>
    </FooterContainer>
);

export default Footer;
