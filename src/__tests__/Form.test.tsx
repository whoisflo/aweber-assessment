import { render, screen, fireEvent } from "@testing-library/react";
import Form from "../components/form/Form";

type EventEl = { el: HTMLInputElement; val: string };
const fireEvents = (el1: EventEl, el2: EventEl) => {
    const button = screen.getByText("Check password");
    fireEvent.change(el1.el, { target: { value: el1.val } });
    fireEvent.change(el2.el, { target: { value: el2.val } });
    fireEvent.click(button, {});
};

describe("Form", () => {
    beforeEach(() => {
        render(<Form />);
    });

    it("renders form", () => {
        const password = screen.getByLabelText("Password");
        const passwordConfirm = screen.getByLabelText("Confirm password");
        const button = screen.getByText("Check password");

        expect(password).toBeInTheDocument();
        expect(passwordConfirm).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    });

    it("passwords are equal", () => {
        const password: HTMLInputElement = screen.getByLabelText("Password");
        const passwordConfirm: HTMLInputElement =
            screen.getByLabelText("Confirm password");

        fireEvents(
            { el: password, val: "test1234" },
            { el: passwordConfirm, val: "test1234" }
        );

        expect(
            screen.queryByText("Passwords do not match")
        ).not.toBeInTheDocument();
    });

    it("passwords are not equal", () => {
        const password: HTMLInputElement = screen.getByLabelText("Password");
        const passwordConfirm: HTMLInputElement =
            screen.getByLabelText("Confirm password");

        fireEvents(
            { el: password, val: "test1234" },
            { el: passwordConfirm, val: "test123" }
        );

        expect(
            screen.queryByText("Passwords do not match")
        ).toBeInTheDocument();
    });

    it("password has min length", () => {
        const password: HTMLInputElement = screen.getByLabelText("Password");
        const passwordConfirm: HTMLInputElement =
            screen.getByLabelText("Confirm password");

        fireEvents(
            { el: password, val: "test" },
            { el: passwordConfirm, val: "test" }
        );

        expect(
            screen
                .queryByText("has a min length of 6 characters")
                ?.classList.contains("text-red-500")
        ).toBe(true);

        fireEvents(
            { el: password, val: "test12" },
            { el: passwordConfirm, val: "test12" }
        );

        expect(
            screen
                .queryByText("has a min length of 6 characters")
                ?.classList.contains("text-gray-500")
        ).toBe(true);
    });

    it("password has uppercase", () => {
        const password: HTMLInputElement = screen.getByLabelText("Password");
        const passwordConfirm: HTMLInputElement =
            screen.getByLabelText("Confirm password");

        fireEvents(
            { el: password, val: "test" },
            { el: passwordConfirm, val: "test" }
        );

        expect(
            screen
                .queryByText("has at least 1 uppercase character")
                ?.classList.contains("text-red-500")
        ).toBe(true);

        fireEvents(
            { el: password, val: "testTest" },
            { el: passwordConfirm, val: "testTest" }
        );

        expect(
            screen
                .queryByText("has at least 1 uppercase character")
                ?.classList.contains("text-gray-500")
        ).toBe(true);
    });

    it("password has lowercase", () => {
        const password: HTMLInputElement = screen.getByLabelText("Password");
        const passwordConfirm: HTMLInputElement =
            screen.getByLabelText("Confirm password");

        fireEvents(
            { el: password, val: "TEST" },
            { el: passwordConfirm, val: "TEST" }
        );

        expect(
            screen
                .queryByText("has at least 1 lowercase character")
                ?.classList.contains("text-red-500")
        ).toBe(true);

        fireEvents(
            { el: password, val: "test" },
            { el: passwordConfirm, val: "test" }
        );

        expect(
            screen
                .queryByText("has at least 1 lowercase character")
                ?.classList.contains("text-gray-500")
        ).toBe(true);
    });

    it("password has lowercase", () => {
        const password: HTMLInputElement = screen.getByLabelText("Password");
        const passwordConfirm: HTMLInputElement =
            screen.getByLabelText("Confirm password");

        fireEvents(
            { el: password, val: "TEST" },
            { el: passwordConfirm, val: "TEST" }
        );

        expect(
            screen
                .queryByText("has at least 1 lowercase character")
                ?.classList.contains("text-red-500")
        ).toBe(true);

        fireEvents(
            { el: password, val: "test" },
            { el: passwordConfirm, val: "test" }
        );

        expect(
            screen
                .queryByText("has at least 1 lowercase character")
                ?.classList.contains("text-gray-500")
        ).toBe(true);
    });

    it("password has number", () => {
        const password: HTMLInputElement = screen.getByLabelText("Password");
        const passwordConfirm: HTMLInputElement =
            screen.getByLabelText("Confirm password");

        fireEvents(
            { el: password, val: "Test" },
            { el: passwordConfirm, val: "Test" }
        );

        expect(
            screen
                .queryByText("has at least 1 number")
                ?.classList.contains("text-red-500")
        ).toBe(true);

        fireEvents(
            { el: password, val: "Test12" },
            { el: passwordConfirm, val: "Test12" }
        );

        expect(
            screen
                .queryByText("has at least 1 number")
                ?.classList.contains("text-gray-500")
        ).toBe(true);
    });

    it("password has special Character", () => {
        const password: HTMLInputElement = screen.getByLabelText("Password");
        const passwordConfirm: HTMLInputElement =
            screen.getByLabelText("Confirm password");

        fireEvents(
            { el: password, val: "Test" },
            { el: passwordConfirm, val: "Test" }
        );

        expect(
            screen
                .queryByText(
                    `has at least 1 special character (!@#$%^&*()_-+={[}]|:;"'<,>.)`
                )
                ?.classList.contains("text-red-500")
        ).toBe(true);

        fireEvents(
            { el: password, val: "Test12!" },
            { el: passwordConfirm, val: "Test12!" }
        );

        expect(
            screen
                .queryByText(
                    `has at least 1 special character (!@#$%^&*()_-+={[}]|:;"'<,>.)`
                )
                ?.classList.contains("text-gray-500")
        ).toBe(true);
    });
});
