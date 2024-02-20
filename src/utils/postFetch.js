
export const postFetch = async(url,body,method) => {
const res=await fetch(url,
    {method:method,
    body:body,
    headers:{
        'Content-Type':'application/json'
    }
}
)
const data=await res.json()
if(!res.ok){
    alert(data.error.message)
}else{
    return data
}

}

