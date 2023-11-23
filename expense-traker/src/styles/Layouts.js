import styled from "styled-components";



export const MainLayout = styled.div`
    padding: 2rem;
    height: 100%;
    display: flex;
    gap: 2rem;

    @media only screen and (max-width:500px) and (min-width:310px){
        padding: 0.5rem;
        height: auto;
        display: flex;
        flex-direction:column;
        gap: 1rem;
        overflow-y:auto;
    }

`;

export const InnerLayout = styled.div`
    padding: 2rem 2rem;
    width: 100%;
    height:100%;

@media only screen and (max-width:1024px) and (min-width:750px){
    padding: 1rem 1rem;
    width: auto;

}
@media only screen and (max-width:500px) and (min-width:310px){
    padding: 0.5rem 0.5rem 1rem 0.5rem;
    width: 100%;
    height:auto;
    overflow-y:auto;

}
`;