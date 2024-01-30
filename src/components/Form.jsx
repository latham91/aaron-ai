import PropTypes from "prop-types";

export default function Form({
    labelName,
    type,
    name,
    placeholder,
    value,
    handleChange,
    isRandom,
    handleRandom,
    className,
}) {
    return (
        <div>
            <div className="flex items-center gap-2 mb-2">
                <label htmlFor={name} className="block text-lg font-medium text-primary">
                    {labelName}
                </label>
                {isRandom && (
                    <button
                        type="button"
                        onClick={handleRandom}
                        className="px-4 py-2 text-xs font-semibold rounded-lg bg-accent text-primary hover:bg-hover"
                    >
                        Suprise me
                    </button>
                )}
            </div>
            <input
                type={type}
                id={name}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                required
                className={`block w-full px-4 py-2 bg-gray-700 border rounded-lg outline-none border-primary/50 focus:ring-accent focus:border-accent ${className}`}
            />
        </div>
    );
}

Form.propTypes = {
    labelName: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    handleChange: PropTypes.func,
    isRandom: PropTypes.bool,
    handleRandom: PropTypes.func,
    className: PropTypes.string,
};
