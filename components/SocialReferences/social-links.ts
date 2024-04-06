import githubIcon from "@/assets/svg/social/github-outlined.svg";
import instagramIcon from "@/assets/svg/social/instagram-outlined.svg";
import linkedinIcon from "@/assets/svg/social/linkedin-inner.svg";

const STATIC_SOCIAL_LINKS = [
  {
    key: 0,
	  id: 'social-instagram',
	  label: 'Instagram',
    link: 'https://instagram.com/michelcamargo',
	  // icon: instagramIcon.src,
  },
	{
    key: 1,
	  id: 'social-linkedin',
	  label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/michelscamargo',
	  // icon: linkedinIcon.src,
  },
	{
    key: 1,
	  id: 'social-github',
	  label: 'GitHub',
    link: 'https://github.com/michelcamargo',
	  // icon: githubIcon.src,
  },
];

export default STATIC_SOCIAL_LINKS;
