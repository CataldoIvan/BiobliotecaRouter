import { Link } from "react-router-dom"

const Book=({item})=>{
    return <>
    <Link to={`/view/${item.id}`}>
    <img src={item.cover} alt={item.title} width='200' />
    <div>{item.title}</div>
    </Link>
    </>
}
export default Book