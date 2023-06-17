import { Container, Profile, Title } from "./styles";

import { SearchBar } from "../searchBar";

export function Header(){
    return(
        <Container>
            <Title to='/'>
                RocketMovies
            </Title>
            <SearchBar placeholder="Pesquisar pelo título" />

            <Profile to='/profile'>
                <div>
                    <strong>Diego Antunes</strong>
                    <span>sair</span>
                </div>
                <img src="https://github.com/itsDigs.png" alt="imagem do usuario" />
            </Profile>
        </Container>
    )
}