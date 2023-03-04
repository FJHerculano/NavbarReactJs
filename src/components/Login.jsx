import './login.css'
import img from "../assets/hello.svg"

const Login = () => {
  return (
    <div>
        <div className="container col-11 col-md-9" id="form-container">
        <div className="row align-items-center gx-5">
            <div className="col-md-6 order-md-2">
                <h2>Faça o login para continuar</h2>
                <form >
                    <input type="text" className='p-2 bg-primary form-control' />
                </form>
                <form>
                    <div className="form-floating mb-3">                        
                        <input 
                            type="email" 
                            className="form-control" 
                            id="email" 
                            name="email" 
                            placeholder="Digite seu email"
                        />

                        <label for="email" className="form-label">Digite seu email</label>
                    </div>
                    <div className="form-floating mb-3">   
                        <input type="password" className="form-control" id="password" name="password" placeholder="Digite sua senha"/>
                        <label for="password" className="form-label">Digite sua senha</label>
                    </div>
                    <input type="submit" className="btn btn-primary" value="Entrar"/>
                </form>
            </div>
            <div className="col-md-6 order-md-1">
                <div className="col-12">
                <img src={img} alt="Hello New Customer" className="img-fluid"/>
                </div>
                <div className="col-12" id="link-container">
                <a href="register.html">Ainda não tenho cadastro</a>
                </div>
            </div>           
        </div>
        
    </div>
    </div>
  )
}

export default Login