import React, { useEffect, useState } from 'react'


function Cart({ cart, handleDeleteFromCart }) {
  const [search, setSearch] = useState("")
  const [currCategory, setCurrCategory] = useState("All Categories")

  function handleSearch(e) {
    setSearch(e.target.value)
  }


  let allCategories = ["All Categories", ...new Set(cart.map(item => item.category))]


  function makeCategoryButtons() {
    return allCategories.map((cat) => (
      <div
        key={cat}
        onClick={() => setCurrCategory(cat)}
        style={{
          marginRight: "1rem",
          padding: "0.5rem 1rem",
          border: "1px solid orange",
          borderRadius: "0.5rem",
          cursor: "pointer",
          backgroundColor: currCategory === cat ? "orange" : "#152E3F",
          color: currCategory === cat ? "#000" : "#fff",
        }}
      >
        {cat}
      </div>
    ))
  }

  return (
    <div>
     
      <div className='flex justify-center items-center'>
        <img
          height="120px"
          width="120px"
          src="https://cdn.dribbble.com/userupload/24769165/file/original-6dc1b792c48efe88f4ef66b99b26fa16.gif"
          alt="searchicon"
        />
        <input
          onChange={handleSearch}
          placeholder='Search Cart'
          className='h-[2rem] w-[18rem] bg-grey-100 px-4 outline-offset-2'
        />
      </div>


      <div style={{ display: "flex", justifyContent: "center", margin: "1rem 0", flexWrap: "wrap" }}>
        {makeCategoryButtons()}
      </div>

 
      <table style={{ width: "100%", border: "1px solid grey", borderCollapse: "collapse", borderSpacing: "0px" }}>
        <thead>
          <tr style={{ border: "1px solid orange", color: "orange" }}>
            <th>Title</th>
            <th>Rating</th>
            <th>Category</th>
            <th>Price</th>
            <th>Delete Item</th>
          </tr>
        </thead>
        <tbody>
          {cart
            .filter((proObj) => proObj.title.toLowerCase().includes(search.toLowerCase()))
            .filter((proObj) => currCategory === "All Categories" || proObj.category === currCategory)
            .map((proObj) => (
              <tr style={{ border: "1px solid grey" }} key={proObj.id} className='text-center'>
                <td>
                  <div
                    className="w-[70] h-[105px] bg-contain"
                    style={{
                      backgroundImage: `url(${proObj.image})`,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      borderRadius: "10px",
                    }}
                  ></div>
                  <div style={{ color: "yellow", fontWeight: "bold", fontSize: "10px" }}>{proObj.title}</div>
                </td>
                <td>{proObj.rating.rate}</td>
                <td>{proObj.category}</td>
                <td>${proObj.price}</td>
                <td
                  onClick={() => { handleDeleteFromCart(proObj.id) }}
                  style={{ cursor: "pointer", color: "red" }}
                >
                  Remove
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Cart
