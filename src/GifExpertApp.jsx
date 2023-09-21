import { useState } from "react";
// import { AddCategory } from "./components/AddCategory";
// import { GifGrid } from "./components/GifGrid";
import { AddCategory, GifGrid } from "./components/indexBarrel";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  //   console.log(categories);

  const onAddCategory = ( newCategory ) => {
    
    // categories.push(newCategory); //Evitar usar lo mas posible
    // console.log("Valorant");
    // console.log(newCategory);

    if ( categories.includes(newCategory) ) {
      return;
    }

    // Metodo de agregacion 1
    // setCategories([ ...categories, 'Nueva Categoria']);
    // setCategories([ 'Valorant', ...categories]);
    setCategories([ newCategory, ...categories]);
    // Metodo de agregacion 2
    // setCategories(Categ => [...Categ, "Nueva Categoria"]);
  }

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      
      <AddCategory 
      onNewCategory={ (valor) => onAddCategory(valor) }
      // setCategories={ setCategories }
      // currentCategories={ categories }
      />
      {/* <input/> */}

      {/* Listado de Gifs */}

      {/* <button onClick={onAddCategory}> Agregar </button> */}
      
      {
        categories.map((category) =>  (
            <GifGrid 
            key={ category }
            category={ category }
            />
          ))
      }
        {/* <li>ABC</li> */}
      
      {/* Gif items */}
    </>
  );
};
