import React, { useState, useEffect, useCallback } from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { carouselItems } from "../../utils/carouselItems";

const Carousel: React.FC = () => {
  const [Index, setIndex] = useState<number>(0);

  const handleNext = useCallback(() => {
    setIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        textAlign: "center",
        padding: 4,
      }}
    >
      <Typography variant="h4">Featured Products</Typography>

      <Box
        sx={{
          overflow: "hidden",
        }}
      >
        <Card>
          <CardMedia
            component="img"
            height="300"
            image={carouselItems[Index].imageUrl}
            alt={carouselItems[Index].title}
            sx={{ objectFit: "cover", width: "100%" }}
          />
          <CardContent sx={{ padding: 3 }}>
            <Typography variant="h5">{carouselItems[Index].title}</Typography>
            <Typography variant="body2" color="secondary" sx={{ marginTop: 1 }}>
              {carouselItems[Index].description}
            </Typography>
            <Typography variant="body2" color="primary">
              {carouselItems[Index].subtitle}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Carousel;
