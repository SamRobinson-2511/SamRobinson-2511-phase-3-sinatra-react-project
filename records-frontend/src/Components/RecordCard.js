import React from "react";

function GuitarCard({record, handleAddToCollectionClick, isInCollection, handleDeleteFromCartClick}) {

    return (
        <div className={isInCollection ? "cart-card" : "card"}>
            <img id="record-img" src={record.image_url} alt={record.name} />
            <div className="details-container">
                <div id="guitar-details">{guitar.description}</div>
            </div>
            <p id="name-container">{guitar.name}</p>
            <p>${guitar.price}</p>
            { !isInCart  &&
                ( <button id="add-to-cart-btn" onClick={ () => handleAddToCartClick(guitar) }>Add To Cart</button> )
            }
            { isInCart && 
                ( <button id="delete-btn" onClick={ () => handleDeleteFromCartClick(guitar) }>Remove From Cart</button> )
            }
        </div>
    )
}

export default GuitarCard;