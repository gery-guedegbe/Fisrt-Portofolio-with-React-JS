import React, { useState } from "react";
import "./portofolio.css";
import Menu from "./Menu";

const Portofolio = () => {
  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    });

    setItems(updatedItems);
  };
  return (
    <section className="work container section" id="work">
      <h2 className="section__title">Recent Works</h2>

      <div className="work__filters">
        <span className="work__item" onClick={() => setItems(Menu)}>
          All
        </span>
        <span
          className="work__item"
          onClick={() => filterItem("Web development")}
        >
          Web development
        </span>
        <span className="work__item" onClick={() => filterItem("Creative")}>
          Creative
        </span>
      </div>

      <div className="work__container grid">
        {items.map((elem) => {
          const { id, image, title, link, category } = elem;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>

              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <a href={link} className="work__button" alt="">
                <i className="icon-link work__button-icon"></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portofolio;
