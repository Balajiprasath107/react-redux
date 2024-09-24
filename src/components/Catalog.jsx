import React from 'react'
import Card from './Card'
import { useSelector } from 'react-redux'
function Catalog() {
  const { products } = useSelector((state) => state.products)
  return (
    <section className="py-2 position z-2 positon-absolute">
      <div className="container px-4 px-lg-5 mt-5 z-2 positon-absolute">
        <div className="row gx-4 gx-lg-5  row-cols-xs-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 justify-content-center">
          {
            products.map((item) =>
              <Card key={item.title} item={item} />
            )}
        </div>
      </div>
    </section>
  )
}

export default Catalog