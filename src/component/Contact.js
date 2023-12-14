const Contact=()=>{
    return(
        <div className="text-2xl font-bold m-4 p-4">
            <h1>Contact us</h1>
            <div className="text-xl">
           <form>
            <input type="text" 
             className="border border-black p-2 m-2" 
             placeholder="name"/>
            <input type="text" 
            className="border border-black p-2 m-2"  
            placeholder="message"/>
            <button 
            className= " border-black border rounded-lg p-2 m-2">
                Submit</button>
           </form>
           </div>
        </div>
    )
}
export default Contact;