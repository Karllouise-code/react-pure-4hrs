function UserGreeting({name = "Guest", isLoggedin = false}) {
    /* if (props.isLoggedin) {
        return <h1>Hello, {props.name}!</h1>
    } 
    else {
        return <h2>Please login to continue</h2>
    } */

        const welcomeMessage = 
                <h2 className="welcome-message">Welcome, {name}!</h2>
        const loginPrompt = 
                <h2 className="login-prompt">Please login to continue</h2>
   
   return (isLoggedin ? welcomeMessage : loginPrompt)
}

export default UserGreeting;