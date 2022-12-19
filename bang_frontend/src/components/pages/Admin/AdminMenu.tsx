import '../../css/AdminMenu.css';

function LandingPage() {

    return (
        <div className="App">

            <div className='logoDiv'>
                <img src='/static/images/BangLogo.png' className='logo' />
                <div className='welcome'> <h1>HELLO ADMIN</h1></div>
            </div>

            <div className='adminmenu'>

                <div className='choices1'>
                    <a href='/venues'><button className='btn'>VENUE RESERVATIONS</button></a>
                    <a href='/manageroom'><button className='btn'>ROOM RESERVATIONS</button></a>
                </div>

                <div className='choices1'>
                    <a href='/addfood'><button className='btn'>ADD NEW FOOD</button></a>
                </div>

                <a href='/'><button className='btn'>EXIT</button></a>

            </div>

        </div>
    );
}

export default LandingPage;
