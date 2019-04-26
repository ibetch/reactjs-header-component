import { shallow } from 'enzyme';

import HeaderVariants from './HeaderVariants';
import Preview from './Preview';
import Editor from './Editor';

describe('<HeaderVariants />', () => {
  it('should shallowRender', () => {
    // Render the HeaderVariants
    const wrapper = shallow(<HeaderVariants />);
    expect(wrapper).toBeDefined();
  });
  it('should render a Preview component', () => {
    const wrapper = shallow(<HeaderVariants />);
    expect(wrapper.find(Preview)).toHaveLength(1);
  });
  it('should render a Editor component', () => {
    const wrapper = shallow(<HeaderVariants />);
    expect(wrapper.find(Editor)).toHaveLength(1);
  });
});
