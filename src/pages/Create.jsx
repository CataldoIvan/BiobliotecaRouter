import { useState } from "react"

export default function Create(){

    const [title,setTitle]=useState('')
    const [author,setAuthor]=useState('')
    const [cover,setCover]=useState('')
    const [intro,setIntro]=useState('')
    const [completed,setcompleted]=useState(false)
    const [review,setreview]=useState('')

    function handlechange(e){
        console.log(e.target);
        const name=e.target.name;
        const value=e.target.value;
        switch(name){
            case 'title':setTitle(value);
            console.log(value);
                break;
            case 'author':setAuthor(value);
                break;
            case 'intro':setIntro(value);
                break;
            case 'completed':setcompleted(true);
                break;
            case 'review':setreview(value);
                break;
            /* case 'title':setTitle(name)
                break;
             */
            
            default: console.log(e);

        }

    }

    const handlechangeFile=(e)=>{
        const element=e.target
        console.log(element.files[0]);
        const file=element.files[0]
        const reader=new FileReader()

        reader.readAsDataURL(file)

        reader.onloadend=function(){
        console.log(reader.result.toString());

            setCover(reader.result.toString())
        }

    }
    const handleSubmit=(e)=>{
        e.preventDefault()

        const newBook={
            id:crypto.randomUUID(),
            title,
            author,
            intro,
            review,
            completed,
            cover

        }

    }
    return <>
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="title">Titulo</label>
            <input type="text" name="title" value={title?title:""} onChange={handlechange} />
        </div>
        <div>
            <label htmlFor="author">Autor</label>
            <input type="text" name="author" value={author} onChange={handlechange} />
        </div>
        <div>
           
            <input type="file" name="cover"  onChange={handlechangeFile} />
            <div>
                {!!cover?< img src={cover} alt="asd" />:""}
            </div>
        </div>

        <div>
            <label htmlFor="completed">Completado</label>
            <input type="checkbox" name="completed" value={completed} onChange={handlechange} />
        </div>
        <div>
            <label htmlFor="intro">intro</label>
            <input type="text" name="intro" value={intro} onChange={handlechange} />
        </div>
        <div>
            <label htmlFor="review">review</label>
            <input type="text" name="review" value={review} onChange={handlechange} />
        </div>
        <div>
            <input type="submit" value={'enviar'} />
        </div>
       
        
    </form>
    </>
}