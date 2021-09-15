import React from "react";
import Switch from "lyan-ui/componenct/switch";
import Input from "lyan-ui/componenct/input";
import Number from "lyan-ui/componenct/number";
import CodeEditor from "lyan-ui/componenct/code_editor";
import DatePicker from "react-multi-date-picker";
import AnalogTimePicker from "react-multi-date-picker/plugins/analog_time_picker";

export default function FormControl({
  type,
  onChange,
  onValueChange,
  ...props
}) {
  switch (type) {
    case "checkbox":
      return (
        <input
          type="checkbox"
          checked={props.value}
          onChange={(e) => {
            onChange?.(e);
            onValueChange?.(e.target.checked);
          }}
          {...props}
        />
      );
    case "switch":
      return (
        <Switch
          type={type}
          onChange={onChange}
          onValueChange={onValueChange}
          {...props}
        />
      );
    case "date":
    case "time":
    case "month":
    case "year":
    case "week":
      if (type === "month") props.onlyMonthPicker = true;
      if (type === "year") props.onlyYearPicker = true;

      if (type === "time") {
        props = {
          ...props,
          disableDayPicker: true,
          format: props.format ?? "HH:mm:ss",
          plugins: [<AnalogTimePicker hideSeconds={props.hideSeconds} />],
        };
      }

      if (type === "week") {
        props.range = true;
        props.weekPicker = true;
      }

      if (!props.render) {
        props.render = <CustomInput className={props.inputClass} />;
      }

      return (
        <DatePicker
          {...props}
          onChange={(value) => {
            onChange?.(value);
            onValueChange?.(value);
          }}
        />
      );
    case "number":
      return (
        <Number onChange={onChange} onValueChange={onValueChange} {...props} />
      );
    case "code editor":
      return (
        <CodeEditor
          onChange={onChange}
          onValueChange={onValueChange}
          {...props}
        />
      );
    default:
      return (
        <Input
          type={type}
          onChange={onChange}
          onValueChange={onValueChange}
          {...props}
        />
      );
  }
}

function CustomInput({ value, openCalendar, handleValueChange, className }) {
  return (
    <Input
      className={className}
      value={value}
      onFocus={openCalendar}
      onChange={handleValueChange}
    />
  );
}
