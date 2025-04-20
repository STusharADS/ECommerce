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
    <div className="bg-gradient-to-br from-black via-[#0f172a] to-black min-h-screen text-white px-2 sm:px-4">
      <Banner />

      <div className="text-3xl sm:text-4xl text-yellow-400 font-extrabold italic text-center mt-8 mb-4 animate-pulse drop-shadow-lg">
        Hot Deals
      </div>

      <div className="grid gap-4 sm:gap-6 justify-center grid-cols-[repeat(auto-fit,_minmax(140px,_1fr))] max-w-7xl mx-auto px-1 sm:px-2">
        {paginatedData.map((proObj) => (
          <Card
            key={proObj.id}
            proImg={proObj.image}
            proTitle={proObj.title}
            proObj={proObj}
          />
        ))}
      </div>

      <Pagination page={page} pagePrev={pagePrev} pageNext={pageNext} />
    </div>
  )
}

export default ProductPage
