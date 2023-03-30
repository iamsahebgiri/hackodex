import { resources } from '../seed';

interface Resource {
  id: number;
  title: string;
  url: string;
}

const ResourceItem: React.FC<Resource> = ({ id, title, url }) => {
  return (
    <li key={id} className="border-t border-[#e3c598]">
      <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between py-4 px-6 hover:text-[#6e352c] hover:bg-[#f59a44] transition duration-300 ease-in-out">
        <h3 className="text-lg font-medium">{title}</h3>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#cf5230]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </li>
  );
};

const Resources: React.FC = () => {
  return (
    <div className="mx-auto my-8 text-[#e3c598]">
      <ul className="border border-[#e3c598] rounded-md divide-y divide-[#e3c598]">
        {resources.map(resource => (
          <ResourceItem key={resource.id} {...resource} />
        ))}
      </ul>
    </div>
  );
};

export default Resources;
