import Image from "next/image"
import React from "react"
import mypic from '../public/myphoto.jpeg'
import Link from "next/link"

export default function Home() {
  return (
    <div className="bg">
      <section className= "sec">
        <div className="div">
          <div className="div2">
            <h1 className="h1">
              Best destination around the world.
              <br className="br" />
              Travel,Enjoy and live a new and full life.
            </h1>
            <p className="p">
              My travel website provides users with tools to explore and book
              destinations, offering detailed information on flights,
              accommodations, and attractions. It helps travelers plan their
              perfect trip by providing reviews, itineraries, and deals all in
              one place.
            </p>
            <div className="divs">
              <Link href={'./contact'}>
              <button  className="btn">
                Contact
              </button>
              </Link>
              <br />
              <Link href={'./contact'}>
              <button className= "btn">
                Booking
              </button>
              </Link>
            </div>
         
          </div>
          <div className="img">

            <Image alt="hero" src={mypic} className="rounded-full" />
          </div>
        </div>
      </section>
    </div>
  );
}
