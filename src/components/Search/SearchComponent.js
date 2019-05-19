import React, { Component } from 'react';
import PropTypes from 'prop-types';

const SearchComponent = props => {
	const { search } = props;
	return (
		<input
			className={'search-input'}
			placeholder="Search for..."
			onChange={e => search(e)}
			type="text"
		/>
	);
};

export default SearchComponent;
