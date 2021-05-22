import { Link } from 'react-router-dom';
import LoginForm from '../LoginForm';
import Button from './Button';
import './styles.scss';

import photo from '../../assets/photo-header.png';


export default function Header() {
    return (
      <header className="header">
        {/* <div> */}
          <Link to="/">
            <img src={photo} name={photo} />
          </Link>
        {/* </div> */}

  
        <div>
        <LoginForm />
        </div>
  
        <div className="header__icons">
          <Button type="profile" text="Login" path="/profile" />
        </div>
      </header>
    );
  }