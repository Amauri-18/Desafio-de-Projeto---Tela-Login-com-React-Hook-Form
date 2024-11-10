import { useForm } from "react-hook-form";

import { LoginContainer, Row } from "./styles";
import Input from "../components/Input/Input";
import Button from "../components/button/Button";

import { defaultValues, IFormLogin } from "./type";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"; 

const LoginNew = () => {

    const schema = yup.object({
        email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
        password: yup.string().min(6, "No mínimo 6 caracteres").required()        
    })

    const { control, formState: {errors, isValid} } = useForm<IFormLogin>({
        resolver: yupResolver(schema),
        mode: "onBlur",
        defaultValues: defaultValues,
        reValidateMode: "onChange"
    });

    const handleSubmit = (event) => {

        event.preventDefault()
        alert("Form is valid? " + isValid)
    }   
    
    return (
        <LoginContainer>    
            <Row>
                <h1>Login</h1>
            </Row>
            <Input 
                name="email" 
                type="email" 
                placeholder="Digite seu e-mail" 
                control={control} 
                errorMessage={errors?.email?.message}
            />
      
            <Input
                name="password" 
                type="password" 
                placeholder="Digite sua senha" 
                control={control} 
                errorMessage={errors?.password?.message} 
            />
  
            <Button value="Entrar" type="submit" onClick={handleSubmit} disabled={isValid} />
        </LoginContainer>
    )
}

export default LoginNew