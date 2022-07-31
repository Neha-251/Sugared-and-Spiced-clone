import { Footer } from "../Footer/Footer";
import { FloatHeader } from "../Header/FloatHeader";


import { Food } from "../Menu/food";



const Menu = () => {

  return (
    <>
      <FloatHeader display={true} />
      <div>
        
        <div id='welcomeText' className='text-5xl text-center py-20'>Menu</div>

        <Food />

      </div>
      <Footer />
    </>
  )
}

export default Menu;
