import { useRef, useState } from "react";

import Button from "../ui/Buttons";
import Status from "../ui/Status";
import InputItem from "./InputItem";

import { passChecksData } from "../../data/passChecks";

const Form = () => {
    const [passChecks, setPassChecks] = useState(passChecksData);
    const [passMatch, setPassMatch] = useState(true);

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
        if (pass !== passConfirm) {
            setPassMatch(false);
            return;
        } else setPassMatch(true);

        const updatedPassChecks = [...passChecks];
        updatedPassChecks.forEach((item) => {
            if (!new RegExp(item.regex).test(pass)) item.isValid = false;
            else item.isValid = true;
        });

        const isValidationLeft = updatedPassChecks.filter(
            (item) => !item.isValid
        );

        if (isValidationLeft.length > 0) {
            setPassChecks(updatedPassChecks);
        } else {
            setPassChecks(updatedPassChecks);
            alert("success!");
        }
    };

    return (
        <form className="mt-5" onSubmit={onSubmitForm}>
            <fieldset>
                <InputItem
                    label="Password"
                    name="pass"
                    type="password"
                    forwardedRef={passInputRef}
                />
            </fieldset>
            <fieldset className="mt-4">
                <InputItem
                    label="Confirm password"
                    name="passConfirm"
                    type="password"
                    forwardedRef={passConfirmInputRef}
                />
            </fieldset>
            <Status passMatch={passMatch} passChecks={passChecks} />
            <Button type="submit" text="Check password" />
        </form>
    );
};

export default Form;
