const ComponentBooleanToggle: React.FC<ComponentBooleanToggleProperties> = ({ trueValue, falseValue, boolValue }) => {
  if (boolValue) {
    return trueValue;
  }
  return falseValue;
};

interface ComponentBooleanToggleProperties {
  trueValue: JSX.Element;
  falseValue: JSX.Element;
  boolValue: boolean;
}

export default ComponentBooleanToggle;
