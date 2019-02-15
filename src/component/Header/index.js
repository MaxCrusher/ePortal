import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import Slider from "./Slider";
import "./index.css";

const onlineReporting = [
  "Налоговая",
  "Пенсионная",
  "Статическая",
  "ФСС",
  "СБиС++",
  "Регламент",
  "Тарифы",
  "Тех. требования",
  "Партнеры"
];
const sertifitateCenter = [
  'Об услуге',
  'Интерфейс пользователя',
  'Регламент',
  'Тарифы',
  'Программы и инструкции',
  'Список Сертификатов',
  'Тех. поддержка',
];
const technicalSupport = ['Контакты','Файлы','Обратная связь'];

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  refresh = () => {
    window.location.href = 'http://lk.e-portal.ru/site/login';
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render = () => {
    const elemOnline = onlineReporting.map(elem => <DropdownItem>{elem}</DropdownItem>);
    const elemSertificate = sertifitateCenter.map(elem => <DropdownItem>{elem}</DropdownItem>);
    const elemTechnical = technicalSupport.map(elem => <DropdownItem>{elem}</DropdownItem>);
    return (
      <header>
        <Navbar light expand="md">
          <NavbarBrand href="/">УЦ Е-Портал</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Отчетность через интернет
                </DropdownToggle>
                <DropdownMenu right>{elemOnline}</DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Удостоверяющий центр
                </DropdownToggle>
                <DropdownMenu right>{elemSertificate}</DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Техническая поддержка
                </DropdownToggle>
                <DropdownMenu right>{elemTechnical}</DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav onClick={this.refresh} className="noneAfter">
                  Личный кабинет
                </DropdownToggle>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        <Slider />
      </header>
    );
  };
}
export default Header;
