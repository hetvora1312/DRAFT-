import {React , useEffect} from 'react'
import { Link } from 'react-router-dom'

// css 
import './assets/css/ErrorPage.css';

export const Error404 = () => {
  useEffect(() => {
    // Set body class when component mounts
    document.body.className = "VerifyPageBody";

    // Clean up function to remove body class when component unmounts
    return () => {
      document.body.className = "";
    };
  }, []);

  const handleLogout = () => {
    // Delete session storage
    sessionStorage.removeItem("userData");
  };

  return (
    <div className='ErrorPageDiv'>
      <p className='ErrorPageText'>404 Page Not Found</p>
      <Link onClick={handleLogout} to='/'>Dead or Broken Link</Link>
    </div>
  )
}
