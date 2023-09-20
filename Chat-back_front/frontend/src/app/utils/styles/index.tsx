import styled from 'styled-components'

export const InputField = styled.input`
    background-color: inherit;
    outline: none;
    border: none;
    color : #fff;
    font-family: 'Inter';
    font-size: 18px;
    width: 100%;
    margin : 4px 0;

`;

export const InputContainer = styled.div`
    background-color: #1e1b34;
    padding: 12px 16px;
    border-radius: 10px;
    width: 100%;
    box-sizing: border-box;

`;

export const InputLabel = styled.label`
    display: block;
    color: 	#808080;
    font-size : 14px;
    margin: 4px 0;

`;

export const Button = styled.button`
    width: 100%;
    background-color: #fc7785;
    color: #1e1b3;
    border: none;
    outline: none;
    font-family: 'Inter'
    font-size: 12px;
    border-radius: 10px;
    padding: 10px 0;
    font-weight: 500;
    transition: 250ms background-color ease;
    &:focus{
        background-color: #972f39;
        border: 2px solid #fff;
    }
    &:hover {
        cursor: pointer;
        background-color: #972f39;
        border: 2px solid #fff;
    }
    &:active {
        background-color: #498cda;
    }

`;
export const Page = styled.div`
   
    height: 100%;
    display: flex;
`;

export const Dark = '#131313'