import styled from "styled-components";
import {BackgroundWrapper, ContentWrapper} from "../../App.styled";
import {HiOutlineMail} from "react-icons/hi";
import {FiPhone} from "react-icons/fi";
import {colors} from "../../constants/Styles";
import {Button} from "../../components/Button/Button.styled";
import {Input} from "../../components/Input/Input.styled";

export const ContactUsBackgroundWrapper = styled(BackgroundWrapper)`
  height: 95vh;
  @media screen and (max-width: 420px) {

  }
`;

export const ContactUsContentWrapper = styled(ContentWrapper)`
  width: 90%;
  @media screen and (max-width: 420px) {

  }
`;

export const ContactUsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h4 {
    margin: 15px 0 30px 0;
  }
`;

export const ContactUsInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 9vh;
  padding-left: 18vh;

`;

export const PhoneButton = styled.button`
  border: 1px solid #FFF;
  background: #FFF;
  display: flex;
  align-items: center;
  padding: 10px 45px 10px 20px;
  margin-bottom: 10px;

  &:focus {
    border: 1px solid ${colors.COLOR_PRIMARY_100};
    border-radius: 5px;
  }

`;

export const PhoneIcon = styled(FiPhone)`
  color: ${colors.COLOR_PRIMARY_100};
  margin-right: 30px;
`;

export const EmailButton = styled.button`
  border: 1px solid #FFF;
  background: #FFF;
  display: flex;
  align-items: center;
  padding: 10px 20px;

  &:focus {
    border: 1px solid ${colors.COLOR_PRIMARY_100};
    border-radius: 5px;
  }

`;

export const EmailIcon = styled(HiOutlineMail)`
  color: ${colors.COLOR_PRIMARY_100};
  margin-right: 30px;
`;

export const ContactUsFormWrapper = styled.div`
  background-color: ${colors.COLOR_BEIGE_LIGHT};
  width: 40%;
  height: 70vh;
  border-radius: 30px;
  margin-top: 7.5vh;
  margin-right: 18vh;
  
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 7% 0 0 6%;
    
    h3 {
      margin: 15px 0 5px 10px !important;
      color: ${colors.TEXT_SECONDARY} !important;
    }
  }
`;

export const ContactUsInput = styled(Input)`
  width: 580px;
  
`;

export const TextArea = styled.textarea`
  width: 90%;
  background-color: #FFF;
  border-radius: 7px;
  border: 1px solid ${colors.COLOR_BORDER_LIGHT};
  outline: none;
  font-size: 14px;
  font-weight: 400;
  color: ${colors.TEXT_PRIMARY};
  padding: 5px 10px;


  &:focus {
    border: 1px solid ${colors.TEXT_PRIMARY};
    background-color: #FFF;
  }

`;

export const SendMessageButton = styled(Button)`
  margin-left: 65%;
  margin-top: 3%;
  padding: 12px 40px 20px 40px;
  font-weight: 700;
  font-size: 14px;
`;


