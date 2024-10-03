
import React from 'react'
import { useFetch } from '../hooks/useFetch'

// 7 - DINAMIC ROUTES
import { Link } from 'react-router-dom'

const url = 'http://localhost:3000/products'




function Home() {

  const {data: items} = useFetch(url)

  return (
    <div className="home-container">
      <h2>Home</h2>
      <ul className="products">
        {items && items.map((item) => (
          <li key={item.id}>
            <h4>{item.name}</h4>
            <p>R$ {item.price}</p>
            {/* 7 - DINAMIC ROUTES */}
            <Link to={`/products/${item.id}`}>Detalhes</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home