
import formatISO9075 from 'date-fns/formatISO9075'
import { id } from 'date-fns/locale';
import { Link } from 'react-router-dom';
export default function Post({_id,title, summary, cover, content, createdAt, author}){
    return(
        <div className="post">
        <div className="image"> 
        <Link to={`/post/${_id}`}>
        <img src={'https://note-app-back-end-idcq.onrender.com/'+cover} alt="" />
        </Link>
       
       </div>
       <div className="texts">
       <Link to={`/post/${_id}`}>
         <h2>{title}</h2>
         </Link>
         <p className="info">
           <a href="" className="auther">{author.username}</a>
           <time>{formatISO9075(new Date(createdAt)) }</time>
           {/* <time>{createdAt} </time> */}
         </p>
         <p className="summary">{summary}</p>
       </div>
     </div> 
    );
}