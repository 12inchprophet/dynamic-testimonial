import React, { useEffect } from '@blocklet/pages-kit/builtin/react';
import { Box, Typography } from '@blocklet/pages-kit/builtin/mui/material';

function TestimonialCard({ Name, Quote, Title, Color, FontFamily, delay, enableFloating, enableStars, stars }) {
  const renderStars = (count) => {
    return Array.from({ length: count }, (_, index) => (
      <Typography
        key={index}
        sx={{
          color: '#FFD700', // Gold color for stars
          fontSize: '18px',
          marginRight: '4px',
        }}
      >
        ★
      </Typography>
    ));
  };

  return (
    <Box
      sx={{
        width: '300px',
        backgroundColor: 'white',
        borderRadius: '16px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        border: '1px solid #ddd',
        margin: '16px',
        animation: enableFloating ? `float 3s ease-in-out infinite` : 'none',
        animationDelay: enableFloating ? delay : '0s',
        '@keyframes float': {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)', // Float up slightly
          },
        },
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
        },
      }}
    >
      <Box sx={{ padding: '24px' }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            fontSize: '18px',
            marginBottom: '16px',
            color: Color,
            fontFamily: FontFamily,
          }}
        >
          {Name}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontStyle: 'italic',
            fontSize: '14px',
            lineHeight: '1.6',
            marginBottom: '24px',
            textAlign: 'center',
          }}
        >
          "{Quote}"
        </Typography>
        {enableStars && (
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '8px' }}>
            {renderStars(stars)}
          </Box>
        )}
      </Box>
      <Box
        sx={{
          backgroundColor: Color,
          height: '50px',
          position: 'relative',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '-15px',
            width: '200%',
            height: '30px',
            backgroundColor: Color,
            borderRadius: '50%',
            transform: 'translateX(-25%)',
          },
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{
            fontSize: '14px',
            fontWeight: 'bold',
            zIndex: 1,
            fontFamily: FontFamily,
          }}
        >
          {Title}
        </Typography>
      </Box>
    </Box>
  );
}

export default function TestimonialBanner({
  name1,
  quote1,
  title1,
  color1,
  stars1,
  name2,
  quote2,
  title2,
  color2,
  stars2,
  name3,
  quote3,
  title3,
  color3,
  stars3,
  fontKey,
  biColor,
  bgOpacity,
  enableFloating,
  enableStars,
}) {
  useEffect(() => {
    const fontLink = document.createElement('link');
    fontLink.href = `https://fonts.googleapis.com/css2?family=${fontKey.replace(
      ' ',
      '+'
    )}:wght@400;700&display=swap`;
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);
  }, [fontKey]);

  const getRGBA = (color, opacity) => {
    if (color.startsWith('#')) {
      const hex = color.slice(1);
      const bigint = parseInt(hex, 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }
    return `rgba(${color}, ${opacity})`;
  };

  const bannerBackgroundColor = getRGBA(biColor, bgOpacity);

  return (
    <Box
      sx={{
        backgroundColor: bannerBackgroundColor,
        display: 'flex',
        flexDirection: {
          xs: 'column',
          sm: 'row',
        },
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        gap: '16px',
        borderRadius: '8px',
      }}
    >
      <TestimonialCard
        Name={name1}
        Quote={quote1}
        Title={title1}
        Color={color1}
        FontFamily={fontKey}
        delay="0s"
        enableFloating={enableFloating}
        enableStars={enableStars}
        stars={stars1} // Number of stars for the first card
      />
      <TestimonialCard
        Name={name2}
        Quote={quote2}
        Title={title2}
        Color={color2}
        FontFamily={fontKey}
        delay="0.5s"
        enableFloating={enableFloating}
        enableStars={enableStars}
        stars={stars2} // Number of stars for the second card
      />
      <TestimonialCard
        Name={name3}
        Quote={quote3}
        Title={title3}
        Color={color3}
        FontFamily={fontKey}
        delay="1s"
        enableFloating={enableFloating}
        enableStars={enableStars}
        stars={stars3} // Number of stars for the third card
      />
    </Box>
  );
}
