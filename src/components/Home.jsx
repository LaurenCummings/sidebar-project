import '../css/Home.css';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../Context';

function Home() {
    const { openSidebar, openModal } = useGlobalContext();

    return (
        <main>
            <button className="sidebar-toggle" onClick={openSidebar}>
                <FaBars />
            </button>
            <button className="modal-btn" onClick={openModal}>show modal</button>
        </main>
    )
}

export default Home;