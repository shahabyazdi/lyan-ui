import React, { useState } from "react";
import FloatPanel from "lyan-ui/components/float_panel";
import "./float_modal.scss";

export default function FloatModal({
  children,
  name,
  portal,
  onOpen,
  panelClassName,
  panelStyle = {},
  removePanelOnHide = true,
  buttonStyle = {},
  ...props
}) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <button
        className="lui-float-modal-button"
        onClick={openModal}
        style={buttonStyle}
      >
        {name}
      </button>
      {(isVisible || !removePanelOnHide) && (
        <FloatPanel
          onClose={() => setIsVisible(false)}
          portal={portal}
          className={panelClassName}
          style={{
            ...panelStyle,
            visibility: removePanelOnHide
              ? ""
              : isVisible
              ? "visible"
              : "hidden",
          }}
          {...props}
        >
          {children}
        </FloatPanel>
      )}
    </>
  );

  function openModal() {
    onOpen?.();
    setIsVisible(true);
  }
}
