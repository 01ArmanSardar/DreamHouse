import { createContext, useEffect, useState } from "react";
import auth from '../../FireBase/FireBase.init'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut,updateProfile } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";
import { storage } from "../../FireBase/FireBase.init";
import {ref,uploadBytes,getDownloadURL} from "firebase/storage"
export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [user, SetUser] = useState(null)
    const [loading,SetLoading]=useState(true)
    

    
    
    
    const CreateAccount = (email, password) => {
        SetLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
        // const storageRef = ref(storage, `profilePhotos/${photo.name}`);
        //  uploadBytes(storageRef, photo);
        // const photoURL = getDownloadURL(storageRef);
        // updateProfile(userCredential.user, {
        //     displayName: name,
        //     photoURL: photoURL,
        //   });
         

    }

    const Login = (email, password) => {
        SetLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
        
        
    }

    const Logout=()=>{
        SetLoading(true)
        return signOut(auth) 

    }

    useEffect(() => {
        const Unsubscribe = onAuthStateChanged(auth, (currentuSer) => {
            console.log('i am in onAUthstateChanged and ovserving currenuser',currentuSer);
            SetUser(currentuSer)
            SetLoading(false)

        })
        return () => { Unsubscribe() }

    }, [])

    const authInfo = {
        user,
        CreateAccount,
        Login,
        Logout,
        auth,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;