import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Button } from "@blueprintjs/core";

import { SearchBar } from "./SearchBar";

configure({ adapter: new Adapter() });

describe("<SearchBar />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SearchBar bookTimeRecords={{}} loading="false" />);
  });

  it("should disable submit button if data is loading", () => {
    wrapper = shallow(<SearchBar bookTimeRecords={{}} loading="true" />);

    expect(wrapper.find(Button).find('[disabled="true"]')).toHaveLength(1);        
  });
});
