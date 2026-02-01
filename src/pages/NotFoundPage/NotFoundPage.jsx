import css from './NotFoundPage.module.css';
import Button from '../../fragments/Button/Button.jsx';

function NotFoundPage() {
  return (
    <div className={css.not_found_container}>
      <h2 className={css.not_found_heading}>Page not found</h2>
      <Button
        type="button"
        link="/"
        variant="secondary"
        text="Proceed to Home page"
      />
    </div>
  );
}

export default NotFoundPage;
