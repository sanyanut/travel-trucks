import css from './HomePage.module.css';
import Button from '../../fragments/Button/Button.jsx';

function HomePage() {
  return (
    <div className={css.home_container}>
      <div className={css.home_content}>
        <h1 className={css.home_header}>Campers of your dreams</h1>
        <h2 className={css.home_description}>
          You can find everything you want in our catalog
        </h2>
        <Button type="button" text="View Now" link="/catalog" />
      </div>
    </div>
  );
}

export default HomePage;
