import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { useAppContext } from "../store/Store"
export default function View(e){
    const params=useParams()
    const store=useAppContext()
    const [item,setItem]=useState(null)

    useEffect(()=>{
        const book=store.items.find(b=>b.id===params.bookId)
        setItem(book)
    },[])

    if(!item){
        return <div>No se encontro nada <br/><Link to={`/`}>Volver al Home</Link></div>
    }
    return <>
    
    <img src={item.cover} alt={item.title} width='200' />
    <div>Titulo de la obra: {item.title}</div>
    <div>Autor : {item.author}</div>
    <div>Intoduccion: {item.intro}</div>
    <div>Una pequena review: {item.review}</div>
    <div>Fue completado?{item.completed?"si fue terminado":"no, aun no :( en proceso"}</div>
    
    <br/><Link to={`/`}>Volver al Home</Link>
    </>

}