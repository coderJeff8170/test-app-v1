import { CustomStatusPanelProps } from "ag-grid-react";

export const TestComponent = (props: CustomStatusPanelProps) => {
  const onClick = () => {
    console.log("Page size: " + props.api.getModel().getRowCount());
    console.log(props.api);
  };

  const style = {
    padding: 5,
    margin: 5,
  };

  return (
    <input
      style={style}
      type="button"
      onClick={onClick}
      value="Click Me For Selected Row Count"
    />
  );
};
