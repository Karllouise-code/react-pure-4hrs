function UserGreeting(props) {
    /* if (props.isLoggedin) {
        return <h1>Hello, {props.name}!</h1>
    } 
    else {
        return <h2>Please login to continue</h2>
    } */

        const welcomeMessage = 
                <h2 className="welcome-message">Welcome, {props.name}!</h2>
        const loginPrompt = 
                <h2 className="login-prompt">Please login to continue</h2>
   
   return (props.isLoggedin ? welcomeMessage : loginPrompt)
}

export default UserGreeting;