import Link from "next/link"
import { PropsWithChildren } from "react"
import styled from "styled-components";

interface Props extends PropsWithChildren{
    href: string;
}

const StyledA = styled.a `
    display: flex;
    font-weight: bold;
    background-color: transparent;
    color: white;
    padding: 8px 12px;
    border-radius: 10px;
    border: 1px solid white;
    transition: background-color 0.2s linear;
    

    &:hover {
        background-color: #1744da;
        &::after {
            content: ' // CLIQUE';
        }
    }

`

const LinkButton: React.FC<Props> = ({ href, children }) => {
    return <Link href={href} passHref>
        <StyledA>{children}</StyledA>
    </Link>
}

export default LinkButton

