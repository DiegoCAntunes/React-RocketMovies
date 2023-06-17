import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Container, TextHead, Content } from './styles'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Note } from '../../components/Note'

export function Home(){
    return(
        <Container>
            <Header />
            <TextHead>
                <h1>Meus filmes</h1>
                <Link to='/new'><Button icon={FiPlus} title="Adicionar filme"  /></Link>
            </TextHead>
            <Content>
                <Link to='/preview'>
                <Note data={{
                    title:"Interestellar",
                    tags: [
                        {id:'1', name: 'Ficção Científica'},
                        {id:'2', name: 'Drama'},
                        {id:'3', name: 'Família'},
                    ]
                }}
                />
                </Link>

                <Note data={{
                    title:"Interestellar",
                    tags: [
                        {id:'1', name: 'Ficção Científica'},
                        {id:'2', name: 'Drama'},
                        {id:'3', name: 'Família'},
                    ]
                }}
                />
                <Note data={{
                    title:"Interestellar",
                    tags: [
                        {id:'1', name: 'Ficção Científica'},
                        {id:'2', name: 'Drama'},
                        {id:'3', name: 'Família'},
                    ]
                }}
                />
                <Note data={{
                    title:"Interestellar",
                    tags: [
                        {id:'1', name: 'Ficção Científica'},
                        {id:'2', name: 'Drama'},
                        {id:'3', name: 'Família'},
                    ]
                }}
                />

            </Content>
        </Container>
    )
}