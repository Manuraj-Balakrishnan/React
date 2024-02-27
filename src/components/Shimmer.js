export const ShimmerCard = () => {
  return (
    <div className="resto-card-container">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value, index) => {
        return (
          <div key={index} className="shimmer-resto-card-wrapper">
            <div className="media media-card shimmer-resto-img-container"></div>
            <div className="shimmer-resto-info-container">
              <h3 className="shimmer-resto-name"></h3>
              <div className="shimmer-resto-description">
                <p className="shimmer-resto-cuisines"></p>
              </div>
            </div>
          </div> 
        );
      })}
    </div>
  );
};

