import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
function MenuItem({ data, onClick }) {
   console.log(data);
   return (
      <Button
         className={cx('menu-item', data.seperate && 'seperate')}
         leftIcon={data.icon}
         to={data.to}
         onClick={onClick}
      >
         {data.title}
      </Button>
   );
}

export default MenuItem;