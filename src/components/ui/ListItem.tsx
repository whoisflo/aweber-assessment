interface Props {
    text: string;
    isValid: boolean;
}

const ListItem: React.FC<Props> = ({ ...props }) => {
    return (
        <li className={props.isValid ? "text-gray-500" : "text-red-500"}>
            {props.text}
        </li>
    );
};

export default ListItem;
