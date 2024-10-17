//Button.jsx (dentro de components)

const Button = ({ label, myFunction }) => {
    return <button onClick={myFunction}>{label}</button>;
};

export default Button;
