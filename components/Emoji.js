const Emoji = ({ emoji, className }) => (
  <span role="img" className={className} aria-label="sv-emoji">
    {emoji}
  </span>
)

export default Emoji
