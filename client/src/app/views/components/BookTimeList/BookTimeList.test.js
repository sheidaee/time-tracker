import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ReactTable from "react-table";

import { BookTimeList } from "./BookTimeList";

configure({ adapter: new Adapter() });

describe('<BookTimeList />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BookTimeList onFetchList={() => {}} />);
  })

  it('should render <ReactTable /> component', () => {
    expect(wrapper.contains(<ReactTable/>)).toEqual(true);
  })
})
