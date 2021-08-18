export default function Card(props) {
  return (
    <div className='card animate__animated animate__flipInX' key={props.name}>
      <img
        src={`/images/projects/${props.image}`}
        loading='lazy'
        alt={props.name}
      />
      <span className='name'>{props.name}</span>
      <div className='tags'>
        {props.tech.map((e, i) => (
          <span key={i}>{e}</span>
        ))}
      </div>
      <div className='url'>
        <a
          className='btn btn-hover'
          href={props.source}
          target='_blank'
          rel='noreferrer'
        >
          Source
        </a>
        {props.live && (
          <a
            className={'btn btn-hover'}
            href={props.live}
            target='_blank'
            rel='noreferrer'
          >
            Preview
          </a>
        )}
      </div>
    </div>
  );
}
