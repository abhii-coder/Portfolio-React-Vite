import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="abhisingh071098@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+91 8827055041" Image={FiPhone} />
      <SingleInfo text="Bhopal(MP), India" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
