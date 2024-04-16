

export default function SignUP() {
    return (
      <div className='sign-container'>
        <div className='header'>
          <div className="text">Sign Up</div>
          <div className="underline"></div>
        </div> 
        <div className="inputs">
          <div className="input">
            <img src="" alt=''/>
            <input type="email" placeholder="@Email"/>
          </div>
          <div className="input">
            <img src="" alt=''/>
            <input type="password" placeholder="password"/>
          </div>
        </div>  
        <div className="submit-container">
        <div className="submit">Sign Up</div>
        <div className="submit">Login</div>   
        </div>
      </div>
    );
  }