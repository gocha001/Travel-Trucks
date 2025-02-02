import css from "./CustomRadioGroup.module.css";

const CustomRadioGroup = ({ field, options }) => {
  return (
    <div className={css.radioGroup}>
      {options.map((option) => (
        <label key={option.value} className={css.radioLabel}>
          <input
            type="radio"
            {...field}
            value={option.value}
            checked={field.value === option.value}
            className={css.radioInput}
          />

          <div className={css.radioContent}>
            <svg width="32" height="32" className={css.radioIcon}>
              <use href={option.icon} />
            </svg>
            <span className={css.radioText}>{option.label}</span>
          </div>
        </label>
      ))}
    </div>
  );
};

export default CustomRadioGroup;
