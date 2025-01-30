import css from './CheckBox.module.css';

const Checkbox = ({ field, id, label, icon, value }) => {
  return (
    <div className={css.checkboxContainer}>
      <input
        type="checkbox"
        id={id}
        {...field}
        value={value}
        checked={field.value.includes(value)}
        className={css.checkboxInput}
      />
      <label htmlFor={id} className={css.checkboxLabel}>
        <svg
          width="32"
          height="32"
          stroke="currentColor"
          fill="none"
        >
          <use
            href={icon}
            // stroke="black"
            strokeWidth="1.6"
            // vectorEffect="non-scaling-stroke"
          />
        </svg>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;

