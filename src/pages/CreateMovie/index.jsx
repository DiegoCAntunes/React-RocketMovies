import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import { FiArrowLeft } from "react-icons/fi"
import { Link } from "react-router-dom";

import { Container, Form } from "./styles";

import { Header } from "../../components/Header"
import { Input } from "../../components/Input";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";

export function CreateMovie(){
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [rating, setRating] = useState("")

    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState("")

    const navigate = useNavigate()

    function handleAddTag(){
        setTags(prevState => [...prevState, newTag])
        setNewTag("")
    }

    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }

    async function handleNewNote(){
        if(!title){
            return alert("Enter a title")
        }

        if(!description){
            return alert("Enter a description")
        }

        if(isNaN(rating)){
            return alert("Rating must be a number")
        }

        if(newTag){
            return alert("You left a tag in the add field but did not press the + button")
        }

        await api.post("/notes", {
            title,
            description,
            rating,
            tags
        })

        alert("Note was sucessfully created!")
        navigate(-1)
    }

    return(
        <Container>
            <Header />
            <main>
                <Form>
                    <Link to='/'> <FiArrowLeft /> Voltar</Link>
                    <h1>Novo filme</h1>
                    <div>
                        <Input 
                            placeholder="Título"
                            onChange={e => setTitle(e.target.value)}    
                        />
                        <Input 
                            placeholder="Sua nota (de 0 a 5)"
                            onChange={e => setRating(e.target.value)} 
                        />
                    </div>

                    <textarea 
                        placeholder="Observações"
                        onChange={e => setDescription(e.target.value)} 
                    />

                    <h2>Marcadores</h2>
                    <div className="dark">
                        {
                            tags.map((tag, index) => (
                                <NoteItem
                                    key={String(index)}
                                    value={tag}
                                    onClick={() => {handleRemoveTag(tag)}}
                                />
                            ))
                        }
                        <NoteItem 
                            isNew 
                            placeholder="Novo marcador"
                            onChange={e => setNewTag(e.target.value)}
                            value={newTag}
                            onClick={handleAddTag} 
                        />
                    </div>

                    <div>
                        <Button 
                            title="Salvar alterações"
                            onClick={handleNewNote}
                        />
                    </div>
                </Form>
            </main>

        </Container>
    )
}
