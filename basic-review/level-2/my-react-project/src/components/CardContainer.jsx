import PropTypes from 'prop-types';

const CardContainer = ({ papers }) => {
  if (!Array.isArray(papers)) {
    return <p>Expected an array of papers, but got something else.</p>;
  }

  return (
    <div className="p-6">
      <div className="flex flex-col gap-6">
        {papers.length > 0 ? (
          papers.map((paper, index) => {
            // Check if paper.authors is an array; if not, assume it's a string
            const authors = Array.isArray(paper.authors) ? paper.authors.join(', ') : paper.authors;

            return (
              <div key={index} className="bg-white rounded-lg shadow-md p-4">
                <h2 className="text-xl text-[#3c096c] mb-2">{paper.title}</h2>
                <p className="text-sm text-gray-600 mb-2">{authors}</p>
                <p className="text-sm text-gray-600 mb-2">Published on: {paper.published_at}</p>
                <div className="mb-2">
                  <strong>Abstract:</strong>
                  <p>{paper.abstract}</p>
                </div>
                <div className="text-sm text-gray-600">
                  <strong>Citations:</strong> {paper.citation_count}
                </div>
              </div>
            );
          })
        ) : (
          <p>No papers available.</p>
        )}
      </div>
    </div>
  );
};

CardContainer.propTypes = {
  papers: PropTypes.array.isRequired,  // This should enforce 'papers' to be an array
};

export default CardContainer;
