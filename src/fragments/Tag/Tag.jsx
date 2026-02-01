import css from './Tag.module.css';

const Tag = ({ text, icon }) => {
  return (
    <div className={css.tag}>
      <svg width="20" height="20">
        <use href={`/icons.svg#${icon}`} />
      </svg>
      <span className={css.tag_text}>{text}</span>
    </div>
  );
};

export default Tag;
