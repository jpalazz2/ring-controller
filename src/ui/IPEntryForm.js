import { useState } from 'react';

function IPEntryForm() {
  const [value, setValue] = useState('');

  const changeHandler = (event) => {
    setValue(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(value);
  }

  return (
    <form
      className={'flex flex--content-center'}
      onSubmit={submitHandler}>
      <label>
        Enter an IP address:
        <input type="text" name="ip_address" onChange={changeHandler} />
      </label>
      <input type="submit" value="submit" />
    </form>
  );
}

export default IPEntryForm;