const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/gaurav-sharma5764/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/Gaurav1467"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter-link" src="../assets/github.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://leetcode.com/Gaurav_1102/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src="../assets/leetcode.png" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
