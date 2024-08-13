import React from 'react'

function Reviewers({prop}) {
  return <>
    <div className="col-lg-4">
        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
            <img className="img-fluid rounded-circle mb-3" src={prop.image} alt="..." />
            <h5>{prop.name}</h5>
            <p className="font-weight-light mb-0">"{prop.review}"</p>
        </div>
    </div>
  </>
}

export default Reviewers