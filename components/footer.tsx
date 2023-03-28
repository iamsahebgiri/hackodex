import { faGoogle, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
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
  const { gmail, instagram, linkedin, rights }: Footer = footerData;

  return (
    <footer className="text-[#6e352c] border-t border-gray-600">
      <div className="max-w-3xl mx-auto py-8 flex flex-col items-center justify-between">
      <p className="text-sm">{rights}</p>
        <div className="flex items-center mb-4 md:mb-0 mt-5">
          <IconLink icon={<FontAwesomeIcon icon={faGoogle} className="mr-4 text-xl hover:bg-[#cf5230] hover:text-white p-2 rounded-full"  />} url={`mailto:${gmail}`} />
          <IconLink icon={<FontAwesomeIcon icon={faInstagram} className="mr-4 text-2xl hover:bg-[#cf5230] hover:text-white p-2 rounded-full" />} url={instagram} />
          <IconLink icon={<FontAwesomeIcon icon={faLinkedin} className="mr-4 text-2xl hover:bg-[#cf5230] hover:text-white p-2 rounded-full"  />} url={linkedin} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

