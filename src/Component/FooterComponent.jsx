 import React, { Component } from 'react'
 
 export default class FooterComponent extends Component {
   render() {
     return (<>
     
<footer className="page-footer font-small special-color-dark pt-4 bg-dark footer" >

 
  <div classNmae="container ">

    
    <div className="row">

      
      <div className="col-md-6 mb-4">

        
        <form className="input-group">
        <input type="text" class="form-control form-control-sm" placeholder="Your Name"
            aria-label="Your email" aria-describedby="basic-addon2" /> <div class="input-group-append">
           <button className="btn btn-sm btn-primary my-0  text-white"  onClick={e=> window.location.href="https://www.google.co.in/"} type="button"><span className="my-3">Search</span></button>
        </div></form>
      

      </div>
      

     
      <div className="col-md-6 mb-4">

        <form className="input-group">
          <input type="text" class="form-control form-control-sm" placeholder="Your email"
            aria-label="Your email" aria-describedby="basic-addon2" />
          <div class="input-group-append">
            <button className="btn btn-sm btn-primary my-0  text-white"  onClick={e=> window.location.href="https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1"}  type="button"><span className="my-3">Sign up</span></button>
          </div>
        </form>

      </div>
     

    </div>
   

  </div>
  


  <div className="footer-copyright text-center py-3 text-white">© 2022 Copyright:
    <a href="https://www.linkedin.com/in/ramashish-yadav-2694631b1/"> BaLi.com</a>
  </div>
 

</footer>

    
   </>
     )
   }
 }
 