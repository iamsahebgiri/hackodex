import { contributorGuidelines } from '../seed';

const ContributorGuidelineItem: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <div className="my-4">
      <h3 className="text-lg font-semibold text-[#cf5230] md:text-left text-center ">{title}</h3>
      <p className="mt-2 text-[#e3c598] md:text-left text-center ">{description}</p>
    </div>
  )
}

const ContributorGuidelines: React.FC = () => {
  return (
    <div className=" mx-auto">
      <h2 className="text-4xl mb-4 font-bold text-[#f59a44] md:text-left text-center">Contributor Guidelines</h2>
      {contributorGuidelines.map(({ id, title, description }) => (
        <ContributorGuidelineItem key={id} title={title} description={description} />
      ))}
    </div>
  )
}

export default ContributorGuidelines;

