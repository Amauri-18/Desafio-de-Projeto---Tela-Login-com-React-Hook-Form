import styled from "styled-components"

export const InputContainer = styled.div`    
    margin-bottom: 10px;
    height: 28px;
    width: 85%;
    outline: none;
    border-radius: 14px;
    border: 1px solid #2F0549; 

    input {
        width: 100%;
        height: 28px;
        border: none;
        outline: none;
        padding-left: 10px
    }

    input::placeholder{
        font-size: 12px;
    }
`
export const Message = styled.div`
    
    width: 85%;
    text-align: left;
    // border: 1px solid red;

    p {
        color: red;
        font-size: 10px;
        text-transform: capitalize; 
        margin: 0 0 10px;
        padding-left: 10px;
    }
`


        
 
