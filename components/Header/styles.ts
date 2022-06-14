import styled from "styled-components";

export const NavBar = styled.div<{ blackHeader: boolean }>`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0px 30px;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    background-color: ${(props) =>
        props.blackHeader ? "#141414" : "transparent"};
`;

export const NetflixLogo = styled.img`
    height: 30px;
`;

export const ProfilePicture = styled.img`
    height: 30px;
`;
