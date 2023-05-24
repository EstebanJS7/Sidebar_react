import React from "react";
import { useState } from "react";
import "./Box.css";

const Box = () => {
  const list = [
    {
      element: "Alaska",
      subElements: ["Bascom"],
    },
    {
      element: "Connecticut",
      subElements: [],
    },
    {
      element: "Wisconsin",
      subElements: ["Oretta", "Konterra", "Guthrie"],
    },
    {
      element: "Nebraska",
      subElements: [
        "Jennings",
        "Harviell",
        "Alfarata",
        "Bluffview",
        "Escondida",
      ],
    },
    {
      element: "Georgia",
      subElements: [],
    },
  ];
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const toggleMenu = (index) => {
    if (activeSubMenu !== null) {
      setActiveSubMenu(null);
    }
    setActiveMenu(activeMenu === index ? null : index);
  };

  const toggleSubMenu = (subIndex) => {
    setActiveSubMenu(activeSubMenu === subIndex ? null : subIndex);
  };

  const renderElements = () => {
    return (
      <div className="flex-shrink-0 p-3 bg-white sidebar">
        {list.map((item, index) => (
          <div className="mb-1" key={index}>
            <button
              className={`btn btn-toggle align-items-center rounded collapsed ${
                activeMenu === index ? "active" : ""
              }`}
              onClick={() => toggleMenu(index)}
            >
              {item.element}
            </button>
            {item.subElements.length > 0 && (
              <div
                className={`collapse ${activeMenu === index ? "show" : ""}`}
                id={`${item.element.toLowerCase()}-collapse`}
              >
                <div className="sub-items">
                  {item.subElements.map((subItem, subIndex) => (
                    <button
                      className={`btn btn-toggle align-items-center rounded collapsed ${
                        activeSubMenu === subIndex ? "active" : ""
                      }`}
                      key={subIndex}
                      onClick={() => toggleSubMenu(subIndex)}
                    >
                      {subItem}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return renderElements();
};

export default Box;
