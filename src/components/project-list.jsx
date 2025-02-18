import PropTypes from "prop-types";
ProjectList.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

function ProjectList({ image, title, description, url }) {
  return (
    <a href={url} target="_blank">
      <div className="max-w-sm bg-gray-100 rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:brightness-90">
        {/* Card Image */}
        <img src={image} alt={title} className="w-full h-48 object-cover" />

        {/* Card Content */}
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
          <p className="text-gray-600 mt-2">{description}</p>
        </div>
      </div>
    </a>
  );
}

export default ProjectList;
