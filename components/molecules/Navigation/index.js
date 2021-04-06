import Link from 'next/link';

import { Navigation, NavigationList } from 'components/molecules/Navigation/styles';
import menu from 'constans/menu';
import CloseIcon from '../../../public/icons/close-icon.svg';

const MainNavigation = ({open, setOpen}) => (
  <Navigation open={open}>
    <CloseIcon onClick={() => setOpen(false)} />
    <NavigationList>
      { menu.map(item => (
        !item.extra &&
        <Link key={item.link} href={item.link}>
          <a title={item.text}>{item.text}</a>
        </Link>
        )
      )}
    </NavigationList>
  </Navigation>		
);

export default MainNavigation;