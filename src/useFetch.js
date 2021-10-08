import {useState , useEffect} from 'react';

// So this is a custom hook , defined by us .its very similiar to built in hooks such as useState,useEffect

//THE NAME OF THE CUSTOM HOOK MUST ALWAYS START WITH USE.

const useFetch=(endPoint)=>{
    const[data,setData]=useState('');
    const [isPending,setIsPending]=useState(true);
    const [error,setError]=useState(null)

        //Runs everytime there is a render
        useEffect(() =>{
            const abortCont= new AbortController();
            setTimeout(()=>{
            fetch(endPoint,{signal:abortCont.signal})
            .then(res =>{
                if(!res.ok){
                    throw Error("Couldn't fetch data from the resource");
                }
                return res.json()
            })
            .then(data =>{
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err =>{
                if(err.name ==='AbortError'){
                    console.log('Fetch aborted');
                }else{
                setIsPending(false)
                setError(err.message)
                // console.log(err);
                }
            })
        },1000);

        return ()=> abortCont.abort();
        },[endPoint])

        return { data , isPending , error}

}
export default useFetch;