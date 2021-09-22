import RegisterForm from "../../components/auth/RegisterForm"
import { MDBRow, MDBCol, MDBContainer } from 'mdb-react-ui-kit'
import {Link,Redirect} from 'react-router-dom'
import { useAuthContext } from "../../contexts/AuthContext"
import LoadingSpinner from "../../components/others/LoadingSpinner"

const Register  = () =>{
    const {authState:{isAuthenticated, isAuthenticating}} = useAuthContext()
    if(isAuthenticating){
      return <LoadingSpinner />
    }
    if(isAuthenticated){
      return <Redirect to='/dashboard' />
    }
    return (
        <div className='register-container'>
            <MDBContainer fluid>
            <MDBRow>
                <MDBCol lg='7'>
                    <div className="p-2">
                        <h1 className='display-4 title'>Welcome to <span>Wallet Plus</span> </h1>
                        <h6 className='subtitle'>Don't have an account? It only takes a matter of seconds to create one.</h6>
                        <div className='mb-2'>
                            <p className='d-flex justify-content-end text-white'>Already Have An Account?</p>
                            <MDBCol className='container' lg='4'>
                                <button className='w-100'>
                                    <Link to='/auth'>
                                        Login here
                                    </Link>
                                </button>
                            </MDBCol>
                        </div>
                    </div>
                </MDBCol>
                <MDBCol className="order-sm-0" lg='5' sm="12" md="12" xs="12">
                    <RegisterForm />
                </MDBCol>
            </MDBRow>
            </MDBContainer>
        </div>
    )
}
export default Register