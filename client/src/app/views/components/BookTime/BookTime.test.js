import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { BookTime } from "./BookTime";

configure({ adapter: new Adapter() });

describe('<BookTime />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BookTime />)
  })

  it('should render Book Time form', () => {            
    expect(wrapper.find('[form="BookTime"]')).toHaveLength(1);
  })
})
