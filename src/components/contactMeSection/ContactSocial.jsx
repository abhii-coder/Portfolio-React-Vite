import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/abhishek-singh-chouhan-267ba7289/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/abhii-coder" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/abhii_singh0710/" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
