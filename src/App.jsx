import { Suspense, useState } from 'react'
import './App.css'
import Counter from './component/counter/Counter'
import Banner from './component/homepage/Banner'
import Card from './component/homepage/card/Card'
import Navbar from './component/navbar/Navbar'
import StepsSection from './component/StepsSection/StepsSection'
import PricingSection from './component/PricingSection/PricingSection'
import Footer from './component/footer/Footer'
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const fetchData = async() =>{
  const res = await fetch("/data.json")
  return res.json()
}

const cardPromise = fetchData(); 

function App() {
  const [selectedCards, setSelectedCards] = useState([]);

  const handleAddToCart = (card) => {
    const isExist = selectedCards.find(item => item.title === card.title);
    
    if (!isExist) {
      setSelectedCards([...selectedCards, card]);
      toast(`${card.title} Added!`, {
        icon: "🔥", 
        position: "top-right", 
        autoClose: 2000,
        theme: "light",
        transition: Slide,
      });
    } else {
      toast.warn("Item already in cart!", {
        position: "top-right",
        transition: Slide,
      });
    }
  };

  const handleDelete = (title) => {
    const remainingCards = selectedCards.filter(item => item.title !== title);
    setSelectedCards(remainingCards);
    toast.error("Item removed from cart", {
      position: "top-right",
      transition: Slide,
      autoClose: 1500,
    });
  };

 
  const handleCheckout = () => {
    setSelectedCards([]); 
    toast.success("Purchase Successful!", {
      icon: "🎉",
      position: "top-center",
      transition: Slide,
    });
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
          handleDelete={handleDelete}
          handleCheckout={handleCheckout} 
          selectedCards={selectedCards} 
        />
      </Suspense>

      <StepsSection></StepsSection>
      <PricingSection></PricingSection>
      <Footer></Footer>

      <ToastContainer 
        position="top-right"
        autoClose={2000}
        transition={Slide} 
        newestOnTop={true}
        theme="light"
      />
    </>
  )
}

export default App;