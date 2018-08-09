import React from 'react';
import i18next from 'i18next';
import AppConsumer from '../context/AppConsumer';
import { lighthouses } from '../../payload';
import './styles.css';

class Toolbar extends React.Component {
  state = {
    lng: i18next.language,
  };

  changeLanguage = (e) => {
    const lng = e.target.value;
    this.setState({ lng: lng }, () => {
      i18next.changeLanguage(lng);
    });
  }

  render() {
    return (
      <div className='toolbar'>
        <div className='menu'>
          {
            lighthouses.map((item, idx) => (
              <button
                key={idx}
                onClick={() => { this.props.go(item.label); }}
                className={this.props.route === item.label ? 'active' : ''}
              >
                {item.label}
              </button>
            ))
          }
        </div>
        <nav className='language'>
          <button
            className={this.state.lng === 'pt' ? 'pt active' : 'pt'}
            onClick={this.changeLanguage}
            value='pt'  
          />
          <button
            className={this.state.lng === 'en' ? 'en active' : 'en'}
            onClick={this.changeLanguage}
            value='en'
          />
        </nav>
      </div>
    );
  }
};

export default AppConsumer(Toolbar);
