import { Container, Profile, Title, SignOut } from "./styles";
import {useAuth} from "../../hooks/auth"
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import avatarPlaceHolder from '../../assets/avatar_placeholder.svg'

import { SearchBar } from "../searchBar";

export function Header({onChange,...rest}){
    const { signOut, user } = useAuth()
    const navigation = useNavigate()

    function handleSignOut(){
        navigation("/")
        signOut()
    }

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder

    return( 
        <Container>
            <Title to='/'>
                RocketMovies
            </Title>
            <SearchBar placeholder="Pesquisar pelo título" onChange={onChange} />

            <div className="temp">
                <div className="title">
                        <strong>{user.name}</strong>
                        <SignOut onClick={handleSignOut}>sair</SignOut>
                </div>
                <Profile to='/profile'>
                    <img src={avatarUrl} alt={user.name} />
                </Profile>
            </div>

        </Container>
    )
}