import { Suspense, useState } from 'react'
import './App.css'
import Counter from './component/counter/Counter'
import Banner from './component/homepage/Banner'
import Card from './component/homepage/card/Card'
import Navbar from './component/navbar/Navbar'
import StepsSection from './component/StepsSection/StepsSection'
import PricingSection from './component/PricingSection/PricingSection'
import Footer from './component/footer/Footer'


const fetchData = async() =>{
  const res = await fetch("/data.json")
  return res.json()
}


const cardPromise = fetchData(); 

function App() {
  const [count, setCount] = useState(0);

  const handleAddToCart = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Navbar count={count}></Navbar>
      <Banner></Banner>
      <Counter></Counter>
      
      
      <Suspense fallback={<div className="flex justify-center my-10"><span className="loading loading-dots loading-xl"></span></div>}>
        <Card cardPromise={cardPromise} handleAddToCart={handleAddToCart}/>
      </Suspense>

      <StepsSection></StepsSection>
      <PricingSection></PricingSection>
      <Footer></Footer>
    </>
  )
}

export default App;