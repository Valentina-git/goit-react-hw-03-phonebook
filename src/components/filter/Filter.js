import React from 'react';
import PropTypes from 'prop-types';
import FilterWrapper from './StyledFilter';

const Filter = ({ onChange, filter }) => {
  return (
    <FilterWrapper>
      <label className="filter-label">
        Search by Name
        <input
          className="filter-input"
          type="text"
          name="filter"
          value={filter}
          onChange={onChange}
        />
      </label>
    </FilterWrapper>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string,
};

export default Filter;
