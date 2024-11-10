import Image from "next/image";
import React from "react";
import about from "../../public/aboutpic.jpeg";
import mypic from "../../public/myphoto.jpeg";

export default function About() {
  return (
    <div className= "about">
      <section className="about1">
        <div className="about2">
          <div className="about3">
            <div className="about4">
              <Image
                alt="content"
                className="object-cover h-full w-full rounded-full flex justify-center"
                src={about}
              />
            </div>
            <div className="about5">
              <div className= "about6">
                <div className="about7">
                  <Image alt="hero" src={mypic} className="rounded-full" />
                </div>
                <div className="about8">
                  <h2 className="about9">
                    My Travel.
                  </h2>
                  <div className="about10" />
                  <p className="text-base">
                    Explore the world&apos;s most breathtaking destinations with
                    our tailor-made travel packages. Your next unforgettable
                    adventure starts here.
                  </p>
                </div>
              </div>
              <div className="about11">
                <p className="about12">
                  Discover hidden gems and iconic landmarks with our expertly
                  curated itineraries. Whether you&apos;re seeking a relaxing
                  getaway or an adventurous escape, we have the perfect
                  destination for you. Let us handle the details, so you can
                  focus on making memories that last a lifetime. From exotic
                  beaches to vibrant cityscapes, your dream vacation is just a
                  booking away. /
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
