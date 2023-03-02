import React from 'react'
import { Link } from 'react-router-dom'



export default function Header() {

return (
  <>

<html lang="en">
  <head>
    <meta charSet="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>

  
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossOrigin="anonymous"/>

    
  </head>
  <body>
   

  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
   <b> <Link className="navbar-brand" to="#">FOLAB</Link></b>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
         <b> <Link className="nav-link active"  aria-current="page" to="/">Home</Link></b>
        </li>
        <li className="nav-item">
         <b> <Link className="nav-link" to="/Appointment1">Appoinment Booking</Link></b>
        </li>
        <li className="nav-item">
          <div className="text-white bg-dark">

         <b> <Link className="nav-link" to="/About1">About Us</Link></b>
          </div>
        </li>
      </ul>
      <form className="d-flex">
       <Link className="btn btn-success" type="submit" to="/login"><b>Log-In</b></Link>
      </form>
    </div>
  </div>
</nav>

{/* Appointment1 */}
 
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossOrigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js" integrity="sha384-W8fXfP3gkOKtndU4JGtKDvXbO53Wy8SZCQHczT5FMiiqmQfUpWbYdTil/SxwZgAN" crossOrigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.min.js" integrity="sha384-skAcpIdS7UcVUC05LJ9Dxay8AXcDYfBJqt1CJ85S/CFujBsIzCIv+l9liuYLaMQ/" crossOrigin="anonymous"></script>
  
  </body>
</html>
 </>
)
}