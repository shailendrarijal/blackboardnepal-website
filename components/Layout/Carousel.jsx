import Carousel from 'react-bootstrap/Carousel';

export default function CarouselDiv() {
    return (
      <div>
        <div className="container">

        <Carousel className="carousel">
            <Carousel.Item className="carouselImage">
              <img
                className="d-block w-100"
                src="carousel1.JPG"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Beautiful places</h3>
                <p>Learn about different beautiful places in Nepal</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carouselImage">
              <img
                className="d-block w-100"
                src="carousel2.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Delicious cuisines</h3>
                <p>Learn the recipes of different food and beverages and learn their cultural importance</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carouselImage">
              <img
                className="d-block w-100"
                src="carousel3.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Traditions</h3>
                <p>Learn about different traditions of Nepal</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        
  
  
        <style jsx>{`
          .container-fluid{
            padding: 0;
           
          }

          h3{
            color: #efefef;
          }
          h3, p {
            background-color: #888;
            opacity: 0.7;
          }

         .w-100 {
            width: 100% !important;
            height: 75vh;
            margin:auto;
          }
          @media only screen and (max-width: 600px) {
            .w-100{
              width: 100% !important;
              height: 60vh;
              margin:auto;
            }
          }
        `}</style>
  
      </div>
  
    )
  }
  