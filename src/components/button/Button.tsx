import { ButtonContainer } from "./styles"
import { IButton } from "./types"


const Button = ({ value, type, onClick, disabled }:IButton) => {

    return (
        <ButtonContainer type={type} onClick={onClick} disabled={!disabled}>
            {value}
        </ButtonContainer>

    )
}

export default Button