import * as C from "./styles";

type Props = {
    blackHeader: boolean;
};

export const Header = ({ blackHeader }: Props) => {
    return (
        <C.NavBar blackHeader={blackHeader}>
            <C.NetflixLogo src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" />
            <C.ProfilePicture src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/64623a33850498.56ba69ac2a6f7.png" />
        </C.NavBar>
    );
};
