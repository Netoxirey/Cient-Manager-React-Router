
function FormClient({client}) {
  
  return (
    <>
     <div className="flex flex-col gap-3">
      <label className="text-xl" htmlFor="name">
        Client name
      </label>
      <input type="text" className="w-5/5 rounded-lg p-3 text-black" id="name" placeholder="Write your client name" name="name" defaultValue={client?.name}/> 
      </div>
      <div className="flex flex-col gap-3">
      <label className="text-xl" htmlFor="company">
        Company
      </label>
      <input type="text" className="w-5/5 rounded-lg p-3 text-black" id="company" placeholder="Write your client company" name="company" defaultValue={client?.company}/> 
      </div>
      <div className="flex justify-between gap-3">
      <div className="flex flex-col gap-3 w-3/6">
      <label className="text-xl" htmlFor="email">
        Email
      </label>
      <input type="email" className="w-5/5 rounded-lg p-3 text-black" id="email" placeholder="Write your client email" name="email" defaultValue={client?.email}/> 
      </div>
      <div className="flex flex-col gap-3 w-3/6">
      <label className="text-xl" htmlFor="phone">
        Phone
      </label>
      <input type="number" className="w-5/5 rounded-lg p-3 text-black" id="phone" placeholder="Write your client phone number" name="phone" defaultValue={client?.phone}/> 
      </div>
      </div>
      <div className="flex justify-center">
    </div>
    <div className="flex flex-col gap-3">
      <label className="text-xl" htmlFor="note">
        Note
      </label>
      <textarea type="text" className="w-5/5 rounded-lg p-3 text-black" id="note" placeholder="Write your client name" name="note" defaultValue={client?.note}/> 
      </div>
    </>
  )
}

export default FormClient