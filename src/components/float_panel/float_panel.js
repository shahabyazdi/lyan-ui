import React, { useRef, useEffect, forwardRef } from "react";
import { createPortal } from "react-dom";
import Draggable from "react-draggable";
import { IconX } from "@tabler/icons";
import "./float_panel.scss";

function TitlebarIcon({ className = "", children, ...props }) {
  return (
    <div className={`lui-titlebar-icon ${className}`} {...props}>
      {children}
    </div>
  );
}

function FloatPanel(
  {
    titleBar = {},
    id,
    width,
    maxHeight = "70vh",
    children,
    portal,
    onClose,
    style = {},
    className = "",
    blur = true,
    shadow = true,
    ...otherProps
  },
  outerRef
) {
  const isBrowser = typeof window !== "undefined";
  const div = useRef();
  const ref = useRef();
  const classNames = ["lui-float-panel", className];

  if (blur) classNames.push("lui-blur");
  if (shadow) classNames.push("lui-shadow");
  if (!Array.isArray(titleBar.icons)) titleBar.icons = [];
  if (isBrowser && !div.current) div.current = document.createElement("div");
  if (!id) id = Date.now();

  id = `strong-${id}`;
  style = { ...style, width: width + "%" };
  className = classNames.join(" ");

  useEffect(() => {
    if (!portal || !isBrowser) return;

    const portalDiv = div.current;

    document.body.appendChild(portalDiv);

    return () => document.body.removeChild(portalDiv);
  }, [portal, isBrowser]);

  const panel = (
    <Draggable bounds="html" handle={"#" + id} nodeRef={ref}>
      <div ref={setRef} className={className} style={style} {...otherProps}>
        <div
          onClick={(e) => titleBar.onClick?.(e)}
          className="lui-titlebar"
          id={id}
        >
          <div className="lui-titlebar-name">{titleBar.title || ""}</div>
          <div className="lui-titlebar-icons">
            {titleBar.icons}
            <TitlebarIcon onClick={() => onClose?.()}>
              <IconX className="lui-close" />
            </TitlebarIcon>
          </div>
        </div>
        <div className="lui-body" style={{ maxHeight }}>
          {children}
        </div>
      </div>
    </Draggable>
  );

  return isBrowser && portal ? createPortal(panel, div.current) : panel;

  function setRef(element) {
    ref.current = element;

    if (outerRef instanceof Function) return outerRef(element);
    if (outerRef) outerRef.current = element;
  }
}

export default Object.assign(forwardRef(FloatPanel), { TitlebarIcon });
