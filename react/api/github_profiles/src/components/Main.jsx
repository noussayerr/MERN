import React from 'react'

function Main(prop) {
    const {data,repo}=prop
  return(<main >
    <div className='card'>
      <div>
          <img src={data.avatar_url} className="avatar"/>
      </div>
      <div className="user-info">
        <h2>{data.login}</h2>
  {data.bio}
  <ul>
    <li>Followers :<strong>{data.followers}  </strong></li>
    <li>Following :<strong>{data.following} </strong></li>
    <li>Repos :<strong>{data.public_repos} </strong></li>
  </ul>
  <div >
      {repo.map((r)=> {
        return(
          <div className='repo'>
              <a href={r.html_url}><p>{r.name}</p></a>
          </div>)
        }) }
  </div>
</div>
    </div>
  </main>)
}
export default Main;
