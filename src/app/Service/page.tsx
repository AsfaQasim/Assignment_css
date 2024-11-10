import React from "react";
import Image from "next/image";
import naran from "../../public/narankghanpic.jpg";
import malam from "../../public/malamjabba.jpeg";
import skardu from "../../public/skardu.jpeg";
import islamabad from "../../public/islamabad.jpeg";

export default function Service() {
  return (
    <div className="service">
      <section className="service1">
        <div className="service2">
          <div className="service3">
            <div className="service4">
              <h1 className="service5">My Services</h1>
              <div className="service6" />
            </div>
            <p className="service7">
              Personalized travel planning to create your ideal getaway, from
              luxury escapes to budget-friendly adventures...
            </p>
          </div>
          <div className="service8">
            {[
              { img: naran, place: "Naran Kaghan", description: "Embark on an unforgettable journey..." },
              { img: malam, place: "Malam Jabba", description: "Experience the thrill of Pakistan's top winter wonderland..." },
              { img: skardu, place: "Skardu", description: "Discover the majestic beauty of Skardu..." },
              { img: islamabad, place: "Islamabad", description: "Explore the modern charm and rich cultural heritage..." },
            ].map((service, index) => (
              <div className="service-item" key={index}>
                <div className="service-card">
                  <Image className="service-image" src={service.img} alt={service.place} />
                  <h3 className="service-place-label">Place</h3>
                  <h2 className="service-place-name">{service.place}</h2>
                  <p className="service-description">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>git initgit init
  );
}
