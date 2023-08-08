import { Container } from "./styles";
import { Tag } from '../Tag'
import { FiStar} from "react-icons/fi"
import { FaStar } from "react-icons/fa"


export function Note({data, ...rest}){
    const rating = []
    for(let i = 0; i<data.rating; i++){
        rating.push(<FaStar key={i+1} />)
    }
    for(let i = 0; i<5-data.rating; i++){
        rating.push(<FiStar key={data.rating + i +1} />)
    }

    return(
        <Container {...rest}>
            <h1>{data.title}</h1>
            <div>{rating}</div>
            <p>{data.description}</p>

            {
                data.tags &&
                <footer>
                    {
                        data.tags.map( tag => <Tag key={tag.id} title={tag.name} />
                        )
                    }
                </footer>
            }
        </Container>
    )
}