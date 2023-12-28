interface Props {
    label: string;
    name: string;
    type?: string;
    forwardedRef: React.RefObject<HTMLInputElement>;
}

const InputItem: React.FC<Props> = ({ ...props }) => {
    return (
        <>
            <label htmlFor={props.name} className="block text-sm font-medium">
                {props.label}
            </label>
            <input
                type={props.type}
                name={props.name}
                id={props.name}
                ref={props.forwardedRef}
                className="mt-1 block w-full rounded-lg border border-gray-600 bg-gray-700 p-2.5"
            />
        </>
    );
};

export default InputItem;
