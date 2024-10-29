interface IProps {
  label: string;
  type?: "primary" | "default";
  size?: "small" | "middle" | "large";
  onClick: () => void;
  disabled?: boolean;
}

const BaseButton = (props: IProps) => {
  const {
    label,
    onClick,
    disabled = false,
    type = "default",
    size = "middle",
  } = props;

  const buttonClass = `
    ${
      type === "primary"
        ? "bg-gradient-to-r from-rose-500 to-amber-500 hover:opacity-90 text-white"
        : "bg-gradient-to-r from-rose-600 to-amber-500 inline-block text-neutral-400 hover:text-transparent border-2 border-neutral-400 bg-clip-text hover:border-amber-400"
    }
    ${
      size === "small"
        ? "py-1 w-[75px] text-xs rounded-md shadow"
        : size === "large"
        ? "py-3 w-[150px] text-xl rounded-2xl font-bold shadow-2xl"
        : "py-2 w-[100px] rounded-lg font-semibold shadow-xl"
    }
     transition mx-1
    disabled:opacity-50
  `;

  return (
    <button
      className={buttonClass}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      aria-label={label}
    >
      <span>{label}</span>
    </button>
  );
};

export default BaseButton;
