import React, { useEffect, useState } from 'react'
import Card from './Product.jsx'
import Banner from './Banner.jsx'
import Pagination from './Pagination.jsx'

function ProductPage() {
  let [allData, setAllData] = useState([])    
  let [page, setPage] = useState(1)
  const productsPerPage = 16


  async function getProductPage() {
    let response = await fetch(`https://fakestoreapi.com/products`)
    let newData = await response.json()
    setAllData(newData)
  }

  useEffect(() => {
    getProductPage()
  }, [])


  const startIndex = (page - 1) * productsPerPage
  const endIndex = startIndex + productsPerPage
  const paginatedData = allData.slice(startIndex, endIndex)
  const totalPages = Math.ceil(allData.length / productsPerPage)

  const pageNext = () => {
    if (page < totalPages) {
      setPage(page + 1)
    }
  }

  const pagePrev = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  return (
    <div>
      <Banner />
      <div style={{ fontSize: "2.5rem", fontStyle: "italic", fontFamily: "cursive", fontWeight: "bold", color: "yellow", textAlign: "center" }}>
        Hot Deals
      </div>

      <div className='flex flex-wrap justify-between'>
        {paginatedData.map((proObj) => (
          <Card key={proObj.id} proImg={proObj.image} proTitle={proObj.title} proObj={proObj} />
        ))}
      </div>

      <Pagination page={page} pagePrev={pagePrev} pageNext={pageNext} />
    </div>
  )
}

export default ProductPage
