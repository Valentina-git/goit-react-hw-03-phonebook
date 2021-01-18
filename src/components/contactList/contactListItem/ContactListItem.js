import React from 'react';
import PropTypes from 'prop-types';
import ContactLi from './styledContactItem';

const ContactListItem = ({ item, onBtnClick }) => {
  return (
    <ContactLi className="contactListItem" key={item.id}>
      <span className="contactListName">{item.name}:</span>
      <span className="contactListNumber">{item.contact}</span>
      <button
        className="contactListBtn"
        type="button"
        onClick={onBtnClick}
        data-id={item.id}
      >
        Delete contact
      </button>
    </ContactLi>
  );
};

ContactListItem.propTypes = {
  item: PropTypes.object.isRequired,
  onBtnClick: PropTypes.func.isRequired,
};

export default ContactListItem;
