import { shallow } from 'enzyme';

import HeaderVariants from './HeaderVariants';
import Preview from './Preview';
import Variants from './Variants';

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
  it('should render a Variants component', () => {
    const wrapper = shallow(<HeaderVariants />);
    expect(wrapper.find(Variants)).toHaveLength(1);
  });
});
