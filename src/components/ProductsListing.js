import { useState, useEffect } from "react"

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {
            setProducts(json);
            console.log(json);
        })
      }, [])

      const displayProducts = products.map( item => {
        return(
            <article key={item.id} className="border-2">
                <img src={item.image} alt={item.title} className="object-cover h-48 max-w-xs pt-2 mx-auto" />
                <h2 className="text-lg font-medium">{item.title}</h2>
                <span className="text-base text-teal-800">{item.price}</span>
            </article>
        )
      })

      
    return(
        <section className="container mx-auto">
            <h2>Products</h2>
            <div className="grid grid-cols-4 gap-4">
                {displayProducts}
            </div>
        </section>
    )
}

export default Products