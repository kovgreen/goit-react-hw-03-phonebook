import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormBlock, Label, Input, Button } from './ContactForm.styled';

const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    onAddContact({ name, number });
    resetForm();
  };

  return (
    <FormBlock onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          autoComplete="off"
        />
      </Label>
      <Label>
        Number
        <Input
          type="text"
          name="number"
          value={number}
          onChange={e => setNumber(e.target.value)}
          autoComplete="off"
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </FormBlock>
  );
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
