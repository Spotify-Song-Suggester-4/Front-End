import React from 'react';
import { useForm } from 'react-hook-form';

const GenreForm = (props) => {
  const { register } = useForm();

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="search genres"
          value={props.searchQuery}
          ref={register}
          onChange={props.handleChange}
        ></input>
      </form>
    </div>
  );
};

export default GenreForm;
