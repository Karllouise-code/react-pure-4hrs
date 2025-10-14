function ProfilePicture({alt}) {
    const imageUrl = './src/assets/01-KARLRITO.jpeg';

    const handleClick = (e) => {
        e.target.style.display = 'none';
    };
    
  return (
    // <img src={src} alt={alt} style={{width: "100px", height: "100px"}} />
    <img onClick={(e) => handleClick(e)} src={imageUrl} alt={alt} style={{width: "100px", height: "100px"}} />
  );
}

export default ProfilePicture;