import React from "react";

import {
  Layout,
  Menu,
  Input,
  Row,
  Col,
  Typography,
  Button,
  Divider,
  Progress,
} from "antd";
import { SearchOutlined } from "@ant-design/icons";
import {
  ShoppingOutlined,
  UserOutlined,
  HomeOutlined,
  CreditCardOutlined,
} from "@ant-design/icons";
import Profile from "./profile";
const { Header, Content, Footer, Sider } = Layout;

const menuItems = [
  {
    title: "Dashboard",
    icon: <HomeOutlined />,
    path: "/dashboard",
    key: "dashboard",
  },
  {
    title: "Enquiry",
    icon: <ShoppingOutlined />,
    path: "/enquiry",
    key: "enquiry",
  },
  {
    title: "Profile",
    icon: <UserOutlined />,
    path: "/profile",
    key: "profile",
  },
  {
    title: "Payment",
    icon: <CreditCardOutlined />,
    path: "/payment",
    key: "payment",
  },
];

const { Title } = Typography;
const Demo = () => (
  <Layout style={{height:"100vh"}}>
    <Sider
      breakpoint="lg"
      style={{
        width: "100vh",
      }}
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <Header
        className="site-layout-header"
        style={{ padding: 0, minHeight: 200 }}
      ></Header>
      <Content style={{ minHeight: 500 }}>
        <div>
          <Title style={{ color: "#000087", fontSize: 15, paddingLeft: 20 }}>
            PATIENT
          </Title>
        </div>
        <Menu
          style={{ backgroundColor: "#e8e8e8" }}
          mode="inline"
          defaultSelectedKeys={["profile"]}
        >
          {menuItems.map((m, mIdx) => (
            <Menu.Item key={m.key} icon={m.icon} style={{ padding: 25 }}>
              {m.title}
            </Menu.Item>
          ))}
        </Menu>
      </Content>
      <Footer className={"need-our-help center-align"}>
        <div className={"sider-footer-txt"}>Need our help?</div>
        <div>
          <Button className="contactus-btn">Contact us</Button>
        </div>
      </Footer>
    </Sider>
    <Layout className={"patent-layout-grid"}>
      <Header
        className="site-layout-sub-header-background"
        style={{ padding: 0 }}
      >
        <Row>
          <Col span={24}>
            <Input
              style={{
                border: "none",
                borderColor: "transparent",
              }}
              placeholder="Search..."
              prefix={<SearchOutlined className={"search-icon-font"} />}
            />
          </Col>
        </Row>
      </Header>
      <Content>
        <div className="site-layout-background patient-profile-header-container">
          <Col xs={2} sm={4} md={6} lg={8} xl={10} className="patient-label">
            My patient profiles
          </Col>
          <Profile />
        </div>
      </Content>
      <Divider />
      <div
        className="patient-footer"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span className={"footor-active-profile"}>
            {`Active patient profile:`}{" "}
            <span className={"footor-active-profile"} style={{ color: "#000" }}>
              3 of 5
            </span>
          </span>
          <Progress
            percent={75}
            style={{ paddingTop: 10 }}
            strokeWidth={3}
            strokeColor={"#18ECB5"}
            showInfo={false}
          />
        </div>
        <div>
          <Button className={"upgrade-btn"}>Upgrade</Button>
        </div>
      </div>
    </Layout>
  </Layout>
);

export default Demo;
