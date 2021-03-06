import styled from 'styled-components';

const ContactListWrapper = styled.div`
  padding: 10px 0;
  .list {
    list-style: none;
  }
  .list:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export default ContactListWrapper;
