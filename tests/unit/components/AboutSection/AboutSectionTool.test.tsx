import { render } from '@testing-library/react';
import { MdMoney } from 'react-icons/md';
import AboutsectionTool, {
  AboutSectionToolProps,
} from '@components/AboutSection/AboutSectionTool';

describe('<AboutSectionTool />', () => {
  it('should render the component', () => {
    const component = render(
      <AboutsectionTool inlineText="Money">
        <MdMoney />
      </AboutsectionTool>
    );

    expect(component).toBeTruthy();
  });

  it('should match snapshot', () => {
    const component = render(
      <AboutsectionTool inlineText="Money">
        <MdMoney />
      </AboutsectionTool>
    );

    expect(component).toMatchSnapshot();
  });
});
