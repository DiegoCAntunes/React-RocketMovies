import { useState } from "react"
import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { api } from "../../services/api.js"

import { Container, Form, Background } from "./styles"
import { Link, useNavigate } from "react-router-dom"

export function SignUp(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    function handleSignUp(){
        if(!name || !email || !password){
            return alert("Fill all the data!")
        }

        api.post("/users", { name, email, password })
        .then(() => {
            alert("Sign up completed!")
            navigate("/")
        })
        .catch(error => {
            if(error.response){
                alert(error.response.data.message)
            }else{
                alert("Error on sign up")
            }
        })
    }

    return(
        <Container>
            <Background />
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <strong>Criar sua conta</strong>

                <Input 
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    onChange={e => setName(e.target.value)}
                />
                <Input 
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}
                />
                <Input 
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                />

                <Button title="Cadastrar" onClick={handleSignUp}/>

                <Link to='/'> <FiArrowLeft /> Voltar para o login</Link>
            </Form>
        </Container>
        )
}