import './Loader.css';
import Logo from './Logo'; 

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="loader">
        <div className="loader-text">
          <Logo />
        </div>
        <div className="loader-circle"></div>
        <div className="loader-circle"></div>
        <div className="loader-circle"></div>
      </div>
    </div>
  );
};
export default Loader;