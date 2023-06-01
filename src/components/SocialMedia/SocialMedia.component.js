import {SocialContainer, SocialIcons} from "./SocialMedia.styles";
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import {CgMail } from "react-icons/cg";
import {AiOutlineInstagram} from "react-icons/ai"


export default function SocialMedia({inFooter}) {
  return (
    <div>
    <SocialContainer inFooter={inFooter}>
      <SocialIcons
        href="https://github.com/Amankohare0514"
        title="Visit my github profile"
        target="_blank"
        rel="noopener noreferrer">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons
        href="https://www.linkedin.com/in/aman-kohare-3a0678235/"
        title="Contact me on LinkedIn"
        target="_blank"
        rel="noopener noreferrer">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons
        href="https://mail.google.com/mail/u/0/#inbox?compose=new"
        title="Send directly an email"
        target="_blank"
        rel="noopener noreferrer">
        <CgMail size="3rem"/>
      </SocialIcons>

      <SocialIcons
        href="https://www.instagram.com/aman__0514/"
        title="Send directly an email"
        target="_blank"
        rel="noopener noreferrer">
        <AiOutlineInstagram size="3rem"/>
      </SocialIcons>
    </SocialContainer>
    </div>
  )}