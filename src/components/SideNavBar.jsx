import '../styles/sideNav.css'
import { Link } from 'react-router-dom';

function SideNavBar() {
    return (
        <div>
            <img src='/icons8-menu-144.jpg' width={20} />
            <div className='side-nav-bar'>
                {/* logo div */}

                <div>
                    <h1>Me<span>dico</span></h1>
                </div>

                {/* navigation links */}
                <div>
                    <Link
                    to="dashboard"
                    >
                        Dashboard</Link>
                    <Link
                    to="patients_info"
                    >
                        Patients info</Link>
                    <Link
                    to="doctors_info"
                    >
                        Doctors info</Link>
                    <Link
                    to="staff_info"
                    >
                        Staff info</Link>
                    <Link
                    to="payments"
                    >
                        Payments info</Link>
                    <Link
                    to="recite_generate"
                    >
                        Recite generate</Link>
                    <button>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default SideNavBar;