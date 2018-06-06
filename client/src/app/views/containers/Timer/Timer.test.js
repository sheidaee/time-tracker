import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import moment from "moment";

import { Timer } from "./Timer";

configure({ adapter: new Adapter() });

describe('<Timer />', () => {  
  let wrapper;
  const currentDate = moment().format("MMM Do YY");
  
  beforeEach(() => {    
    wrapper = shallow(<Timer counter="1" onInitTime={() => { }} onUpdateTime={() => {}} />)
  })

  it(`Should display current date ${currentDate}`, () => {
    expect(wrapper.contains(currentDate)).toEqual(true);
  });

  it('Should display timer after start', () => {
    expect(wrapper.contains("00:00:01")).toEqual(true);
  });

  it("Should display Play button if timer was stopped", () => {
    wrapper.setState({ started: false })

    expect(wrapper.find(".pt-icon-play")).toHaveLength(1);
  });

  it("Should reset timer if Reset button was clicked", () => {   
    wrapper = shallow(<Timer counter="0" onInitTime={() => { }} onUpdateTime={() => { }} />); 
    
    expect(wrapper.contains("00:00:00")).toEqual(true);
  });

})
