import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import user from "../images/user.png";
const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="flex justify-between border-b-4 ">
      <div className="flex gap-2 m-4">
        <img className="w-10 h-10" src={user} alt="user" />
        <div>
          <div>{name}</div>
          <div>{email}</div>
        </div>
      </div>

      <FontAwesomeIcon icon={faTrashAlt} className="pt-12 text-2xl" />
    </div>
  );
};

export default ContactCard;
