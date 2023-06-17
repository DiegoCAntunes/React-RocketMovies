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
                    text: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As "missões Lázaro" enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave espacial Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade irá seguir para ele na instalação da NASA, que é na realidade uma enorme estação espacial. A partida de Cooper devasta Murphy. Além de Cooper, a tripulação da Endurance é formada pela bióloga Amelia, filha de Brand; o cientista Romilly, o físico planetário Doyle, além dos robôs TARS e CASE. Eles entram no buraco de minhoca e se dirigem a Miller, porém descobrem que o planeta possui enorme dilatação gravitacional temporal por estar tão perto de Gargântua: cada hora na superfície equivale a sete anos na Terra. Eles entram em Miller e descobrem que é inóspito já que é coberto por um oceano raso e agitado por ondas enormes. Uma onda atinge a tripulação enquanto Amelia tenta recuperar os dados de Miller, matando Doyle e atrasando a partida. Ao voltarem para a Endurance, Cooper e Amelia descobrem que 23 anos se passaram.',
                    tags: [
                        {id:'1', name: 'Ficção Científica'},
                        {id:'2', name: 'Drama'},
                        {id:'3', name: 'Família'},
                    ]
                }}
                />
                </Link>

                <Note data={{
                    title:"Toy Story",
                    text: 'O aniversário de Andy está chegando e os brinquedos estão nervosos. Afinal de contas, eles temem que um novo brinquedo possa substituí-los. Liderados por Woody, um caubói que é também o brinquedo predileto de Andy, eles montam uma escuta que lhes permite saber dos presentes ganhos. Entre eles está Buzz Lightyear, o boneco de um patrulheiro espacial, que logo passa a receber mais atenção do garoto. Isto aos poucos gera ciúmes em Woody, que tenta fazer com que ele caia atrás da cama. Só que o plano dá errado e Buzz cai pela janela. É o início da aventura de Woody, que precisa resgatar Buzz também para limpar sua barra com os outros brinquedos.',
                    tags: [
                        {id:'1', name: 'Animação'},
                        {id:'2', name: 'Comedia'},
                        {id:'3', name: 'Família'},
                    ]
                }}
                />
                <Note data={{
                    title:"Nemo",
                    text: 'O passado reserva tristes memórias para Marlin nos recifes de coral, onde perdeu sua esposa e toda a ninhada. Agora, ele cria seu único filho Nemo com todo o cuidado do mundo, mas o pequeno e simpático peixe-palhaço acaba exagerando durante uma simples discussão e acaba sendo capturado por um mergulhador. Agora, o pai super protetor precisa entrar em ação e parte numa busca incansável pelo mar aberto, na esperança de encontrar seu amado filhote. No meio do caminho, ele acaba conhecendo Dory e, juntos, a dupla vai viver uma incrível aventura. Enquanto isso, Nemo também vive uma intensa experiência ao lado de seus novos amigos habitantes de um aquário, pois eles precisam ajudá-lo a escapar do destino que lhe foi reservado: ir parar nas mãos da terrível Darla, sobrinha do dentista que o capturou.',
                    tags: [
                        {id:'1', name: 'Animação'},
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