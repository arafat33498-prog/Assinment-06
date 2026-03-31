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
  const [selectedCards, setSelectedCards] = useState([]);

  const handleAddToCart = (card) => {
    // Unique check: Title diye check korchi jate proti card alada bhabe add hoy
    const isExist = selectedCards.find(item => item.title === card.title);
    
    if (!isExist) {
      setSelectedCards([...selectedCards, card]);
    } else {
      alert("This item is already in your cart!");
    }
  };

  return (
    <>
      <Navbar count={selectedCards.length}></Navbar>
      <Banner></Banner>
      <Counter></Counter>
      
      <Suspense fallback={<div className="flex justify-center my-10"><span className="loading loading-dots loading-xl"></span></div>}>
        <Card 
          cardPromise={cardPromise} 
          handleAddToCart={handleAddToCart} 
          selectedCards={selectedCards} 
        />
      </Suspense>

      <StepsSection></StepsSection>
      <PricingSection></PricingSection>
      <Footer></Footer>
    </>
  )
}

export default App;