import Link from "next/link"




const Cards = ({user}) => {
    console.log(user)
  return (
    <Link href={`users/${user.id}`}>
        <div className="container">
        <img src ={`https://robohash.org/${user.id}`} alt="robot-pic" style={{width: "150px", height: "150px"}} />
        <p className="name">{user.name}</p>
        <p className="email">{user.email}</p>
        <p className="email">{user.phone}</p>
        </div>
    </Link>
  )
}

export default Cards