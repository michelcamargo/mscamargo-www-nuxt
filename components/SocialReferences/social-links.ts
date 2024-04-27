import githubIcon from "@/assets/svg/social/github.svg";
import instagramIcon from "@/assets/svg/social/instagram.svg";
import linkedinIcon from "@/assets/svg/social/linkedin.svg";

const STATIC_SOCIAL_LINKS = [
  {
    key: 0,
	  id: 'social-instagram',
	  label: 'Instagram',
    link: 'https://instagram.com/michelcamargo',
	  icon: instagramIcon,
  },
	{
    key: 1,
	  id: 'social-linkedin',
	  label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/michelscamargo',
	  icon: linkedinIcon,
  },
	{
    key: 1,
	  id: 'social-github',
	  label: 'GitHub',
    link: 'https://github.com/michelcamargo',
	  icon: githubIcon,
  },
];

export default STATIC_SOCIAL_LINKS;
