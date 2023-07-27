import Cards from "../../components/Cards";

const getData = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();
  return data
};


export default async function Home() {
  const dataUser = await getData();
  console.log(dataUser)

  return (
    <div className="cards">
      {dataUser.map((el, i)=> <Cards key={i} user={el} />)}
    </div>
  )
}
