import React, { useState } from 'react'
import "../styles/cards.css"
export const Card = ({ imagen, titulo, descripcion, precio ,handleAgregar,handleAumentar,handleDisminuir,handleEliminar}) => {

    const [added, setAdded] = useState(false);

    const onAgregar = () => {
        handleAgregar();
        setAdded(true);
    }

    const onQuitar = () => {
        handleEliminar();
        setAdded(false);
    }

    return (
        <div className='tarjeta'>
            <img src={imagen}
                alt={titulo}
                className='tarjeta-imagen'
            />
            <div className="tarjeta-contenido">
                <h3 className='tarjeta-titulo'>{titulo}</h3>
                <p className='tarjeta-descripcion'>{descripcion}</p>
                <p className='tarjeta-precio'>{precio}</p>
                {
                    added
                        ? <button
                            type='button'
                            className='boton-quitar'
                            onClick={onQuitar}
                        >Quitar del carrito</button>
                        : <button
                            type='button'
                            className='boton-agregar'
                            onClick={onAgregar}
                        >Agregar del carrito</button>
                }
            </div>


        </div>
    )
}
