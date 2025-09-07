
import CoffeeCard from './components/CoffeeCard'
import './App.css'
import { Link, useLoaderData } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Category from './components/Category'
import Footer from './components/Footer'
import Social from './components/Social'
import { BiCoffee } from 'react-icons/bi'
import { useState } from 'react'

function App() {

  const coffee = useLoaderData();
  const [coffees, setCoffees] = useState(coffee);

  return (
    <>
      <Header />
      <Hero />
      <Category />
      <h1 className='pt-10 text-gray-700 text-center'>--- Sip & Savor ---</h1>
      <h1 className='pt-5 text-gray-700 text-center font-rancho text-4xl'>Our Popular Products</h1>
      <Link to='/addCoffee'>
        <button className=" mt-5 mx-auto flex items-center gap-2 bg-[#E3B577] text-white font-semibold py-2 px-6 transition duration-300
  hover:bg-transparent hover:text-[#E3B577] border border-transparent hover:border hover:border-[#E3B577]">
          Add Coffee <BiCoffee />
        </button>
      </Link>
      {/* <h1>{coffees.length}</h1> */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mt-8'>
        {
          coffees.map(coffee =>
            <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
              >
            </CoffeeCard>)
        }
      </div>
      <Social />
      <Footer />

    </>
  )
}

export default App
