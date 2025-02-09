import './App.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react'



const App = () => {

  const [lakxh, ghimire] = useState(0);

  const press1 = () =>{
    ghimire (lakxh+5)
  }

  // Function is called everytime decrement button is clicked
  const press2 = () => {
    // Counter state is decremented

    if(lakxh === 0)
    {
      return 0;
    }
    
    else {
    ghimire(lakxh - 5)
    }
  }


  // to refresh the page
  const press3 = ()=>{
    ghimire(lakxh==0);
    window.location.reload()
  }

  return (
    <>
      {/* this is parent div */}
      <div className='app'>


        {/* this is for outer layer here we make all the necessary css and other parts */}
        <div className='container'>


          {/* this is the content of the outer layer */}
          <div className='inner_layer'>

            {/* this is for svg or so called refresh button */}
            <div className='right'>
              <svg onClick={press3} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="17" height="17"><path d="M21.962,12.875A10.03,10.03,0,1,1,19.122,5H16a1,1,0,0,0-1,1h0a1,1,0,0,0,1,1h4.143A1.858,1.858,0,0,0,22,5.143V1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V3.078A11.985,11.985,0,1,0,23.95,13.1a1.007,1.007,0,0,0-1-1.1h0A.982.982,0,0,0,21.962,12.875Z" /></svg>
            </div>

            {/* here we will keep the amount that needs to be inside the box */}
            <div className='amount'>
              <h2 className='number'>{lakxh}</h2>

            </div>

          </div>



          {/* this is for button */}
          <form>
            <div className='button_collection'>
              <Stack spacing={2} direction="row">
                <Button onClick={press1} variant="contained" className='btn_one'>+5</Button>
                <Button onClick={press2} variant="contained" className='btn_two'>-5</Button>
              </Stack>
            </div>
          </form>

        </div>

      </div>

    </>
  );
}

export default App;
