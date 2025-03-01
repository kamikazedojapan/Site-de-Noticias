import PropTypes from "prop-types";
import { InputSpace } from "./InputStyled";

export function Input({ type, placeholder, register, name }) {
    return (
        <InputSpace type={type} placeholder={placeholder} {...register(name)}/>
    );
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    register: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

