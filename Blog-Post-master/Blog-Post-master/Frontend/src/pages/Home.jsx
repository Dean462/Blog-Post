import React from 'react'
import Cards from '../components/cards/Cards'

const Home = () => {
  return (
    <div>
      <div className="album py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <Cards/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
