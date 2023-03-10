import React from 'react'
import { useNavigate } from 'react-router-dom';

export const BottomOfThePage = () => {
  const navigate = useNavigate()
  return (
    <footer className="bg-light py-3 fixed-bottom">
        <div className="container">
            <div className="row">
            <div className="col-12 col-md-4 text-md-center mx-auto">
                <p style={{cursor: "not-allowed"}} className="text-secondary">Web Tim</p>
            </div>
            </div>
        </div>
    </footer>

  )
}

export default BottomOfThePage;
