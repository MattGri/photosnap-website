import { useState, useEffect } from 'react';
import '../styles/pricing.scss';
import Beta from '../components/Beta';
import { Switch } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';

const Pricing = () => {
  useEffect(() => {
    document.title = 'Pricing';
  }, []);

  const [checked, setChecked] = useState<boolean>(false);

  return (
    <>
      <header className="wrapper">
        <div className="pricing">
          <span className="line"></span>
          <div className="container">
            <h1 className="title">Pricing</h1>
            <p className="text">
              Create your stories, Photosnap is a platform for
              <br />
              photographers and visual storytellers. It's the simple
              <br />
              way to create and share your photos.
            </p>
          </div>
        </div>
        <div className="priceImageContainer">
          <img className="priceImage" src="./images/price.jpg" alt="price" />
        </div>
      </header>
      <main className="pricingMain">
        <div className="flexWrapper">
          <div className="box">
            <p
              className="text"
              style={{
                fontWeight: checked ? 'normal' : 'bold',
              }}
            >
              Monthly
            </p>
            <Switch
              style={{
                color: checked ? '#fff' : '#000',
              }}
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />
            <p
              className="text"
              style={{
                fontWeight: checked ? 'bold' : 'normal',
              }}
            >
              Yearly
            </p>
          </div>
        </div>
        <div className="boxWrapper">
          <div className="box side">
            <h3 className="title">Price</h3>
            <p className="text">
              Includes basic usage of our platform.
              <br />
              Recommended for new and aspiring
              <br />
              photographers.
            </p>
            <p className="price">{checked ? '$190.00' : '$19.00'}</p>
            <p className="month">{checked ? 'per year' : 'per month'}</p>
            <button className="plan">pick plan</button>
          </div>
          <div className="box center">
            <span className="line"></span>
            <h3 className="title">Pro</h3>
            <p className="text">
              More advanced features available
              <br />
              Recommended for photography
              <br />
              veterans and professionals.
            </p>
            <p className="price">{checked ? '$390.00' : '$39.00'}</p>
            <p className="month">{checked ? 'per year' : 'per month'}</p>
            <button className="plan">pick plan</button>
          </div>
          <div className="box side">
            <h3 className="title">Business</h3>
            <p className="text">
              Additional features availables such as
              <br />
              more detailed metrics. Recommended
              <br />
              for businesses owners.
            </p>
            <p className="price">{checked ? '$990.00' : '$90.00'}</p>
            <p className="month">{checked ? 'per year' : 'per month'}</p>
            <button className="plan">pick plan</button>
          </div>
        </div>
        <h2 className="compareTitle">compare</h2>
        <div
          style={{
            width: '731px',
            margin: '0 auto',
          }}
        >
          <div className="titleRow">
            <ul className="items">
              <li className="item feature">the features</li>
              <li className="item">basic</li>
              <li className="item">pro</li>
              <li className="item">business</li>
            </ul>
          </div>
          <span className="titleLine"></span>
          <div className="wrapperss">
            <h5 className="title">unlimited story posting</h5>
            <DoneIcon className="checkIcons firstRow" />
            <DoneIcon className="checkIcon secondRow" />
            <DoneIcon className="checkIcon" />
          </div>
          <span className="line"></span>
          <div className="wrapperss">
            <h5 className="title">unlimited photo upload</h5>
            <DoneIcon className="first" />
            <DoneIcon className="checkIcon second" />
            <DoneIcon />
          </div>
          <span className="line"></span>
          <div className="wrapperss">
            <h5
              className="title"
              style={{
                flexBasis: '70%',
              }}
            >
              embeding custom content
            </h5>
            <DoneIcon
              style={{
                marginRight: '136px',
              }}
            />
            <DoneIcon style={{}} />
          </div>
          <span className="line"></span>
          <div
            className="wrappers"
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <h5 className="title">photo downloads</h5>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <DoneIcon />
            </div>
          </div>
          <span className="line"></span>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <h5
              style={{
                flexBasis: '70%',
              }}
            >
              customize metadata
            </h5>
            <DoneIcon
              style={{
                color: 'green',
                marginRight: '136px',
              }}
            />
            <DoneIcon
              style={{
                color: 'green',
              }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <h5
              style={{
                flexBasis: '92%',
              }}
            >
              photo downloads
            </h5>
            <DoneIcon
              style={{
                color: 'green',
              }}
            />
          </div>
        </div>
      </main>
      <Beta />
    </>
  );
};

export default Pricing;
