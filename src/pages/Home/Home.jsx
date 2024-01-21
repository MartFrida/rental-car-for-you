import { Component } from "react"
// import { fetchall } from "../../services/api"

const url = new URL('https://65a98bd7219bfa37186970af.mockapi.io/car/');
url.searchParams.append('make', 'Volvo');
url.searchParams.append('page', 1);
url.searchParams.append('limit', 12);

export class Home extends Component {

  async componentDidMount() {
    const { car } = await fetch(url, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
    }).catch(error => {
      // handle error
    })
  }
  render() {
    return (
      <div> Home</div>
    )
  }

}

export default Home