export const getUser = async(uri)=>{
    console.log("here in api")
    try{
        const response = await fetch('https://randomuser.me/api/'+uri, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        if(data){
            return data
        }
    }catch(e){
        throw new Error(e);
    }
}