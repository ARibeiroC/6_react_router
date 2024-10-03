import { useFetch } from "../hooks/useFetch"
import { Link, useSearchParams } from "react-router-dom";

function Search() {
    
    const [searchParams] = useSearchParams()

    const url = "http://localhost:3000/products?" + searchParams

    const { data: items } = useFetch(url)
    
    console.log("http://localhost:3000/products?"+searchParams)

    return (
        <div>
            <h1>Resultados da Pesquisa</h1>
            <ul className="products">
                {items && items.map((item) => (
                    <li key={item.id}>
                        <p>{item.name}</p>
                        <p>R$ {item.price}</p>
                        <Link to={`/products/${item.id}`}>Detalhes</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Search;