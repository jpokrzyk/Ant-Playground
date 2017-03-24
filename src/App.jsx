import "./App.css";

import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
const { Content, Sider } = Layout;

import LoginForm from './LoginForm'

class App extends Component {
  state = {
    collapsed: false,
    mode: "inline"
  };
  onCollapse = collapsed => {
    this.setState({
      collapsed,
      mode: collapsed ? "vertical" : "inline"
    });
  };

  render() {
    return (
      <Layout className="layout">
        <Sider
          className="slider"
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" mode={this.state.mode} defaultSelectedKeys={["6"]}>
            <Menu.Item key="users">
              <span>
                <Icon type="user" />
                  <span className="nav-text">Users</span>
              </span>
            </Menu.Item>
            <Menu.Item key="challenges">
              <span>
                <Icon type="team" />
                  <span className="nav-text">Challenges</span>
              </span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "12px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              <LoginForm />
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
