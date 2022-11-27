import "../css/App.css"

function Responseuser(
   {
      user,
      imagem,
      location,
      bio,
      repo,
      followers,
      following,
      html_url
   }){
    return(
     <div className="container" >
		     <div className="item" >
			      <div className="img">
				    <img src={imagem} width="100px"/>
			      </div>
			     <div className="dados">
			     <span>
			       Nome: <i> {user}</i>
			     </span>
			     <span>
			       Bio: <i> {bio}</i>
			     </span>
			     <span>
			       Followers: <i> {followers}</i>
			     </span>
			     <span>
			       Following : <i> {following}</i>
			     </span>
			     <span>
			       Repo: <i> {repo}</i>
			     </span>
		  	</div>
			  <div className="visitar">
				 <a href={html_url} target="_black">visitar</a>
			  </div>
		  </div>
	  </div>
  )
}

export default Responseuser
