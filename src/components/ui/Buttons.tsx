interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
}

const Button: React.FC<Props> = ({ ...props }) => {
    return (
        <button
            type={props.type}
            className="mt-8 w-full rounded-lg bg-blue-600 py-2.5 text-sm hover:bg-blue-700">
            {props.text}
        </button>
    );
};

export default Button;
