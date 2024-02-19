
export const postFetch = async(url,body) => {
const res=await fetch(url,
    {method:'POST',
    body:body,
    headers:{
        'Content-Type':'application/json'
    }
}
)
const data=res.json()
if(!res.ok){
    alert(data.error.message)
}else{
    return data
}

}

