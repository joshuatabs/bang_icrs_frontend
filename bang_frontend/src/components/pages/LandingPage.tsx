import '../css/LandingPage.css';

function LandingPage() {

    return (
        <div className="App">

            <header className="App-header">

                <img src='/static/images/BangLogo.png' className='App-logo' alt="logo"/>
                <h1>LOGIN AS</h1>

                <div className='choices1'>

                    <a href='/login'><button className='btn'>USER</button></a>
                    <a href='/adminlogin'><button className='btn'>ADMIN</button></a>

                </div>

            </header>

        </div>
    );
}

export default LandingPage;
