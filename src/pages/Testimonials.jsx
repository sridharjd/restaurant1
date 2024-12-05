
import "./App.css";
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import StarIcon from '@mui/icons-material/Star';
const Testimonials = () => {

  return (
    <div className="container">
  
      <div className="testimonialsbox1">
        <div>
          <h2>What Our Guests Say</h2>
          <p>Read testimonials from our happy customers who have enjoyed our culinary excellence
          ELorem Ipsum is simply dummy text of the printing 
          </p>
          <div className="testimonialsbox1-1">
            <div >
              <p>Our Review</p>
              <AvatarGroup max={4} >
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
              </AvatarGroup>
            </div>
          </div> 
        </div>
      </div>

      <div className="testimonials2">
        <div className="testimonials2-1" >
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={{ width: 150, height: 150}} />
          <div className="testimonials2">
            <h1>Tamilalasan D</h1>
            <StarIcon className="menu-info-icon" style={{ color: '#ff9900', fontSize: '30px' }} />
            <StarIcon className="menu-info-icon" style={{ color: '#ff9900', fontSize: '30px' }} />
            <StarIcon className="menu-info-icon" style={{ color: '#ff9900', fontSize: '30px' }} />
            <StarIcon className="menu-info-icon" style={{ color: '#ff9900', fontSize: '30px' }} />
            <StarIcon className="menu-info-icon" style={{ color: '#ff9900', fontSize: '30px' }} />
            <p style={{color:'black'}}>(5,0)</p>
          </div>
        </div>
        <p className=''>
          ELorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <div className="testimonials2button">
          <ArrowCircleLeftIcon style={{ fontSize: '50px' }}/>
          <ArrowCircleRightIcon style={{ fontSize: '50px' }}/>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
