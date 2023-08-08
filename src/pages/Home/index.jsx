import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { api } from '../../services/api'

import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Container, TextHead, Content } from './styles'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Note } from '../../components/Note'

export function Home(){
    const [tags, setTags] = useState([])
    const [tagsSelected, setTagsSelected] = useState([])
    const [search, setSearch] = useState("")
    const [notes, setNotes] = useState([])
    const navigate = useNavigate()

    function handleTagSelected(tagName){
        if(tagName === "all"){
            return setTagsSelected([])
        }

        const alreadySelected = tagsSelected.includes(tagName)

        if(alreadySelected){
            const filteredTags = tagsSelected.filter( tag => tag !== tagName)
            setTagsSelected(filteredTags)
        
        } else {
            setTagsSelected(prevState => [...prevState, tagName])
        }
    }

    function handleDetails(id){
        navigate(`/preview/${id}`)
    }

    useEffect(() => {
        async function fetchTags(){
            const response = await api.get("/tags")
            setTags(response.data)
        }

        fetchTags()
    }, [])

    useEffect(() => {
        async function fetchNotes(){
            const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`)
            setNotes(response.data)
        }

        fetchNotes()
    }, [tagsSelected, search])

    return(
        <Container>
            <Header onChange={e => setSearch(e.target.value)} />
            <TextHead>
                <h1>Meus filmes</h1>
                <Link to='/new'><Button icon={FiPlus} title="Adicionar filme"  /></Link>
            </TextHead>
            <Content>
                {
                   notes.map(note => (
                    <Note 
                        key={String(note.id)}
                        data={note}
                        onClick={() => handleDetails(note.id)}
                    />
                   )) 
                }

            </Content>
        </Container>
    )
}