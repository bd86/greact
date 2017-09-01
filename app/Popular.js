import React from 'react';

class Popular extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All'
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(lang) {
    this.setState(function() {
      return {
        selectedLanguage: lang
      }
    });
  }

  render() {
    let languages = ['All', 'JavvaScript', 'Ruby', 'Java', 'Css', 'Python'];
    return (
      <ul className="languages">
      <p>selected: {this.state.selectedLanguage}</p>
        {languages.map((lang) => {
          return (
            <li
              onClick={this.updateLanguage.bind(null, lang)}
              key={lang}>
              {lang}
            </li>
          )
        })}
      </ul>
    );
  }
}

export default Popular;
