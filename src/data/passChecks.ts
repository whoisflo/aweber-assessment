import { PassCheck } from "../types/passCheck";

export const passChecksData: PassCheck[] = [
    {
        text: "has a min length of 6 characters",
        isValid: true,
        regex: "^.{6,}$",
        status: "length",
    },
    {
        text: "has at least 1 uppercase character",
        isValid: true,
        regex: "[A-Z]",
        status: "uppercase",
    },
    {
        text: "has at least 1 lowercase character",
        isValid: true,
        regex: "[a-z]",
        status: "lowercase",
    },
    {
        text: "has at least 1 number",
        isValid: true,
        regex: "\\d",
        status: "number",
    },
    {
        text: `has at least 1 special character (!@#$%^&*()_-+={[}]|:;"'<,>.)`,
        isValid: true,
        regex: "[!@#$%^&*()_+\\-=\\[\\]{};':\"\\|,.<>]+",
        status: "special",
    },
];
