import { useLoaderData } from "react-router-dom";
import Client from "../components/Client";
import { v4 as uuidv4 } from 'uuid';
import { getClients } from "../data/clients";
export function loader() {
  const clients = getClients()

  return clients
}



function Index() {
  
  const clients = useLoaderData(); 
  console.log(clients)
  return (
    <>
    <h1 className="font-black text-4xl text-white">Clients</h1>
    <p className="mt-3 text-white">Manage your clients</p>
    {clients.length? (
      <table className="w-full  shadow mt-5 table-auto">
        <thead className="bg-zinc-900 text-white">
          <tr>
            <th className="p-2">Client</th>
            <th className="p-2">Contact</th>
            <th className="p-2">Actions</th>
          </tr>
          </thead>
          <tbody>
            {clients.map((client)=> (
             <Client  key={uuidv4()} client={client}/>
            ))}
          </tbody>
      </table>
    ) : (
      <p className="text-center mt-10">There is not clients yet</p>
    )
  }
    </>
  )
}

export default Index