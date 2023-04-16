import './ItemListContainer.scss'


export const ItemListContainer = ( {saludo} ) => {

    return (
        <div className="container my-5">
            <h2>Item List Container</h2>
            <hr/>
            <p>{saludo}</p>
        </div>
    )
}