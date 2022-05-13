import React from "react";
import {
  Card,
  Avatar,
  Progress,
  Row,
  Col,
  Typography,
  Layout,
} from "antd";
import { EllipsisOutlined, PlusOutlined } from "@ant-design/icons";

const userDetail = [
  {
    name: "Janathan Smith",
    date: "2 ago",
    status: "Active",
    storage: 45,
    image: require("./images/download.jpg"),
  },
  {
    name: "Kate catey Smith",
    date: "10 ago",
    status: "Active",
    storage: 75,
    image: require("./images/jim.png"),
  },
  {
    name: "Alexandra Smith",
    date: "20 ago",
    status: "In Active",
    storage: 29,
    image: require("./images/smith.jpg"),
  },
];
const { Title } = Typography;
const { Content } = Layout;
export default function Profile() {
  return (
    <>
      <div
        className={"column"}
        style={{display:'flex',justifyContent:'space-between'}}
      >
        {userDetail.map((data, i) => {
          return (
            <Card key={i} hoverable className="highLight patient-card-cell">
              <Row style={{ height: 60 }}>
                <Col className={'storagetxt'} span={12}>{data.date}</Col>
                <Col
                  style={{ display: "flex", justifyContent: "flex-end" }}
                  span={12}
                >
                  <EllipsisOutlined className={"storagetxt"} style={{fontSize:25, fontWeight:800,color:'#002350'}}/>
                </Col>
              </Row>

              <Content
                className={"center-align"}
                style={{ flexDirection: "column" }}
              >
                <Avatar className="responsive-avatar" src={data.image} />
              </Content>
              <div style={{paddingTop:10}}>
              <Col xs={2} sm={4} md={6} lg={8} xl={10} className={'profile-font'} >{data.name}</Col >
              <Title style={{fontSize:14,color:data.status==='Active'?'#4FEDC3':'#FA8F8E',fontWeight:'bold'}}>{data.status}</Title>
              </div>

              <div
               className='progress-container'
              >
                <Progress
                showInfo={false}
                  percent={data.storage}
                  strokeWidth={3}
                  strokeColor={
                    data.storage < 30
                      ? "#18ECB4"
                      : data.storage < 50
                      ? "blue"
                      : "#DF7C00"
                  }
                />
                 <div className={'storagetxt'} >{`Storage: ${data.storage}%`}</div>
              </div>
            </Card>
          );
        })}
        <Col>
          <Card className={"patient-card-cell patient-add-cell"}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <PlusOutlined
               className={"add-plus-icon"}
              />
              <Title level={4} style={{ color: "#3D3D3D" }}>
                Create New Patient Profile
              </Title>
            </div>
            <Row></Row>
          </Card>
        </Col>
      </div>
    </>
  );
}
