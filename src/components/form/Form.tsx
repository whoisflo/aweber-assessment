import { useEffect, useState } from "react";

import Button from "../ui/Buttons";
import ListItem from "../ui/ListItem";
import InputItem from "./InputItem";

import { PassCheck } from "../../types/passCheck";

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

const Form = () => {
    const [passChecks, setPassChecks] = useState<PassCheck[]>([]);
    const [isPassValid, setIsPassValid] = useState<Boolean | null>(null);

    useEffect(() => {
        setPassChecks(PASS_CHECK_DATA);
    }, [isPassValid]);

    const onSubmitForm = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("submit!");
        setIsPassValid(false);
    };

    return (
        <form className="mt-5" onSubmit={onSubmitForm}>
            <fieldset>
                <InputItem label="Password" name="password" type="password" />
            </fieldset>
            <fieldset className="mt-4">
                <InputItem
                    label="Confirm password"
                    name="password"
                    type="password"
                />
            </fieldset>

            {isPassValid && (
                <div className="checkResultContainer mt-4">
                    <p className="text-sm font-medium">Your password...</p>

                    <ul className="mt-1 space-y-1 text-sm text-gray-500">
                        {passChecks.map((item: PassCheck, index: number) => {
                            return (
                                <ListItem
                                    key={index}
                                    text={item.text}
                                    isValid={item.isValid}
                                    check={item.check}
                                />
                            );
                        })}
                    </ul>
                </div>
            )}

            <Button type="submit" text="Check password" />
        </form>
    );
};

export default Form;
