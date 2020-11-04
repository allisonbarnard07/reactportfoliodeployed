import React from "react";
import { Container, Row } from "react-bootstrap";
import Card from '../components/Card';
import WoodDoor from '../assets/images/woodDoor.png';
import employeeManagementSystem from '../assets/images/employeeManagementSystem.gif';
import readMe from '../assets/images/readMe.gif';
import websiteCleanup from '../assets/images/websiteCleanup.png';
import buildAndFlex from '../assets/images/buildAndFlex.png';
import passwordGenerator from '../assets/images/passwordGenerator.png';



class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Wood Door",
          subTitle: "Job search application.",
          imgSrc: WoodDoor,
          link: "https://allisonbarnard07.github.io/Job-Search/",
          selected: false,
        },
        {
          id: 1,
          title: "Employee Management System",
          subTitle: "Employee Management System application.",
          imgSrc: employeeManagementSystem,
          link: "https://github.com/allisonbarnard07/employeeManagementSystem",
          selected: false,
        },
        {
          id: 2,
          title: "ReadMe Generator",
          subTitle: "ReadMe Generator application.",
          imgSrc: readMe,
          link: "https://github.com/allisonbarnard07/ReadMeGenerator",
          selected: false,
        },
          {
            id: 3,
            title: "Website Clean Up",
            subTitle: "A code clean up project.",
            imgSrc: websiteCleanup,
            link: "https://allisonbarnard07.github.io/website_cleanup/",
            selected: false,
          },
          {
            id: 4,
            title: "Build & Flex",
            subTitle: "A walking challenge application.",
            imgSrc: buildAndFlex,
            link: "https://buildandflex.herokuapp.com/",
            selected: false,
          },
          {
            id: 4,
            title: "Password Generator",
            subTitle: "An application where users can choose criteria from prompt to create a password.",
            imgSrc: passwordGenerator,
            link: "https://allisonbarnard07.github.io/password_generator/",
            selected: false,
          }
      ],
    };
  }

  handleCardClick = (id, card) => {

    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach(item => {
        if(item.id !== id) {
            item.selected = false;
        }
    });

    this.setState({
        items
    });
}


makeItems = (items) => {
    return items.map(item => {
        return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
    })
}


render() {
    return(
        <Container fluid={true}>
            <Row className="justify-content-around">
                {this.makeItems(this.state.items)}
            </Row>
        </Container>
    );
}

}

export default Carousel;
