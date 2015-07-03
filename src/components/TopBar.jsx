import React, { Component } from 'react';
import { Link } from 'react-router';

export default class TopBar extends Component {
  render() {
    const style = {
      li: {
        listStyleType: 'none',
        display: 'inline-block',
        margin: '0 10px'
      },
      ul: {
        margin: 0,
        padding: 0
      }
    };

    return (
      <div>
        <ul style={style.ul}>
          <li style={style.li}><Link to="main">Main</Link></li>
          <li style={style.li}><Link to="subscribe">Cadastro</Link></li>
        </ul>
      </div>
    );
  }
}
