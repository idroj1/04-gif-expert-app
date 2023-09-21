import { useState } from "react";

// export const AddCategory = () => {
export const AddCategory = ({ onNewCategory }) => {
  
  const [inputValue, setInputValue] = useState("");

  //   const onInputChange = (event) => {
  //     console.log(event.target.value);
  //     setInputValue(event.target.value);
  //   }

  const onInputChange = ({ target }) => {
    // console.log(target.value);
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    // console.log(event);
    event.preventDefault();
    if( inputValue.trim().length <= 1) return;
    // console.log(inputValue);
    // setCategories( categories => [inputValue, ...categories]);
    setInputValue('');
    onNewCategory( inputValue.trim() );
  }

  return (
    // <form onSubmit={ (event) => onSubmit(event) }>
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={ inputValue }
        //   onChange={(event) => onInputChange(event)}
        onChange={ onInputChange }
      />
    </form>
  );
};
