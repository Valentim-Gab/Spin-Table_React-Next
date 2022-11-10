import styled from "styled-components"

export const DivContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Table360s = styled.table`
    font-size: 40px;
    animation: spin 2s infinite linear;
    animation-play-state: running;
    border-collapse: separate;
    border-spacing: 30px 0px;
    border: 2px solid white;
    padding: 50px;
    margin: 150px;

    &.parado {
        animation-play-state: paused;
    }

    @keyframes spin {
        from {
            rotate: 0deg;
        }

        to {
            rotate: 360deg;
        }
    }
`

export const Btn360s = styled.button`
    width: 200px;
    height: 50px;
    color: azure;
    background-color: blueviolet;
    font-weight: 600;
    font-size: 25px;
    letter-spacing: 3px;
    border-radius: 10px;

    border-color: #f1c40f;
    background-image: -webkit-linear-gradient(45deg, #f1c40f 50%, transparent 50%);
    background-image: linear-gradient(45deg, #f1c40f 50%, transparent 50%);
    background-position: 100%;
    background-size: 400%;
    -webkit-transition: background 300ms ease-in-out;
    transition: background 300ms ease-in-out;
    
    &:hover {
        background-position: 0;
        color: black;
    }
`

export const PopupS = styled.div<{aberto: boolean}>`
    display: flex;
    text-align: center;
    width: 500px;
    height: 500px;
    border-radius: 20px;
    background-color: #008cff;
    display: ${({aberto}) => aberto ? 'block' : 'none'};
    position: absolute;
    inset: 0;
    width: -webkit-fill-available;
    height: -webkit-fill-available;
    margin: 5rem;
    padding: 20px;
    font-size: 40px;
    
    > span {
        display: flex;
        justify-content: right;
        line-height: 14px;
    }

    input {
        text-align: center;
        height: 45px;
        width: 50%;
        border-radius: 10px;
        margin-bottom: 80px;
        background-color: #e0e0e0;
        border: none;
        padding: 0px 20px;
        color: black;
        font-size: 30px;
    }
`