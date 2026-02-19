  function Button({text, OnClick}){
    return (
      <button
        onClick={OnClick}
        style={{
          padding: '8px 16px',
          backgroundColor: '#ffc107',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginTop: '8px',
        }}>
        {text}
      </button>
    )
  }

    export default Button