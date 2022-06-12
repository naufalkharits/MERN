const Button = ({ className, onClick, type, form, children }) => {
    return (
        <button
            className={`${className}`}
            onClick={onClick}
            type={`${type}`}
            form={`${form}`}
        >
            {children}
        </button>
    );
};

export default Button;
