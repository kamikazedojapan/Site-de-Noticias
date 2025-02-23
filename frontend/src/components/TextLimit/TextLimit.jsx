import PropTypes from "prop-types";

export function TextLimit({ text, limit }) {
  const textLimited =
    text?.length > limit ? `${text.substring(0, limit)}...` : text;
  return <p>{textLimited}</p>;
}

TextLimit.propTypes = {
  text: PropTypes.string.isRequired,
  limit: PropTypes.string.isRequired,
};
