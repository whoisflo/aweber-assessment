import { useRef, useState } from "react";

import Button from "../ui/Buttons";
import Status from "../ui/Status";
import InputItem from "./InputItem";

const Form = () => {
    const [passStatus, setPassStatus] = useState({
        isValid: true,
        status: "",
    });

    const passInputRef = useRef<HTMLInputElement>(null);
    const passConfirmInputRef = useRef<HTMLInputElement>(null);

    const onSubmitForm = (e: React.FormEvent) => {
        e.preventDefault();
        checkIsPassValid(
            passInputRef.current!.value.trim(),
            passConfirmInputRef.current!.value.trim()
        );
    };

    const checkIsPassValid = (pass: string, passConfirm: string) => {
        console.log("submit", pass, passConfirm);

        if (pass !== passConfirm) {
            setPassStatus({ isValid: false, status: "no_match" });
            return;
        }
    };

    return (
        <form className="mt-5" onSubmit={onSubmitForm}>
            <fieldset>
                <InputItem
                    label="Password"
                    name="password"
                    type="password"
                    forwardedRef={passInputRef}
                />
            </fieldset>
            <fieldset className="mt-4">
                <InputItem
                    label="Confirm password"
                    name="password"
                    type="password"
                    forwardedRef={passConfirmInputRef}
                />
            </fieldset>

            {!passStatus.isValid && <Status message={passStatus.message} />}

            <Button type="submit" text="Check password" />
        </form>
    );
};

export default Form;
