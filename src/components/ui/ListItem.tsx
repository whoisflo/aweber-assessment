import { PassCheck } from "../../types/passCheck";

const ListItem: React.FC<PassCheck> = ({ ...props }) => {
    return (
        <li
            data-hs-strong-password-hints-rule-text="min-length"
            className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2">
            <svg
                className="h-4 w-4 flex-shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round">
                {props.isValid ? (
                    <polyline points="20 6 9 17 4 12" />
                ) : (
                    <>
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                    </>
                )}
            </svg>
            {props.text}
        </li>
    );
};

export default ListItem;
