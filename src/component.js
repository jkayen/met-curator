import * as React from 'react';
import * as axios from 'axios';

export class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 257603,
      imageUrl: ''
    }
  }
  componentDidMount() {
    axios.get(`https://www.metmuseum.org/art/collection/search/${this.state.id}`, {
      responseType: 'document'
    })
    .then(res => res.data.getElementsByClassName('utility-menu__item--download')[0])
    .then(res => res.getElementsByTagName('a')[0].href)
    // .then(res => res.data.getElementsByName('#collectionImage')[0])
    // .then(res => res.getElementsByTagName('img')[0])
    // .then(res => res.getAttributeNode('ng-src').nodeValue)
    .then(res => res.substring(res.indexOf("('") + 2, res.indexOf("')")))
    .then(res => this.setState(() => ({imageUrl: res})))
  }
  render() {
    return (
      <img src={this.state.imageUrl} alt='met-obj' />
    )
  }
}