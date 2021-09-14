import { useState, useRef, useEffect } from "react";
import ElementPopper from "react-element-popper";
import toLocaleDigits from "../../shared/toLocaleDigits";
import { IconChevronDown } from "@tabler/icons";
import "./multi_select.scss";

export default function MultiSelect({
  type,
  options = [],
  value: values,
  name,
  onChange,
  onValueChange,
  className = "",
  allowMoreOptions,
  onNewItemRequested,
  labels = {
    "Item Selected": "Item Selected",
    "Items Selected": "Items Selected",
    "Select All": "Select All",
    "Select None": "Select None",
    More: "More",
  },
  digits,
  ...props
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ref = useRef();

  if (!Array.isArray(values)) values = [];

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const mustSelectAll = values.length !== getOptionsLength(options);

  delete props.emptyOption;

  const style = {
    display: "block",
    border: isMenuOpen ? "1px solid var(--gray)" : "1px solid var(--base)",
    boxShadow: isMenuOpen ? "0 0 2px var(--gray)" : "unset",
  };

  return (
    <ElementPopper
      ref={ref}
      containerClassName={`lui-multi-select ${className}`}
      zIndex={1}
      containerStyle={style}
      element={renderElement()}
      popper={renderPopper()}
    />
  );

  function renderElement() {
    return (
      <div
        className="lui-placeholder"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        name={name}
        data-value={JSON.stringify(values)}
        data-options={JSON.stringify(options)}
        {...props}
      >
        <span>
          {toLocaleDigits(values.length, digits)}{" "}
          {labels[(values.length > 1 ? "Items" : "Item") + " Selected"]}
        </span>
        <IconChevronDown stroke={3} />
      </div>
    );
  }

  function renderPopper() {
    return (
      isMenuOpen && (
        <div
          className="lui-options"
          style={{
            width: ref?.current?.clientWidth
              ? `${ref?.current?.clientWidth}px`
              : "100px",
          }}
        >
          {options.length > 0 && (
            <label className="lui-option">
              <input
                type="checkbox"
                checked={!mustSelectAll}
                onChange={selectAll}
              />
              <div>{labels[`Select ${mustSelectAll ? "All" : "None"}`]}</div>
            </label>
          )}
          {getOptions(options)}
          {allowMoreOptions && (
            <label
              className="lui-option"
              value={props.id + "__more"}
              onClick={newOption}
            >
              <div>{labels.More}...</div>
            </label>
          )}
        </div>
      )
    );
  }

  function getOptionsLength(options) {
    let length = 0;

    options.forEach((option) => {
      length++;

      if (option.childs) length += getOptionsLength(option.childs);
    });

    return length;
  }

  function getOptions(options = [], depth = 0, parents = []) {
    return options.map(({ text, value, childs }, index) => (
      <div key={index}>
        <label className="lui-option">
          {depth > 0 && "\u00A0\u00A0".repeat(depth)}
          <input
            name={name}
            type="checkbox"
            value={value}
            checked={values.includes(value)}
            onChange={(e) => select(e, parents, childs)}
          />
          <div>{text}</div>
        </label>
        {getOptions(childs, depth + 1, [...parents, value])}
      </div>
    ));
  }

  function selectAll(e) {
    if (mustSelectAll) {
      values = getAllValues(options);
    } else {
      values = [];
    }

    if (onChange) onChange(e);
    if (onValueChange) onValueChange(values);
  }

  function getAllValues(options) {
    let list = [];

    options.forEach((option) => {
      list.push(option.value);

      if (option.childs) list = list.concat(getAllValues(option.childs));
    });

    return list;
  }

  function select(e, parents = [], childs = []) {
    let value = e.target.value;

    if (values.includes(value)) {
      values = values.filter((val) => val !== value);

      removeAllChilds(childs);
    } else {
      values.push(value);

      parents.forEach((parent) => {
        if (!values.includes(parent)) values.push(parent);
      });

      addAllChilds(childs);
    }

    if (onChange instanceof Function) onChange(e);
    if (onValueChange instanceof Function) onValueChange([...values]);
  }

  function removeAllChilds(childs = []) {
    childs.forEach(({ value, childs }) => {
      values = values.filter((val) => val !== value);

      removeAllChilds(childs);
    });
  }

  function addAllChilds(childs = []) {
    childs.forEach(({ value, childs }) => {
      if (!values.includes(value)) values.push(value);

      addAllChilds(childs);
    });
  }

  function newOption() {
    if (onNewItemRequested instanceof Function) {
      onNewItemRequested();
    }
  }
}
