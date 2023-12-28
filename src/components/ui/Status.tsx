import { PassCheck } from "../../types/passCheck";

import ListItem from "./ListItem";

const PASS_CHECK_DATA = [
    { text: "has a min length of 6 characters", isValid: false, check: "" },
    {
        text: "has at least 1 uppercase character",
        isValid: false,
        check: "",
    },
    {
        text: "has at least 1 lowercase character",
        isValid: false,
        check: "",
    },
    { text: "has at least 1 number", isValid: false, check: "" },
    {
        text: `has at least 1 special character (!@#$%^&*()_-+={[}]|:;"'<,>.)`,
        isValid: false,
        check: "",
    },
];

interface Props {
    status: string;
}

const Status: React.FC<Props> = ({ ...props }) => {
    return (
        <div className="checkResultContainer mt-4">
            {props.status === "no_match" ? (
                <p className="text-sm text-red-500">Passwords do not match</p>
            ) : (
                <>
                    <p className="text-sm font-medium">Your password...</p>
                    <ul className="mt-1 space-y-1 text-sm text-gray-500">
                        {PASS_CHECK_DATA.map(
                            (item: PassCheck, index: number) => {
                                return (
                                    <ListItem
                                        key={index}
                                        text={item.text}
                                        isValid={item.isValid}
                                        check={item.check}
                                    />
                                );
                            }
                        )}
                    </ul>
                </>
            )}
        </div>
    );
};

export default Status;
