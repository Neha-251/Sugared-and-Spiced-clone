import { Footer } from "../Footer/Footer";
import { FloatHeader } from "../Header/FloatHeader";


import { Food } from "../Menu/food";



const Menu = () => {

  return (
    <>
      <FloatHeader display={true} />
      <div>
        


        <Food />

      </div>
      <Footer />
    </>
  )
}

export default Menu;
