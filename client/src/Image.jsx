export default function Image({src,...rest}) {
    src = src && src.includes('https://')
      ? src
      : 'https://rent-your-houses.vercel.app/uploads/'+src;
    return (
      <img {...rest} src={src} alt={''} />
    );
  }