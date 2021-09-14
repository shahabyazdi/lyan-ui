import React, { useEffect, cloneElement, useRef } from "react";
import { IconPlus } from "@tabler/icons";
import "./list.scss";

function ToolbarIcon({ children, activeItem, className = "", ...props }) {
  return (
    <div className={`lui-icon ${className}`} {...props}>
      {children}
    </div>
  );
}

function Item({ item, onClick, children, ...props }) {
  let id = item.id || item.name;

  return (
    <li data-id={id} {...props}>
      <div onClick={onClick}>{item.name}</div>
      {children}
    </li>
  );
}

function List({
  gray,
  toolbar,
  onNewItem,
  className = "",
  activeItem,
  toolbarIcons = [],
  children,
  searchValue,
  onSearch,
  rtl,
  labels = { Search: "Search" },
  ...props
}) {
  const ref = useRef();
  const classNames = ["lui-list-container", className];

  if (toolbar) classNames.push("lui-toolbar");
  if (gray) classNames.push("lui-gray");
  if (rtl) classNames.push("lui-rtl");

  useEffect(() => {
    let list = ref.current;
    let itemOverlay = list.children[0];

    if (!activeItem) return (itemOverlay.style.visibility = "hidden");

    let activeId = activeItem.id || activeItem.name;

    let li = [].find.call(
      list.children,
      (li) => li.getAttribute("data-id") === activeId
    );

    if (!li) return (itemOverlay.style.visibility = "hidden");

    let { top } = li.getBoundingClientRect();
    let { top: parentTop } = list.getBoundingClientRect();

    itemOverlay.style.top = top - parentTop + "px";
    itemOverlay.style.visibility = "visible";
  }, [activeItem, searchValue]);

  return (
    <div className={classNames.join(" ")} {...props}>
      {toolbar && (
        <div className="lui-toolbar">
          <div className="lui-search">
            <input
              placeholder={labels.Search}
              value={searchValue || ""}
              onChange={onSearch}
            />
          </div>
          {toolbarIcons.map((toolbarIcon, key) =>
            cloneElement(toolbarIcon, { key })
          )}
          {onNewItem && (
            <ToolbarIcon onClick={onNewItem}>
              <IconPlus stroke="1" style={{ margin: "auto" }} />
            </ToolbarIcon>
          )}
        </div>
      )}
      <ul ref={ref} className="lui-list">
        <li
          className="lui-item-overlay"
          style={{
            visibility: "hidden",
          }}
        />
        {children}
      </ul>
    </div>
  );
}

export default Object.assign(List, {
  ToolbarIcon,
  Item,
});
