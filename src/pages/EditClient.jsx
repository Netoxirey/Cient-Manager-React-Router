import { Form, useNavigate, useLoaderData, useActionData, redirect } from "react-router-dom"
import FormClient from "../components/FormClient"
import { getClient, updateClients } from "../data/clients"
import Error from "../components/Error"

export async function loader({params}){
  const client = await getClient(params.clientId)
  if(Object.values(client).length ===0){
    throw new Response('',{
      status: 404,
      statusText: 'No results'
    })
  }
  return client
}

export async function action({request, params}) {
  const formData = await request.formData()

  const data = Object.fromEntries(formData)

  const email = formData.get("email")

// validation
  const errors = [];
  if(Object.values(data).includes("")) {
  errors.push('All fields are mandatory.')
  }

  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    if(!regex.test(email)) {
        errors.push('El Email no es válido')
    }

  if(Object.keys(errors).length) {
    return errors
  }
  await updateClients(params.clientId, data)
  return  redirect("/")
  }


function EditClient() {
  const navigate = useNavigate()
  const client = useLoaderData()
  const errors = useActionData()
  return (
    <>
    <h1 className="font-black text-4xl text-white">Edit Client</h1>
    <p className="mt-3 text-white">Fill in all the fields.</p>
    <div className="flex justify-end">
      <button
      className="bg-slate-900 text-white rounded-lg p-3 hover:brightness-150 ease-linear"
      onClick={() => navigate("/")}
      >
        Return
      </button>
    </div>
    {errors?.length && errors.map((error, i) => <Error key={i}>{error}</Error>)}
    <Form method='post' className="text-white md:w-full  space-y-3" noValidate>
     <FormClient client={client}/>
     <input className="bg-slate-900 text-white  p-5 hover:brightness-150 cursor-pointer rounded-lg ease-linear w-full" type="submit" value="Submit" />
    </Form>
    </>
  )
}

export default EditClient