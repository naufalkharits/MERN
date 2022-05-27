const Button = ({ className, onClick, type, children }) => {
    return (
        <button className={`${className}`} onClick={onClick} type={`${type}`}>
            {children}
        </button>
    );
};

export default Button;
