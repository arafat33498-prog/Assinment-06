
import { Suspense } from 'react'
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

function App() {
  const cardPromise = fetchData()

  return (
    <>
     
   <Navbar></Navbar>
   <Banner></Banner>
   <Counter></Counter>
   <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
   <Card cardPromise={cardPromise}/>
    
   </Suspense>
    <StepsSection></StepsSection>
    <PricingSection></PricingSection>
    <Footer></Footer>
    </>
  )
}

export default App
