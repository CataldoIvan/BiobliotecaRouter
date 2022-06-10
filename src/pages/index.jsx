import { Link } from "react-router-dom"
import { useAppContext } from "../store/Store"
import Book from './Book'

export default function Index (){
    const store=useAppContext()
return (
    <>
    <Link to='create'>Crear</Link>
    
    {store.items.map(book=><Book key={book.id} item={book}/>)}
    </>
)
}