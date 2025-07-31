import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import { dummyPublishedCreationData } from '../assets/assets';
import { Heart } from 'lucide-react';
import axios from 'axios';
import {useAuth} from '@clerk/clerk-react'
import toast from 'react-hot-toast';

  axios.defaults.baseURL=import.meta.env.VITE_BASE_URL;

const Community = () => {


  const [creations, setCreations] = useState([]);
  const { user } = useUser();
const [loading,setLoading]=useState(true)
const {getToken}=useAuth()
  const fetchCreations = async () => {
    try {
      const {data}=await axios.get('/api/user/get-published-creations',{
        headers:{Authorization:`Bearer ${await getToken()}`}
      })
      if(data.success){
        setCreations(data.creations)
      }else{
        toast.error(data.message)
      }
    } catch (error) {
              toast.error(error.message)

    }
    setLoading(false)
  };


  const imageLikeToggle=async(id)=>{
      try {
          const {data}=await axios.post('/api/user/toggle-like-creations',{id},{
        headers:{Authorization:`Bearer ${await getToken()}`}
      })

      if(data.success){
        toast.success(data.message)
        await fetchCreations()
      }else{
        toast.error(data.message)
      }
     } catch (error) {
                toast.error(error.message)

      }
  }

  useEffect(() => {
    if (user) {
      fetchCreations();
    }
  }, [user]);

  return !loading ? (
    <div className="flex-1 h-full flex flex-col gap-4 p-6">
      <h1 className="text-xl font-semibold text-slate-800 mb-2">Creations</h1>

      <div className="bg-white rounded-xl p-6 h-full overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {creations.map((creation, index) => (
            <div
              key={index}
              className="relative group w-full h-[350px] bg-gray-100 rounded-lg overflow-hidden shadow-sm"
            >
              <img
                src={creation.content}
                alt="User creation"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 overflow-y-auto">
                <div className="text-white text-sm mb-3 max-h-[60%] overflow-y-auto">
                  {creation.prompt}
                </div>
                <div className="flex items-center justify-end gap-1 text-white">
                  <p className="text-sm">{creation.likes.length}</p>
                  <Heart onClick={()=>imageLikeToggle(creation.id)}
                    className={`w-5 h-5 cursor-pointer transition ${
                      creation.likes.includes(user.id)
                        ? 'fill-red-500 text-red-600'
                        : 'text-white'
                    }`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div className='flex justify-center items-center h-full'>
      <span className='w-10 h-10 my-1 rounded-full border-3 border-primary border-t-transparent animate-spin'></span>
    </div>
  )
};

export default Community;
