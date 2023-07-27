const getData = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();
  return data;
};

export default async function Home({ params }) {
  const id = params.id;
  const dataUser = await getData(id);
  console.log(id);

  return (
    <div className="cards">
      <div className="bordaUser">
        <img
          className="perfil"
          src={`https://robohash.org/${dataUser.id}`}
          alt="robot-pic"
          style={{ width: "300px", height: "300px" }}
        />
        <p className="name">Nome: {dataUser.name}</p>
        <p className="email">E-mail:{dataUser.email}</p>
        <p className="email">Phone:{dataUser.phone}</p>
        <p className="email">Endereço:{dataUser.address.street},{dataUser.address.city}</p>
        <p className="email"></p>
      </div>
    </div>
  );
}
