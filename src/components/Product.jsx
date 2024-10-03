import { useFetch } from "../hooks/useFetch";
import { useParams, Link } from "react-router-dom";

function Product() {
  const { id } = useParams();
  const url = `http://localhost:3000/products/${id}`;

  const { data: product } = useFetch(url);

  if (!product) return <p>Carregando...</p>;

  return (
    <div className="product">
      <div>
        <p>ID do produto: {id}</p>
        <p>Produto: {product.name}</p>
        <p>Preço: R${product.price}</p>
        {/* NESTED ROUTES */}
        <Link to={`/products/${product.id}/info`}>Mais informações</Link>
      </div>
    </div>
  );
}

export default Product;
