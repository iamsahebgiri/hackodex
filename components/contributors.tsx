import { contributorGuidelines } from '../seed';

const ContributorGuidelineItem: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <div className="my-4">
      <h3 className="text-lg font-semibold text-[#cf5230]">{title}</h3>
      <p className="mt-2 text-[#e3c598]">{description}</p>
    </div>
  )
}

const ContributorGuidelines: React.FC = () => {
  return (
    <div className=" mx-auto py-2">
      <h2 className="text-4xl mb-4 font-bold text-[#f59a44]">Contributor Guidelines</h2>
      {contributorGuidelines.map(({ id, title, description }) => (
        <ContributorGuidelineItem key={id} title={title} description={description} />
      ))}
    </div>
  )
}

export default ContributorGuidelines;

