import { Field } from "formik";
import icons from "../../assets/icons/catalog/icon-form.svg";
import Checkbox from "../CheckBox/CheckBox";

const EquipmentField = ({ id, label, value, icon }) => (
  <Field
    name="equipment"
    component={Checkbox}
    id={id}
    value={value}
    label={label}
    icon={`${icons}#${icon}`}
  />
);

export default EquipmentField;
