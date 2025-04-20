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
    <div className="bg-gradient-to-br from-black via-[#0f172a] to-black min-h-screen text-white px-4">
      <Banner />
      
      <div className="text-4xl text-yellow-400 font-extrabold italic text-center mt-8 mb-4 animate-pulse drop-shadow-lg">
         Hot Deals 
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center px-4 py-6">
        {paginatedData.map((proObj) => (
          <Card key={proObj.id} proImg={proObj.image} proTitle={proObj.title} proObj={proObj} />
        ))}
      </div>

      <Pagination page={page} pagePrev={pagePrev} pageNext={pageNext} />
    </div>
  )
}

export default ProductPage
