import { useNavigate, Form, redirect, } from "react-router-dom"
import { deleteClients } from "../data/clients"
export async function action ({params}) {
    deleteClients(params.clientId)
    return redirect('/')
}

function Client({client}) {
    const navigate = useNavigate()
    const {name, phone, email, company, id} = client
  return (
    <tr className='border-b'>
        <td  className="p-6 space-y-2 flex flex-col justify-center items-center">
            <p className='text 2xl text-white'>{name}</p>
            <p className='text 2xl text-white'>{company}</p>
        </td>

        <td className='p-6 text-center'>
            <p className='text 2xl text-white'>Email: {email}</p>
            <p className='text 2xl text-white'>Phone: {phone}</p>
        </td>

        <td className='p-6 flex  justify-center items-center'>
        <button 
          type='button'
          className='text-white bg-slate-900 p-3 rounded-full hover:brightness-150'
          onClick={() => navigate(`/clients/${id}/edit`)}
          >
            Edit
          </button>
          <Form 
          method="post"
          action={`/clients/${id}/destroy`}
          onSubmit={(e) => {
            if(!confirm('Do you want to delet this client?')) {
              e.preventDefault()
            }
          }}
          >
          <button 
          type='submit'
          className='text-white bg-slate-900 p-3 rounded-full hover:brightness-150'
          >
            Delete
          </button>
          </Form>
        
        </td>
  </tr>
  )
}

export default Client