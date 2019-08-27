import React from "react";
import { Menu, Icon, Layout } from "antd";
import "./Sider.css";

const { SubMenu } = Menu;
const { Sider } = Layout;
export default class MySider extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  toggleCollapsed(collapsed) {
    console.log(collapsed);
    this.setState({
      collapsed: collapsed
    });
  }

  render() {
    return (
      <Sider className="siderBox">
        <div className="iconBox">
          <img
            className="icon"
            src="http://a.hiphotos.baidu.com/image/pic/item/838ba61ea8d3fd1fc9c7b6853a4e251f94ca5f46.jpg"
          ></img>
          <div className="inforBox">
            <div>Mark Stephen</div>
            <div>Web Designer</div>
          </div>
        </div>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>Option 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>Option 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="inbox" />
            <span>Option 3</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>Navigation One</span>
              </span>
            }
          >
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="appstore" />
                <span>Navigation Two</span>
              </span>
            }
          >
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}
