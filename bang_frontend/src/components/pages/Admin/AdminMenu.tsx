import '../../css/AdminMenu.css';

function LandingPage() {

    return (
        <div className="App">

            <div className='logoDiv'>
                <img src='/static/images/BangLogo.png' className='logo' />
                <div className='welcome'> <h1>HELLO ADMIN</h1> <p className='tag'>Welcome To The Admin Menu!</p></div>
            </div>

            <div className='adminmenu'>

                MANAGE

                <div className='choices1'>
                    <a href='/venues'><button className='btn'>VENUE RESERVATIONS</button></a>
                    <a href='/manageroom'><button className='btn'>ROOM RESERVATIONS</button></a>
                </div>

                <div className='choices1'>
                    <a href='/addfood'><button className='btn'>ADD NEW FOOD</button></a>
                    <a href='/newfood'><button className='btn'>NEW FOOD MENU</button></a>
                </div>

            </div>

        </div>
    );
}

export default LandingPage;
