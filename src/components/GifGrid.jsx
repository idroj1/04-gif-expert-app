
import { useEffect, useState } from "react";
import { GifItem } from './GifItem';
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {

    // const [counter, setCounter] = useState(10);
    // const [images, setImages] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);

    // const getImages = async() => {
    //     const newImages = await getGifs(category);
    //     setImages(newImages);
    //     setIsLoading(false);
    // }

    // useEffect( () => {
    //     getGifs(category)
    //     .then(newImages => setImages(newImages));
    //     getImages();
    // }, [])

    const { images, isLoading } = useFetchGifs( category );

    // console.log({ images, isLoading });
    
    return (
        <div>
            <h3>{ category }</h3>

            {
                isLoading && ( <h2>Cargando...</h2> )
            }

            {/* <h5>{ counter }</h5>
            <button onClick={ () => setCounter( counter + 1) } >+ 1</button> */}

            <div className="card-grid">
                {
                    // images.map(img => (
                    //     <li key={ img.id }>
                    //         {img.title}
                    //     </li>
                    // ))

                    images.map(( image ) => (
                        // <li key={ id }>{ title }</li>
                        <GifItem 
                        key={ image.id }
                        { ...image }
                        />
                    ))
                }
            </div>
        </div>
    )
}
