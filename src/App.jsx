import React from 'react'
import Topbar from './Components/Topbar'
import Header from './Components/Header'
import Features from './Components/Features'
import Product from './Components/Product'
import Reviewers from './Components/Reviewers'
import showcase1 from './assets/bg-showcase-1.jpg'
import showcase2 from './assets/bg-showcase-2.jpg'
import showcase3 from './assets/bg-showcase-3.jpg'
import testimonials1 from './assets/testimonials-1.jpg'
import testimonials2 from './assets/testimonials-2.jpg'
import testimonials3 from './assets/testimonials-3.jpg'
import Email from './Components/Email'
import Footer from './Components/footer'

function App() {

  let features=[
    {
        icon: "bi-window m-auto text-primary",
        title: "Fully Responsive",
        description: "This theme will look great on any device, no matter the size!"
    },
    {
        icon: "bi-layers m-auto text-primary",
        title: "Bootstrap 5 Ready",
        description: "Featuring the latest build of the new Bootstrap 5 framework!"
    },
    {
        icon: "bi-terminal m-auto text-primary",
        title: "Easy to Use",
        description: "Ready to use with your own content, or customize the source files!"
    }
 ]

 let product=[
  {
    image: showcase1,
    title: "Fully Responsive Design",
    description: "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
    order: false
  },
  {
    image: showcase2,
    title: "Updated For Bootstrap 5",
    description: "Newly improved, and full of great utility classNameNamees, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!",
    order: true
  },
  {
    image: showcase3,
    title: "Easy to Use & Customize",
    description: "Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!",
    order: false
  }
 ]
 let reviewers = [
  {
    image: testimonials1,
    name: "Margaret E.",
    review: "This is fantastic! Thanks so much guys!"
  },
  {
    image: testimonials2,
    name: "Fred S.",
    review: "Bootstrap is amazing. I've been using it to create lots of super nice landing pages."
  },
  {
    image: testimonials3,
    name: "Sarah W.",
    review: "Thanks so much for making these free resources available to us!"
  }
 ]
 console.log()
  return <>
  
    {<Topbar/>}
    {<Header/>}
    <section className="features-icons bg-light text-center">
            <div className="container">
                <div className="row">
                  {
                    features.map((e, i)=>{
                      return <Features prop={e} key={i}/>
                    })
                  }
                </div>
            </div>
    </section>
    
    <section className="showcase">
      <div className="container-fluid p-0">
        {
        product.map((e, i)=>{
          return <Product prop={e} key={i}/>
        })
        }
      </div>
    </section>
    <section className="testimonials text-center bg-light">
            <div className="container">
                <h2 className="mb-5">What people are saying...</h2>
                <div className="row">
                  {
                      reviewers.map((e, i)=>{
                        return <Reviewers prop={e} key={i}/>
                      })
                  }
                </div>
            </div>
    </section>
    {<Email/>}
    {<Footer/>}
</>
}

export default App