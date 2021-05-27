export default function Picture(props) {
    const { name, picture } = props;
    return (
      <div>
        <img src={picture} alt={name} width= "300px" />
      </div>
    );
  }

  