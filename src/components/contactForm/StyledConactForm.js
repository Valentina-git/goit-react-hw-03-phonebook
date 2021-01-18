import styled from 'styled-components';

const WrapperContactForm = styled.div`
  padding: 20px 0;
  width: 100%;
  background-color: #efefef;
  .form-label {
    font-weight: 700;
    display: block;
    margin-bottom: 10px;
  }
  .form-input {
    display: block;
    width: 100%;
  }
  .form-btn {
    padding: 5px 10px;
    border: 1px solid navy;
    border-radius: 5px;
    background-color: lightblue;
    box-shadow: 1px 1px 7px 0px rgba(140, 140, 140, 0.75);
  }
  .form-btn:hover,
  .form-btn:focus {
    background-color: yellow;
  }
`;
export default WrapperContactForm;
