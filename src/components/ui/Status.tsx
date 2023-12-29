import { PassCheck } from "../../types/passCheck";

interface Props {
    passMatch: boolean;
    passChecks: PassCheck[];
}

const Status: React.FC<Props> = ({ ...props }) => {
    return !props.passMatch ? (
        <p className="mt-4 text-sm  text-red-500">Passwords do not match</p>
    ) : (
        <>
            <p className="mt-4 text-sm font-medium">Your password should...</p>
            <ul className="mt-1 text-sm ">
                {props.passChecks.map((item) => {
                    return (
                        <li
                            key={item.status}
                            className={
                                item.isValid ? "text-gray-500" : "text-red-500"
                            }>
                            {item.text}
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default Status;
