import React, { cloneElement, useRef, useEffect } from "react";
import "./tab.scss";

function Icon({ className = "", children, ...props }) {
  return (
    <div className={`lui-tab-icon ${className}`} {...props}>
      {children}
    </div>
  );
}

function Tab({
  className = "",
  tabs = [],
  activeTab,
  onChange,
  children,
  icons = [],
  rtl,
  ...props
}) {
  const ref = useRef();

  useEffect(() => {
    function resetItemOverlay() {
      const list = ref.current;

      if (!list || !activeTab) return;

      const children = list.children;
      const style = children[0].style;
      const dataId = activeTab.id ?? activeTab.name;
      const li = [].find.call(
        children,
        (li) => li.getAttribute("data-id") === dataId
      );

      if (!li) return (style.visibility = "hidden");

      const { left, width, height, right } = li.getBoundingClientRect();
      const { left: listLeft, right: listRight } = list.getBoundingClientRect();
      const dist = rtl ? listRight - right : left - listLeft;

      style[rtl ? "right" : "left"] = dist + "px";
      style.width = width + "px";
      style.height = height + "px";
      style.visibility = "visible";
    }

    resetItemOverlay();

    window.addEventListener("resize", resetItemOverlay);

    return () => window.removeEventListener("resize", resetItemOverlay);
  }, [activeTab, rtl]);

  return (
    <div
      className={`lui-tab-container ${rtl ? "lui-rtl" : ""} ${className}`}
      {...props}
    >
      <ul ref={ref} className="lui-tabs">
        <li
          className="lui-tab-overlay"
          style={{
            visibility: "hidden",
          }}
        />
        {tabs.map((tab, index) => (
          <li
            className="lui-tab"
            key={index}
            data-id={tab.id || tab.name}
            onClick={() => onChange?.(tab)}
          >
            {tab.name}
          </li>
        ))}
        <li style={{ flex: "1" }}></li>
        <li className="lui-tab-icons">
          {icons.map((icon, key) => cloneElement(icon, { key }))}
        </li>
      </ul>
      {children}
    </div>
  );
}

export default Object.assign(Tab, { Icon });
