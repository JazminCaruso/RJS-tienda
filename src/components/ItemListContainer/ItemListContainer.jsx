import './ItemListContainer.scss'

export const ItemListContainer = ( {greeting} ) => {

    return (
        <div className="container my-5" style={{ backgroundColor: "#37cccc", padding: "10px", borderRadius: "5px", textAlign: "center" }}>
            <h2 style={{ color: "#22232b" }}>{greeting}</h2>
            <p style={{ color: "#22232b" }}>Esperamos que disfrutes de nuestros cursos.</p>
        </div>
    )
}