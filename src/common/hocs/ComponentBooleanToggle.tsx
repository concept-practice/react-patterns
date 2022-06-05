const ComponentBooleanToggle: React.FC<ComponentBooleanToggleProps> = ({ trueValue, falseValue, boolValue }) => {
  if (boolValue) {
    return trueValue;
  }
  return falseValue;
};

interface ComponentBooleanToggleProps {
  trueValue: JSX.Element;
  falseValue: JSX.Element;
  boolValue: boolean;
}

export default ComponentBooleanToggle;
