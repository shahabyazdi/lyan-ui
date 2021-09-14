import { useEffect, useRef, useState, useMemo } from "react";
import { IconChevronDown } from "@tabler/icons";
import "./accordion.scss";

function Icon({ className = "", children, ...props }) {
  return (
    <div className={`lui-accordion-icon ${className}`} {...props}>
      {children}
    </div>
  );
}

function Accordion({
  icons,
  children,
  name,
  collapse,
  shadow = true,
  className,
  ...props
}) {
  const ref = useRef();
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
    <div
      ref={ref}
      className={`lui-accordion lui-${height > 0 ? "open" : "close"} ${
        shadow ? "lui-shadow" : ""
      } ${className || ""}`}
      {...props}
    >
      <div className="lui-title" style={name ? undefined : { height: "17px" }}>
        <div className="lui-title-name">{name || ""}</div>
        <div style={{ flex: 1 }} />
        <div className="lui-accordion-icons">
          {icons}
          <Icon onClick={toggle}>
            <IconChevronDown
              className={`lui-toggle ${height ? "lui-up" : ""}`}
            />
          </Icon>
        </div>
      </div>
      <div
        className="lui-body"
        style={{
          height: height + "px",
          overflow: "hidden",
        }}
      >
        <div ref={body} id={id}>
          {children}
        </div>
      </div>
    </div>
  );

  function toggle() {
    let containerHeight = body.current.clientHeight;

    setHeight(height > 0 ? 0 : containerHeight);
  }
}

export default Object.assign(Accordion, { Icon });
