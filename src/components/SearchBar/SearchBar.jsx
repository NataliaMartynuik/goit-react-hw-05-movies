import { useState } from 'react';
import { toast } from 'react-toastify';
import { Form, FormInput, Button } from './SearchBar.styled';
import PropTypes from 'prop-types';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
   
  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      toast.error('Please, enter search movies.');
      return;
    }
     onSubmit(query);
    setQuery('');
  };

  const handleChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  return (
      <>
        <Form  onSubmit={handleSubmit}>
          <FormInput
            type="text"
            value={query}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
         <Button type="submit" >
           Search
          </Button>
          </Form>
    </>
    );
}
  
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};