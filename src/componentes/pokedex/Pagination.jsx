import React from 'react'
import './paginacion.css'

const pagination = ({page, maxpage, setpage}) => {

    const pagesperblock = 6
    const currentblock = Math.ceil( page / pagesperblock)          
    const maxblock = Math.ceil( maxpage / pagesperblock)


    const arrpages = []
    const initpages = (currentblock - 1) * pagesperblock + 1
    const finalpage = maxblock ===currentblock ? maxpage : currentblock * pagesperblock
    for(let i = initpages; i <= finalpage; i++) { 
        arrpages.push(i)
    }

    const handlepage = number => { 
         setpage(number)
    }

    const previuos = ()=> { 
        if (page - 1 > 0) {
            setpage(page -1)
            console.log("prev")
        }
        
   }


   const next = () => { 
    if (page + 1 <= 1000) {
        setpage(page +1)
        console.log("next")
    }
   
}
  return (
    <div className='paginas'>
        <ul className='list'> <li className='bot' onClick={previuos}>&#60;</li>
            {
                arrpages.map(e => (
                    <li className={`pag ${page === e && 'page_active'}`} onClick={() => handlepage(e)} key={e} >{e}</li>
                ))
            }
            <li className='bot' onClick={next}>&#62;</li>
        </ul>
    </div>
  )
}

export default pagination