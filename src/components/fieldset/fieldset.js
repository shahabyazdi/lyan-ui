import React, { useRef, useState, useEffect, useMemo } from "react";
import { IconChevronDown } from "@tabler/icons";
import "./fieldset.scss";

function Icon({ children, className = "", ...props }) {
  return (
    <div className={`lui-fieldset-icon ${className}`} {...props}>
      {children}
    </div>
  );
}

function Fieldset({
  className = "",
  shadow,
  name,
  icons,
  collapse,
  children,
  ...props
}) {
  const body = useRef();
  const [height, setHeight] = useState(collapse ? 0 : 1);
  const id = useMemo(() => String(Date.now()) + props.id, [props.id]);

  useEffect(() => {
    if (height <= 0) return;

    let containerHeight = body.current.clientHeight;

    if (height !== containerHeight) setHeight(containerHeight);
  }, [height, children]);

  useEffect(() => {
    const element = document.getElementById(id);

    if (!element) return;

    const observer = new MutationObserver(updateHeight);

    observer.observe(element, { childList: true, subtree: true });

    function updateHeight(list) {
      if (list.lenght === 0) return;

      setHeight(body.current.clientHeight);
    }

    return () => observer.disconnect();
  }, [id]);

  return (
    <fieldset
      className={`lui-fieldset lui-fieldset-${height > 0 ? "open" : "close"} ${
        shadow ? "lui-shadow" : ""
      } ${className}`}
      {...props}
    >
      <legend>
        <Icon onClick={toggle}>
          <IconChevronDown className={`lui-toggle ${height ? "lui-up" : ""}`} />
        </Icon>
        {icons}
        <div className="lui-fieldset-name">{name}</div>
      </legend>
      <div
        id={id}
        className="lui-body"
        style={{
          height: height + "px",
          overflow: "hidden",
        }}
      >
        <div ref={body}>{children}</div>
      </div>
    </fieldset>
  );

  function toggle() {
    let containerHeight = body.current.clientHeight;

    setHeight(height > 0 ? 0 : containerHeight);
  }
}

export default Object.assign(Fieldset, { Icon });
