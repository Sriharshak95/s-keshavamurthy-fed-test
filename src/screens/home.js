import React from 'react';
import LoadButton from '../components/button/button';
import Card from '../components/card/card';
import Container from '../components/container/container';
import NavBar from '../components/navbar/navbar';
import { getUser } from '../api/getdata';
import loader from '../../images/loader.gif';
import Helper from '../components/helper';
import styles from './home.module.css';

const Home = () => {
    const [userData, setData] = React.useState([]);
    const myRef = React.useRef(null);
    const [flag,setFlag] = React.useState(true);

    React.useEffect(() => {
        // load new data at start
        getUser('?page=1&results=5')
            .then(data => setData(data.results))
            .catch(error => console.error(error));
    }, []);


    // scroll to bottom after load.
    const handleScroll = () => {
        window.scrollTo({ behavior: 'smooth', top: myRef.current.offsetTop });
    }

    // load 5 random profiles.
    const loadMore = () => {
        setFlag(false);
        getUser('?page=1&results=5')
            .then(data => {
                setFlag(true);
                setData(prevArray => [...prevArray,...data.results]);
                handleScroll();
            })
            .catch(error => console.error(error));
    };

    return (<div>
        <NavBar />
        <Container>
            {(userData.length > 0) ? userData.map((user) => {
                return <Card key={user.login.uuid} {...user} />
            }) : <Helper>
                    <img src={loader} />
                </Helper>}
            <Helper>
                {(flag)?<LoadButton onClick={loadMore} />:<img src={loader} className={styles.loader} />}
            </Helper>
            <div ref={myRef}></div>
        </Container>
    </div>);
}

export default Home;