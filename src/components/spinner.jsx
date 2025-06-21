export default function Spinner() {
  return (
    <div
      style={{
        width: '40px',
        height: '40px',
        border: '4px solid rgba(0,0,0,0.1)',
        borderTopColor: '#3498db',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
        margin: '100px, auto',
        marginTop: '200px',
      }}
    />
  );
}
