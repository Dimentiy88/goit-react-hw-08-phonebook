import React from 'react';

const HomePage = () => {
  return (
    <div
      style={{
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url("https://pixabay.com/get/g93f58826b8d23cb0f6adf87474222bedf8609e25478ecf1dfc9cfec17d0534ee92fda85d6474a0cb84e720af53af53ce170d89eff72f46b45d94eecfc8036929_1920.png")`,
      }}
    >
      <h2
        style={{
          fontSize: '50px',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: 'tomato',
        }}
      >
        Welcome to Phone Book
      </h2>
    </div>
  );
};

export default HomePage;
