import { FiArrowLeft } from "react-icons/fi"
import { Link } from "react-router-dom";

import { Container, Form } from "./styles";

import { Header } from "../../components/Header"
import { Input } from "../../components/Input";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";

export function CreateMovie(){
    return(
        <Container>
            <Header />
            <main>
                <Form>
                    <Link to='/'> <FiArrowLeft /> Voltar</Link>
                    <h1>Novo filme</h1>
                    <div>
                        <Input placeholder="Título" />
                        <Input placeholder="Sua nota (de 0 a 5)" />
                    </div>

                    <textarea placeholder="Observações" />

                    <h2>Marcadores</h2>
                    <div className="dark">
                        <NoteItem value="React" />
                        <NoteItem isNew placeholder="Novo marcador" />
                    </div>

                    <div>
                        <Button title="Excluir filme"/>
                        <Button title="Salvar alterações"/>
                    </div>
                </Form>
            </main>

        </Container>
    )
}
