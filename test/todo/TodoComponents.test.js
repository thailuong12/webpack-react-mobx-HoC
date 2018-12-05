import React from "react";
import { configure, mount } from "enzyme";
import AddTodo from "../../src/components/AddTodo";
import TodoList from "../../src/components/TodoList";
import TodoElement from "../../src/components/TodoList/TodoElement";
import TodoStore from "../../src/stores/TodoStore";
import Adapter from "enzyme-adapter-react-15";
configure({ adapter: new Adapter() });

describe("AddTodo component", () => {
  it("should render 1 AddTodo component", () => {
    const wrapper = mount(<AddTodo />);
    expect(wrapper).toHaveLength(1);
  });
  it("component should have correct elements", () => {
    const wrapper = mount(<AddTodo />);
    expect(wrapper.find(".container")).toHaveLength(1);
    expect(wrapper.find("label")).toHaveLength(2);
    expect(wrapper.find("input")).toHaveLength(1);
    expect(wrapper.find("button")).toHaveLength(1);
  });
});

describe("TodoList component", () => {
  it("should render 1 TodoList component", () => {
    const component = mount(<TodoList TodoStore={TodoStore} />);
    expect(component).toHaveLength(1);
  });
  it("component should have correct elements", () => {
    const wrapper = mount(<TodoList TodoStore={TodoStore} />);
    expect(wrapper.find("div")).toHaveLength(1);
    expect(wrapper.find("span")).toHaveLength(3);
  });
  it("component should have 0 TodoElement", () => {
    const wrapper = mount(<TodoList TodoStore={TodoStore} />);
    expect(wrapper.find(TodoElement)).toHaveLength(0);
  });
});

describe("TodoElement component", () => {
  const todo = {
    id: "test",
    userId: "test",
    title: "test",
    completed: false,
    priority: 5
  };
  it("should render 1 TodoElement component", () => {
    const component = mount(<TodoElement todo={todo} />);
    expect(component).toHaveLength(1);
  });
  it("component should have 1 unchecked checkbox", () => {
    const component = mount(<TodoElement todo={todo} />);
    expect(
      component.find("input").filterWhere(item => {
        return (
          item.prop("type") === "checkbox" &&
          item.prop("defaultChecked") === false
        );
      })
    ).toHaveLength(1);
  });

  it("component should have 1 checked checkbox", () => {
    const component = mount(
      <TodoElement TodoStore={TodoStore} todo={{ ...todo, completed: true }} />
    );
    expect(
      component.find(".todoElement__status").filterWhere(item => {
        return (
          item.prop("type") === "checkbox" &&
          item.prop("defaultChecked") === true
        );
      })
    ).toHaveLength(1);
  });

  it("component should 1 element title with content = test", () => {
    const component = mount(<TodoElement TodoStore={TodoStore} todo={todo} />);
    expect(component.find(".todoElement__title").text()).toBe("test");
  });
  it("component should 1 element priority with content = test", () => {
    const component = mount(<TodoElement TodoStore={TodoStore} todo={todo} />);
    expect(
      component
        .find(".todoElement__priority")
        .text()
        .trim()
    ).toBe("5");
  });
});
