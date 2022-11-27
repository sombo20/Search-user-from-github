import { useState,useEffect} from 'react'
import InputUser from './Components/InputUser'
import Responseuser from './Components/ResponseUser'

function App() {
    
    const [item,setItem] = useState({})
    const [view,setView] = useState(false)
  async  function pesquisar(name){
      try{
        const url = "https://api.github.com/users/"+name
        
        //alert("A processar...")
        const resposta = await fetch(url);
        
        const data = await resposta.json();
        setItem({
            name:data.name,
            img:data.avatar_url,
            location:data.location,
            bio:data.bio,
            repo:data.public_repos,
            followers:data.followers,
            following:data.following,
            html_url:data.html_url
        })
        
        setView(true);
        //alert(`${view}`)
        //alert(`${item}`)
        //alert(data.login)
      }catch(error){
          alert(error)
      }
    }
    
   return(
       <>
       <InputUser
        search={pesquisar}
       />
       
       {view &&
      <Responseuser
       user={item.name}
       imagem={item.img}
       location={item.location}
       bio={item.bio}
       repo={item.repo}
       followers={item.followers}
       following={item.following}
       html_url={item.html_url}
       />
       }
      </>
    );
}

export default App
