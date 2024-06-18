import styled from 'styled-components'

export const Appbgcontainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`
export const Heading = styled.h1`
    font-family: Roboto;
    font-size: 25px;
    color: #1e293b;
    margin: 0px;
`
export const HookText = styled.p`
    font-family: Roboto;
    font-size: 17px;
    color: #334155;
`
export const ReactHookImg = styled.img`
    width: 100%;
    @media screen and (min-width:768px){
        width: 50%;
    }
`
export const Description = styled.p`
    font-family: Roboto;
    font-size: 17px;
    color: #334155;
    line-height: 1.5;
    @media screen and (min-width:768px){
        width: 50%;
    }
`
export const Button = styled.button`
    border-radius: 5px;
    color: #ffffff;
    font-family: Roboto;
    font-size: 15px;
    border: none;
    outline: none;
    cursor: pointer;
    height: 37px;
    width: 120px;
    background-color: #1f81ff;
`
