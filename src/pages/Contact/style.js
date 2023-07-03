import { styled } from "styled-components";
import { FiMail, FiPhone } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";

export const StyledContactInfoArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 300px;
`;

export const StyledContactInfoTitle = styled.h2`
  margin-bottom: 1.5em;
`;
export const StyledContactInfo = styled.p`
  margin-top: 10px;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.15;
  margin: 0.8 0;
  display: flex;
  align-items: center;
`;

export const StyledInputArea = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  height: 19rem;
  justify-content: space-between;
`;

export const StyledContactForm = styled.div`
  max-width: 640px;
  margin: 0 auto;
  display: flex;
  margin-top: 5rem;
  text-align: center;
  background-color: #f5f5f547;
  border-radius: 5px;
  box-shadow: 0 0 5px gray;
`;

export const StyledMailIcon = styled(FiMail)`
  padding-right: 5px;
`;
export const StyledPhoneIcon = styled(FiPhone)`
  padding-right: 5px;
`;

export const StyledLocationIcon = styled(FiMapPin)`
  padding-right: 5px;
`;

export const StyledContactInput = styled.input`
  border-top: #f5f5f547 1px solid;
  border-left: #f5f5f547 1px solid;
  border-right: #f5f5f547 1px solid;
`;

export const StyledContactTextArea = styled.textarea`
  border-top: #f5f5f547 1px solid;
  border-left: #f5f5f547 1px solid;
  border-right: #f5f5f547 1px solid;
  width: 180px;
  text-align: center;
`;

export const StyledSubmitButton = styled.button`
  background-color: #f5f5f547;
  border-radius: 5px;
  border: 1px solid #f2f0f5;
  width: 60px;
  &:hover {
    border: 1px solid #9d87e6;
  }
`;

export const StyledErrorMessage = styled.p`
  font-size: 15px;
`;
