import { Container } from "./styles";

export function SearchBar({...rest}){
    return(
        <Container>
            <input {...rest} />
        </Container>
    )
}