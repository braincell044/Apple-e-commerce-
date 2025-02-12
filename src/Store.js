import React from 'react'
// import Slide from './images/Rectangle 31.png'
// import Slidetwo from './images/Rectangle 32.png'
// import Slidethree from './images/Rectangle 33.png'
// import Slidefour from './images/Rectangle 34.png'
// import Slidefive from './images/Rectangle 35.png'
// import Slidesix from './images/Rectangle 30.png'
import './App.css'
import Coursel from './Coursel'




const Store = () => {
  return (
    <div className='overflow-h'>
        <div className='px-4'>
        <h2>Store</h2>
        <div className='bar'></div>
        </div>

        {/* <div class="container text-center py-5">
  <div class="row">
    <div class="col">
<img alt='slide' src={Slidesix}/>
    </div>
    <div class="col">
    <img alt='slide' src={Slidetwo}/>
    </div>
    <div class="col">
    <img alt='slide' src={Slidethree}/>
    </div>
    <div class="col">
    <img alt='slide' src={Slidefour}/>
    </div>
    <div class="col">
    <img alt='slide' src={Slidefive}/>
    </div>
    <div class="col">
    <img alt='slide' src={Slide}/>
    </div>

  </div>
</div> */}
<Coursel/>

<div className='px-4'>
    <h4>All models Mac</h4>
    <div className='bar-2'></div>
</div>

<div className="container text-center py-5 mx-5">
  <div className="row">
    <div className="col">
        <div className='mac card-1'>
        <p>Buy MacBook Air 13-inch with M1 chip</p>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
         <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <button className='btn mybtn '>Buy now</button>

        </div>

    </div>
    <div className="col">

 <div className='mactwo card-1'>
 <p>Buy MacBook Air 13-inch with M2 chip</p>
 <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
         <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <button className='btn mybtn '>Buy now</button>
 </div>
    </div>
    <div className="col">
    <div className='macthree card-1'>
 <p>Buy MacBook pro 13-inch</p>
 <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
         <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <button className='btn mybtn '>Buy now</button>
 </div>
    </div>
  </div>
</div>
<div className='px-4 py-4'>
    <h4>All models iPhone</h4>
    <div className='bar-3'></div>
</div>

<div className="container text-center mx-4">
  <div className="row">
    <div className="col">
  <div className='iphone card-1'>
<p>Buy iPhone 14 Pro </p>
<br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
         <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <button className='btn mybtn '>Buy now</button>

  </div>
    </div>
    <div className="col">
    <div className='iphonetwo card-1'>
    <p>Buy iPhone 14 Plus</p>
    <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
         <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <button className='btn mybtn '>Buy now</button>
</div>
    </div>
    <div className="col">
    <div className='iphonethree card-1 '>
    <p>Buy iPhone 14 Pro max</p>
    <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
         <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <button className='btn mybtn '>Buy now</button>

</div>
    </div>
  </div>
</div>


<div className='px-4 py-4'>
    <h4>All models iPad</h4>
    <div className='bar-2'></div>
</div>
<div className="container text-center py-5 mx-5">
  <div className="row">
    <div className="col">
   <div className='ipad card-1'>

<p>Buy iPad Pro 12.9 Inch</p>
<br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
         <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <button className='btn mybtn '>Buy now</button>


   </div>
    </div>
    <div className="col">
<div className='ipadtwo card-1'>
<p>Buy iPad Pro 11 Inch</p>
<br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
         <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <button className='btn mybtn '>Buy now</button>
</div>
    </div>
    <div className="col">
<div className='ipadthree card-1'>
<p> Buy iPad 10th Gen</p>
<br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
         <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <button className='btn mybtn '>Buy now</button>

</div>
    </div>
  </div>
</div>


    </div>
  )
}

export default Store