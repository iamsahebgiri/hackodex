import { faGithub, faGoogle, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { footerData, Footer } from '../seed';

interface Icon {
  icon: JSX.Element;
  url: string;
}

const IconLink: React.FC<Icon> = ({ icon, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {icon}
    </a>
  );
};

const Footer: React.FC = () => {
  const { gmail, instagram, linkedin, github, youtube, rights }: Footer = footerData;

  return (
    <footer className="text-[#f59a44] border-t border-[#f59a44]">
      <div className="max-w-3xl mx-auto py-8 flex flex-col items-center justify-between">
      <p className="text-sm">{rights}</p>
        <div className="flex items-center mb-4 md:mb-0 mt-5">
          <IconLink icon={<FontAwesomeIcon icon={faGoogle} className="mr-4 text-xl hover:bg-[#f59a44] hover:text-white p-2 rounded-full"  />} url={`mailto:${gmail}`} />
          <IconLink icon={<FontAwesomeIcon icon={faInstagram} className="mr-4 text-2xl hover:bg-[#f59a44] hover:text-white p-2 rounded-full" />} url={instagram} />
          <IconLink icon={<FontAwesomeIcon icon={faLinkedin} className="mr-4 text-2xl hover:bg-[#f59a44] hover:text-white p-2 rounded-full"  />} url={linkedin} />
          <IconLink icon={<FontAwesomeIcon icon={faYoutube} className="mr-4 text-2xl hover:bg-[#f59a44] hover:text-white p-2 rounded-full"  />} url={youtube} />
          <IconLink icon={<FontAwesomeIcon icon={faGithub} className="mr-4 text-2xl hover:bg-[#f59a44] hover:text-white p-2 rounded-full"  />} url={github} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

