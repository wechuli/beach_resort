import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [
        {
          icon: <FaCocktail />,
          title: "Free Cocktails",
          info:
            "Und jugendlich glück erschüttert drängt zerstoben irren mein stunden jugendlich ich. Lebens aus wiederholt naht unbekannten die wieder an, sonst."
        },
        {
          icon: <FaHiking />,
          title: "Endless Hiking",
          info:
            "Und jugendlich glück erschüttert drängt zerstoben irren mein stunden jugendlich ich. Lebens aus wiederholt naht unbekannten die wieder an, sonst."
        },
        {
          icon: <FaShuttleVan />,
          title: "Free Shuttle",
          info:
            "Und jugendlich glück erschüttert drängt zerstoben irren mein stunden jugendlich ich. Lebens aus wiederholt naht unbekannten die wieder an, sonst."
        },
        {
          icon: <FaBeer />,
          title: "Strongest Beer",
          info:
            "Und jugendlich glück erschüttert drängt zerstoben irren mein stunden jugendlich ich. Lebens aus wiederholt naht unbekannten die wieder an, sonst."
        }
      ]
    };
  }
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={item.title} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Services;
