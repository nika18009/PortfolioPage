import { useState } from "react";
import {
  StyledInputArea,
  StyledContactForm,
  StyledContactInfoArea,
  StyledContactInfo,
  StyledContactInfoTitle,
  StyledMailIcon,
  StyledPhoneIcon,
  StyledLocationIcon,
  StyledContactInput,
  StyledContactTextArea,
  StyledErrorMessage,
  StyledSubmitButton,
} from "./style";
import {
  StyledFooterFbIcon,
  StyledFooterInIcon,
  StyledFooterTwIcon,
} from "../../components/Footer/Style";

const ContactForm = () => {
  const [ContactsInput, setContactsInput] = useState([]);
  const [namevalue, setNameValue] = useState("");
  const [emailvalue, setEmailValue] = useState("");
  const [textvalue, setTextValue] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleContactChange = (event) => {
    const { name, value } = event.target;

    if (name === "name") {
      setNameValue(value);
    } else if (name === "email") {
      setEmailValue(value);
    } else if (name === "text") {
      setTextValue(value);
    }
  };

  const handleNewContact = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailvalue)) {
      setEmailError(true);
      setSubmitted(false);
      return;
    }

    const contact = {
      id: Math.random() * 10000,
      name: namevalue,
      email: emailvalue,
      message: textvalue,
    };

    let contacts = ContactsInput.concat(contact);
    setContactsInput(contacts);
    setNameValue("");
    setEmailValue("");
    setTextValue("");
    setSubmitted(true);
    setEmailError(false);
  };

  return (
    <StyledContactForm>
      <StyledContactInfoArea>
        <StyledContactInfoTitle>Get in touch</StyledContactInfoTitle>
        <StyledContactInfo>
          <StyledMailIcon /> veronika@gmail.com
        </StyledContactInfo>
        <StyledContactInfo>
          <StyledPhoneIcon /> +370600*****
        </StyledContactInfo>
        <StyledContactInfo>
          <StyledLocationIcon /> Lorem ipsum dolor, Vilnius
        </StyledContactInfo>
        <StyledContactInfo>
          <a href="https://www.facebook.com/veronika.tarasova.54">
            <StyledFooterFbIcon />
          </a>
          <StyledFooterTwIcon />
          <StyledFooterInIcon />
        </StyledContactInfo>
      </StyledContactInfoArea>
      <StyledInputArea>
        <h2>Send a message</h2>
        <StyledContactInput
          type="text"
          name="name"
          onChange={handleContactChange}
          value={namevalue}
          placeholder="Enter your name"
        />
        <StyledContactInput
          type="email"
          name="email"
          onChange={handleContactChange}
          value={emailvalue}
          placeholder="Enter your email"
        />

        <StyledContactTextArea
          type="textarea"
          name="text"
          onChange={handleContactChange}
          value={textvalue}
          rows={4}
          placeholder="Message"
        />
        <StyledSubmitButton onClick={handleNewContact}>Send</StyledSubmitButton>
        <div>
          {emailError && (
            <StyledErrorMessage>
              Please enter a valid email address
            </StyledErrorMessage>
          )}
          {submitted && (
            <StyledErrorMessage>Thank you for contacting!</StyledErrorMessage>
          )}
        </div>
      </StyledInputArea>
    </StyledContactForm>
  );
};

export default ContactForm;
